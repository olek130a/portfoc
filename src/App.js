import React from 'react'
import {useState, useEffect} from 'react'
import {StylesProvider} from '@material-ui/core/styles'
import api from './api/api'
import Chart from './components/Chart'
import Portfolio from './components/Portfolio'
import AutocompleteTickerInput from './components/AutocompleteTickerInput'
import { connect } from 'react-redux'
import APIdataTransformer from './utils/APIdataTransformer'




function App(props) {


  const [range, setRange] = useState('1m')

  
  

  const [dataToDispaly,setDataToDisplay] = useState({data:[],isFetching: false})
    
  const onClickHandler = (e) => {
    e.preventDefault()
    const newRange = e.target.id
    const ranges = ['1m','1y','ytd']
    ranges.forEach((range)=>{
      console.log(document.getElementById(range).className)
      document.getElementById(range).className = 'button'
    })
    e.target.className = 'button--active'


    setRange(newRange)
  }

   useEffect( ()=>{
       const fetchData = async() => {
        setDataToDisplay({data:dataToDispaly.data,isFetching:true})
        const response = await api.stockTimeSeries(props.tickers,range)
        const modifiedResponse = APIdataTransformer.stockDataTransformer(response.data,props.portfolio)
        setDataToDisplay({data:modifiedResponse,isFetching:false})
       }
      fetchData()
      if (Object.keys(dataToDispaly.data) === props.tickers)
      {
        console.log(Object.keys(dataToDispaly.data))
      }
      
   },[props.tickers,range])


  
  return (
    <StylesProvider injectFirst>
      <div className="App">
        <AutocompleteTickerInput/>
        <Portfolio
        />
        <Chart
          data={dataToDispaly.isFetching === false ? dataToDispaly.data : []}
          onClickHandler={onClickHandler}
        />
      </div>
    </StylesProvider>
  );
}


const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  tickers: state.portfolio.map((x)=>x.symbol)
})

export default connect(mapStateToProps)(App);
