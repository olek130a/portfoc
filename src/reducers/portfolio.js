//Portfolio reducer
import {v4 as uuid} from 'uuid'

const portfolioReducerDefaultState = [
    {
        id:uuid(),
        symbol:'TSLA',
        name: 'TESLA',
        share: 2
      },
      {
        id:uuid(),
        symbol:'A',
        name: 'Agilent Technologies Inc.',
        share: 2
      }
]

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