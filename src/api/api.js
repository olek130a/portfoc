import axios from 'axios'

const StockApiInstance = axios.create({
    baseURL: 'https://cloud.iexapis.com/stable',
});


export default {
    stockTimeSeries: (symbols,range='1m') =>
    StockApiInstance({
        'method':'GET',
        'url':`/stock/market/batch`,
        'params':{
            'token':process.env.REACT_APP_IEXCLOUD_SECRET_KEY,
            'types':'chart',
            'symbols':`${symbols.join()}`,
            'chartCloseOnly':'true',
            'range': `${range}`	
        }
    }),
    symbolSearch: () => 
    StockApiInstance({
        'method':'GET',
        'url':'/ref-data/symbols',
        'params':{
            'token':process.env.REACT_APP_IEXCLOUD_SECRET_KEY
        }
    })
 }

// const  iex = require( 'iexcloud_api_wrapper' )

// export const quote = async (sym) => {
//     const quoteData = await iex.quote(sym);
//     // do something with returned quote data
//     return quoteData
// };

