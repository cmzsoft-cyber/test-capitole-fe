
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import { useFormik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { generate } from 'shortid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

// Redux actions
import { newCard } from '../actions/cardAction'


const Formbutton = () => {

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const handleClickOpen = () => {
      setOpen(true)
    };
  
    const handleClose = () => {
      setOpen(false)
    };  

    
    const addNewCard = card => {
        dispatch( newCard(card) )
    }
    

    // Form validator
    const formik = useFormik({
        initialValues:{
            title: '',
            description: '',
            image: '',
            date: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('El título es obligatorio'),
            description: Yup.string().required('La descripción es obligatoria')
        }),
        onSubmit: (values, {resetForm}) => {         
            let dateNow = new Date().getTime()
            let id = generate()
            values.date = dateNow;
            values.id = id;
            addNewCard(values)                 
            handleClose()
            resetForm({})
        }
    })

    return ( 
        <>
                         
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Nueva tarjeta
                </DialogTitle>

                <form
                    onSubmit={formik.handleSubmit}
                >
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Título"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    { formik.touched.title && formik.errors.title ? 
                        (
                        <div className="contentError">
                            <p className="font-bold">Error</p>
                            <p>{formik.errors.title}</p>
                        </div>  
                        ) : null
                    }

                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Descripción"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    { formik.touched.description && formik.errors.description ? 
                        (
                        <div className="contentError">
                            <p className="font-bold">Error</p>
                            <p>{formik.errors.description}</p>
                        </div>  
                        ) : null
                    }

                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Imagen (Url)"
                        value={formik.values.image}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <input
                        type="submit"
                        className="btn"
                        value="Añadir"
                    />                       
                </form>
            </Dialog>
           

            <Icon className="btn-custom" color="secondary" onClick={handleClickOpen}>
                add_circle
            </Icon> 

        </>
    );
}
 
export default Formbutton;