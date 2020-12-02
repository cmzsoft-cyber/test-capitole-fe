
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

// initial state
const initialState = {
    cards: localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [],    
    deletecard: null,
    editcard: null
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
        case SET_EDIT_CARD:
            return{
                ...state,
                editcard: action.payload
            }
        case EDIT_CARD:  
            return{
                ...state,
                cards: state.cards.map(card => card.id === action.payload.id ? card = action.payload : card),           
                editcard: null
            }
        case SORT_CARDS_ALPHABETICAL:
            let bool = action.payload;    
            let sortByKey = () =>{}        
            if(bool){
                sortByKey = key => (a, b) => a[key] > b[key] ? 1 : -1 
            }else{
                sortByKey = key => (a, b) => a[key] < b[key] ? 1 : -1 
            }                             
            return{
                ...state,
                cards: state.cards.slice().sort(sortByKey('title'))
            }
        case SORT_CARDS_CREATED:       
            let b_bool = action.payload;
            let auxCards = {}
            if(b_bool){
                auxCards = state.cards.sort((a, b) => b.date - a.date)
            }else{
                auxCards = state.cards.sort((a, b) => a.date - b.date)
            }
            return{
                ...state,
                cards: auxCards
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
