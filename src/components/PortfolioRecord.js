import React, {useState} from 'react'
import {connect} from 'react-redux'
import {RemoveItem,EditItem} from '../actions/portfolio'
import TextField from '@material-ui/core/TextField'

const PortfolioRecord = (props) => {

    const onChangeHandler = (e) => {
        props.dispatch(EditItem({id:props.record.id,
            share:e.target.value}))
    } 

    return (
        <div>
            {props.record.symbol}
            <TextField 
                placeholder={props.record.share}
                type={'number'}
                siez={'small'}
                variant={'outlined'}
                onChange={onChangeHandler}
            /> <button
            onClick={()=>props.dispatch(RemoveItem(props.record))}
            >X</button>
        </div>
    )
}

export default connect()(PortfolioRecord)