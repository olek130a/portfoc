import React from 'react'
import {connect} from 'react-redux'
import {
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  Tooltip,
  YAxis,
  ResponsiveContainer
} from 'recharts'





const Chart = (props) => {

 

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${payload[0].value.toFixed(2)}`}</p>
            </div>
          );
        }
      
        return null;
      };



    return (
        <div className={'Chart'}>
            <div className={'rangePicker'}>
                <ul>
                  <li
                  className={'button--active'}
                  id={'1m'}
                  onClick={props.onClickHandler}
                  >1m</li>
                  <li
                  className={'button'}
                  id={'1y'}
                  onClick={props.onClickHandler}
                  >1y</li>
                  <li
                  className={'button'}
                  id={'ytd'}
                  onClick={props.onClickHandler}
                  >ytd</li>
                </ul>
                
            </div>
            <ResponsiveContainer aspect={4.0/3.0} width='100%'>
                <LineChart
                    // width={900}
                    // height={500}
                    data={props.data}
                    >
                    <YAxis type="number" width={80}>
                    </YAxis>
                    <Tooltip 
                    content={<CustomTooltip/>}
                    allowEscapeViewBox={{x:true,y:true}}
                    viewBox={{ x: 0, y: 0, width: 400, height: 800 }}
                    animationDuration={100}
                    animationEasing={"linear"}
                    isAnimationActive={false}
                    />
                    <XAxis padding={{left: 10, right: 50}} angle={0} height={90} dataKey="date"
                    minTickGap={70}
                    >
                      
                    </XAxis>
                    <CartesianGrid stroke="#f5f5f5" vertical={false} />
                    <Line type="basis" dataKey="close" stroke="#356cfc" yAxisId={0} dot={false} activeDot={{stroke:'white'}} strokeWidth={4} />
                    
                      

                </LineChart>
              </ResponsiveContainer>
            </div>
    )
}

const mapStateToProps = (state) => ({
    portfolio: state.portfolio,
    tickers: state.portfolio.map((x)=>x.symbol)
})

export default connect(mapStateToProps)(Chart)