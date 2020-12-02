
import {
    CREATE_NEW_CARD,    
    DELETE_CARD,
    SET_DELETE_CARD,
    EDIT_CARD,
    SET_EDIT_CARD,
    SORT_CARDS_ALPHABETICAL,
    SORT_CARDS_CREATED,
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

export function editCard(values){
    return async (dispatch) => {
        dispatch(_setEditCard(values.id))
        dispatch(_editCard(values))  
        dispatch(_saveLocalStorage())
    }
}

export function sortAlphabetical(bool){
    return async (dispatch) => {
        dispatch(_sortAlphabetical(bool))
        dispatch(_saveLocalStorage())
    }
}

export function sortCreatedDate(bool){
    return async(dispatch) => {
        dispatch(_sortCreatedDate(bool))
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

const _setEditCard = id => ({
    type: SET_EDIT_CARD,
    payload: id
})

const _editCard = values => ({
    type: EDIT_CARD,
    payload: values
})

const _sortAlphabetical = bool => ({
    type: SORT_CARDS_ALPHABETICAL,
    payload: bool
})

const _sortCreatedDate = bool => ({
    type: SORT_CARDS_CREATED,
    payload: bool
})

const _saveLocalStorage = () => ({
    type: SAVE_LOCAL_STORAGE
})

