import React, { useEffect,useState } from 'react'
import {connect} from 'react-redux'
import {
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  Tooltip,
  YAxis,
  Label
} from 'recharts'
import api from '../api/api'
import dataTransformer from '../utils/APIdataTransformer'
import APIdataTransformer from '../utils/APIdataTransformer'
import { set } from 'mongoose'

const Chart = (props) => {
    
   


    return (
        <div className={'Chart'}>
            <div className={'rangePicker'}>
                <div
                className={'button'}
                id={'1m'}
                onClick={props.onClickHandler}
                >1m</div>
                <div
                className={'button'}
                id={'1y'}
                onClick={props.onClickHandler}
                >1y</div>
                <div
                className={'button'}
                id={'ytd'}
                onClick={props.onClickHandler}
                >ytd</div>
            </div>
            <LineChart
                width={900}
                height={500}
                data={props.data}
                margin={{ top: 50, right: 20, left: 10, bottom: 5 }}
                >
                <YAxis tickCount={10} type="number" width={80}>
                    <Label value="Close Price" position="insideLeft" angle={270} />
                </YAxis>
                <Tooltip />
                <XAxis padding={{left: 5, right: 5}} tickCount={10} angle={-60} height={90} dataKey="date" />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="close" stroke="#ff7300" yAxisId={0} />
            </LineChart>
            </div>
    )
}

const mapStateToProps = (state) => ({
    portfolio: state.portfolio,
    tickers: state.portfolio.map((x)=>x.symbol)
})

export default connect(mapStateToProps)(Chart)