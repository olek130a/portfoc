import React from 'react'
import PortfolioRecord from './PortfolioRecord'
import {connect} from 'react-redux'

const Portfolio = (props) => {
    return (
        <div className={"portfolio"}>
        <h1>Your Portfolio</h1>
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