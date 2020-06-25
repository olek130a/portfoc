import {v4 as uuid} from 'uuid'

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) {
            return [
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
        }
        return JSON.parse(serializedState)
    } catch (error) {
        
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    } catch (error) {
        
    }
}