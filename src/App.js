import React from 'react'
import {useState, useEffect} from 'react'
import {StylesProvider} from '@material-ui/core/styles'
import api from './api/api'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Chart from './components/Chart'
import Portfolio from './components/Portfolio'
import AutocompleteTickerInput from './components/AutocompleteTickerInput'
import { connect } from 'react-redux'
import APIdataTransformer from './utils/APIdataTransformer'
import PressStart2P from './PressStart2P-Regular.ttf'


const fontPressStart2P = {
  fontFamily: 'Press Start 2P',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('PressStart2P'),
    local('Raleway-Regular'),
    url(${PressStart2P}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Press Start 2P, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [fontPressStart2P],
      },
    },
  },
});


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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}


const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  tickers: state.portfolio.map((x)=>x.symbol)
})

export default connect(mapStateToProps)(App);
