
import {
    CREATE_NEW_CARD,    
    DELETE_CARD,
    SET_DELETE_CARD,
    SAVE_LOCAL_STORAGE
} from '../types'

export function newCard(values){ 
    return async (dispatch) => {
        dispatch(_NewCard(values))
        dispatch(_saveLocalStorage())
    }      
}

export function deleteCard(id){
    return async (dispatch) => {
        dispatch(_setDeleteCard(id))
        dispatch(_deleteCard(id))
        dispatch(_saveLocalStorage())
    }
}

const _NewCard = values => ({
    type: CREATE_NEW_CARD,
    payload: values
})

const _setDeleteCard = id => ({
    type: SET_DELETE_CARD,
    payload: id
})

const _deleteCard = id => ({
    type: DELETE_CARD,
    payload: id
})

const _saveLocalStorage = () => ({
    type: SAVE_LOCAL_STORAGE
})

