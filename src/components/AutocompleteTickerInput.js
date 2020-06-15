import React from 'react'
import {useState,useEffect} from 'react'
import Autocomplete, { createFilterOptions} from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField';
import {AddItem} from '../actions/portfolio'
import {connect} from 'react-redux'

const AutocompleteTickerInnput = (props) => {
    
    const [symbols, setSymbols] = useState(
        JSON.parse(window.localStorage.getItem('symbols'))
    );
    const [inputValue, setInputValue] = useState('');
    
    const defaultFilterOptions = createFilterOptions({
        limit: 5,
    });
 

    

    return (
        <div>
            <Autocomplete
            id="combo-box-demo"
            options={symbols}
            getOptionLabel={(option) => option.name}
            disableClearable={true}
            style={{ width: 300 }}
            filterOptions={defaultFilterOptions}
            onChange={(e,option)=>option.symbol && props.dispatch(AddItem(option))}
            renderInput={(params) => <TextField {...params} label="Symbol" variant="outlined" />}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({portfolio: state.portfolio})

export default connect(mapStateToProps)(AutocompleteTickerInnput)