//Portfolio reducer
import {loadState} from '../utils/localStorage'

const portfolioReducerDefaultState = loadState()

export default (state = portfolioReducerDefaultState,action) => {
    switch (action.type) {
        case 'ADD_ITEM':
                const newState = [
                    ...state,
                    action.item
                ]
                return newState
        
           
        case 'REMOVE_ITEM':
            const newstate = state.filter(({id})=>id !== action.id)
            return newstate
        
        case 'EDIT_ITEM':
            return state.map((record)=>{
                if (record.id === action.id) {
                    return {
                        ...record,
                        ...action
                    } 
                } else {
                    return record
                }
            })
        default:
            return state
    }
}