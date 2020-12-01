
import {
    CREATE_NEW_CARD,    
} from '../types'

export function newCard(values){ 
    return async (dispatch) => {
        dispatch(addNewCard(values))
    }      
}

const addNewCard = values => ({
    type: CREATE_NEW_CARD,
    payload: values
})

