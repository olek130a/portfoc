import React from 'react'
import PortfolioRecord from './PortfolioRecord'
import {connect} from 'react-redux'

const Portfolio = (props) => {
    return (
        <div>
            {props.portfolio ? props.portfolio.map((record)=> <PortfolioRecord
                record={record}
                />) : <p>Puste protfolio</p> }  
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        portfolio: state.portfolio
    }
} 

export default connect(mapStateToProps)(Portfolio)