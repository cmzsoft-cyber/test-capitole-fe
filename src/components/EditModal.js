import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

// Redux actions
import { editCard } from '../actions/cardAction'

const EditModal = ({
    id, 
    title,
    description,
    image,
    date,
    openUpdate, 
    toggleUpdate, 
    CustomButton
}) => {    

    const dispatch = useDispatch()
    
    const editCardNewValues = values => {
        dispatch( editCard(values) )
    }

    // Form validator
    const formik = useFormik({
        enableReinitialize: true,
        initialValues:{
            id: id,
            title: title,
            description: description,
            image: image,
            date: date
        },
        validationSchema: Yup.object({
            title: Yup.string().required('El título es obligatorio'),
            description: Yup.string().required('La descripción es obligatoria')
        }),
        onSubmit: (values, {resetForm}) => {       
            editCardNewValues(values)   
            resetForm({})              
            toggleUpdate()            
        }
    })

    return ( 
        <>                         
            <Dialog open={openUpdate} onClose={toggleUpdate} aria-labelledby="form-dialog-title">
                <div className="dialog-content">
                    <DialogTitle id="form-dialog-title" className="dialog-title">
                        Editar tarjeta
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

                               
                                <label htmlFor="title" className={ title ? 'active' : ''}>Título*</label>
                                

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

                                <label htmlFor="description" className={ description ? 'active' : ''}>Descripción*</label>

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

                                <label htmlFor="image" className={ image ? 'active' : ''}>Imagen (Url)</label>

                            </div>
                            
                            <div className="col s6 text-center colSubmit">
                                <CustomButton 
                                    onClick={toggleUpdate} 
                                    color="secondary" 
                                    size="small"
                                    className="btn">
                                        Cancelar
                                </CustomButton>
                                <input
                                    type="submit"
                                    className="btn mx-auto"
                                    value="Editar"                                    
                                />    
                            </div>      

                        </form>
                    </div>
                </div>

            </Dialog>   

        </>
    );
}
 
export default EditModal;