import React from 'react'
import {connect} from 'react-redux'
import {RemoveItem,EditItem} from '../actions/portfolio'
import TextField from '@material-ui/core/TextField'





const PortfolioRecord = (props) => {
 
    const onChangeHandler = (e) => {
        props.dispatch(EditItem({id:props.record.id,
            share:e.target.value}))
    } 

    const style = {
        border: "none",
        width: '8rem',
        fontSize: '10rem',
        fontFamily: 'Press Start 2P'
}

  
    return (
            <div className={'PortfolioRecord'}>
                <h3 className={'PortfolioRecord__symbol'}>{props.record.symbol}</h3>
                <h3 className={'PortfolioRecord__name'}>{props.record.name}</h3>
                <TextField
                    className={'input__share'}
                    defaultValue={props.record.share}
                    width='50%'
                    type={'number'}
                    size={'normal'}
                    variant={'outlined'}
                    onChange={onChangeHandler}
                    margin={'dense'}
                    style={style}
                    inputProps={{
                        min:0
                    }}
                /> 
                <button
                    onClick={()=>props.dispatch(RemoveItem(props.record))}
                >X</button>
            </div>
    )
}

export default connect()(PortfolioRecord)