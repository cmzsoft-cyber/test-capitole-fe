
import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { generate } from 'shortid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

// Redux actions
import { newCard } from '../actions/cardAction'


const Formbutton = ({ open, handleClose }) => {   

    const dispatch = useDispatch()

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
                <div className="dialog-content">
                    <DialogTitle id="form-dialog-title" className="dialog-title">
                        Nueva tarjeta
                    </DialogTitle>

                    <div className="col s12">
                        <form
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="input-field col s6">
                                <input
                                    type="text"
                                    id="title"
                                    name="title"                                                                    
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                <label htmlFor="title">Título*</label>
                            

                                { formik.touched.title && formik.errors.title ? 
                                    (
                                    <div className="contentError">
                                        <p className="font-bold">{formik.errors.title}</p>                                        
                                    </div>  
                                    ) : null
                                }
                            </div>
                            
                            <div className="input-field col s6">
                                <input
                                    type="text"
                                    id="description"
                                    name="description"                                
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                <label htmlFor="description">Descripción*</label>

                                { formik.touched.description && formik.errors.description ? 
                                    (
                                    <div className="contentError">
                                        <p className="font-bold">{formik.errors.description}</p>                                       
                                    </div>  
                                    ) : null
                                }
                            </div>
                            
                            <div className="input-field col s6">
                                <input
                                    type="text"
                                    id="image"
                                    name="image"                              
                                    value={formik.values.image}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                <label htmlFor="image">Imagen (Url)</label>

                            </div>
                            
                            <div className="col s6 text-center colSubmit">
                                <input
                                    type="submit"
                                    className="btn mx-auto"
                                    value="Añadir"                                    
                                />    
                            </div>      

                        </form>
                    </div>
                </div>

            </Dialog>       

        </>
    );
}
 
export default Formbutton;