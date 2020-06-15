import {v4 as uuid} from 'uuid'

// ADD_ITEM

export const AddItem = ({symbol,name = '',share=1}) => ({
    type:'ADD_ITEM',
    item: {
        id: uuid(),
        symbol,
        name,
        share
    }
})

//REMOVE_ITEM

export const RemoveItem = ({id}) => ({
    type:'REMOVE_ITEM',
    id
})

//EDIT_ITEM
export const EditItem = ({id,share}) => ({
    type:'EDIT_ITEM',
    id,
    share
})