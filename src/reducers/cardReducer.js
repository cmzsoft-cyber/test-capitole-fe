
import {
    CREATE_NEW_CARD,
    DELETE_CARD,
    SET_DELETE_CARD,
    SAVE_LOCAL_STORAGE
} from '../types'

// initial state
const initialState = {
    cards: localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [],    
    deletecard: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case CREATE_NEW_CARD:                      
            return{
                ...state,
                cards: [...state.cards, action.payload]
            } 
        case SET_DELETE_CARD:
            return{
                ...state,
                deletecard: action.payload
            }
        case DELETE_CARD:           
            return{
                ...state,
                cards: state.cards.filter(card => card.id !== state.deletecard),
                deletecard: null
            }
        case SAVE_LOCAL_STORAGE:
            localStorage.setItem('cards', JSON.stringify([...state.cards]))
            return{
                ...state
            }
        default:           
            return state 
    }
}
