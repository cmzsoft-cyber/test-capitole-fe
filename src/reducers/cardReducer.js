
import {
    CREATE_NEW_CARD   
} from '../types'

// initial state
const initialState = {
    cards: localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [],    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case CREATE_NEW_CARD:
            console.log("ENTRA CREATE_NEW_CARD")
            console.log(action.payload)
            localStorage.setItem('cards', JSON.stringify([...state.cards, action.payload]))
            return{
                ...state,
                cards: [...state.cards, action.payload]
            } 
        default:           
            return state 
    }
}
