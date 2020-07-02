import React from 'react'
import {useState} from 'react'
import Autocomplete, { createFilterOptions} from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField';
import {AddItem} from '../actions/portfolio'
import {connect} from 'react-redux'


const AutocompleteTickerInnput = (props) => {

    
    
    const [symbols] = useState(
        JSON.parse(window.localStorage.getItem('symbols'))
    );

    
    const defaultFilterOptions = createFilterOptions({
        limit: 5,
    });
 

    

    return (
        <div className={'input'}>
            <Autocomplete
                id="combo-box-demo"
                options={symbols}
                getOptionLabel={(option) => option.name}
                disableClearable={true}
                style={{ width: 300 }}
                margin={'normal'}
                filterOptions={defaultFilterOptions}
                onChange={(e,option)=>option.symbol && props.dispatch(AddItem(option))}
                renderInput={(params) => <TextField {...params} 
                    margin={'normal'}
                    label="Symbol" variant="outlined" />}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({portfolio: state.portfolio})

export default connect(mapStateToProps)(AutocompleteTickerInnput)