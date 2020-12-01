import React from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Redux actions
import { deleteCard } from '../actions/cardAction'

const DeleteModal= ({id, openDelete, toggleDelete, CustomButton}) => {

    const dispatch = useDispatch()

    const deleteCardById = () =>{       
        dispatch(deleteCard(id)) 
        toggleDelete()
    }   

    return ( 
        <div>    
            <Dialog
                open={openDelete}
                onClose={toggleDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
                {"Eliminar tarjeta"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    ¿Seguro que quieres eliminar esta tarjeta?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <CustomButton onClick={toggleDelete} color="secondary" size="small">
                    Cancelar
                </CustomButton>
                <CustomButton onClick={()=>deleteCardById()} color="secondary" size="small" autoFocus>
                    Eliminar
                </CustomButton>
            </DialogActions>
            </Dialog>
        </div>
    );
}
 
export default DeleteModal