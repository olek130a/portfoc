import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import api from './api/api'
import dataTransformer from './utils/APIdataTransformer'
import reverse from 'reverse-object-order'





// test('data transfomer', async ()=>{
//     const response = await api.stockTimeSeries('TSLA')
//     const data = dataTransformer(response.data)
//     expect(data.symbol).toEqual('TSLA')
// })

// test('data transfomer', async ()=>{
//     const response = await api.stockTimeSeries('TSLA')
//     const data = dataTransformer(response.data)
//     expect(data.closingPrices.length).toEqual(100)
// })


// test('search endpoint with data transformer', async ()=> {
//     const response = await api.stockSearch('WIG20')
//     const results = dataTransformer.searchDataTransformer(response.data)
    
//     expect(results).toEqual('CDR')
// })


// test('IEX cloud api call', async ()=> {
//     const response = await api.stockTimeSeries("WDC");
    
//     expect(response.data[0].open).toBeLessThanOrEqual(300)
// })


// test('trasforming api response for chart pourposes', async ()=> {
//     const response = await api.stockTimeSeries("WDC");
//     const chartData = dataTransformer.stockDataTransformer(response.data)
//     const data = chartData.map((object)=>object=reverse(object))
    
//     expect(data).toEqual(30)
// })


// test('geting all tickers', async ()=> {
//     const response = await api.stockTimeSeries(['TSLA','AA']);
    
//     expect(response.data).toEqual(30)
// })


test('transforming data into portfolio', async ()=>{

    const response = await api.stockTimeSeries(['TSLA','AA'])
        const portfolio = [
    {
      id: '0684abbb-a143-4a51-9980-8e4e979713c5',
      symbol: 'TSLA',
      name: 'TESLA',
      share: 2
    },
    {
      id: '0684abbb-a143-4a51-9980-8e4edsdsa713c5',
      symbol: 'AA',
      name: 'Alimento',
      share: 2
    }]
//         const data = {
// AA:{
// chart:[
// {date: "2020-05-06", close: 7.71},
// {date: "2020-05-07", close: 7.49},
// {date: "2020-05-08", close: 8.07},
// {date: "2020-05-11", close: 7.77},
// {date: "2020-05-12", close: 7.29},
// {date: "2020-05-13", close: 6.98},
// {date: "2020-05-14", close: 6.81},
// {date: "2020-05-15", close: 6.66},
// {date: "2020-05-18", close: 7.8},
// {date: "2020-05-19", close: 7.742},
// {date: "2020-05-20", close: 8.35},
// {date: "2020-05-21", close: 8.28},
// {date: "2020-05-22", close: 8.21},
// {date: "2020-05-26", close: 8.76},
// {date: "2020-05-27", close: 9.76},
// {date: "2020-05-28", close: 9.48},
// {date: "2020-05-29", close: 9.21},
// {date: "2020-06-01", close: 9.49},
// {date: "2020-06-02", close: 9.92},
// {date: "2020-06-03", close: 10.7},
// {date: "2020-06-04", close: 11.6},
// {date: "2020-06-05", close: 12.07}
// ]
// },
// TSLA:
//   {
//     chart: [
//       {date: "2020-05-06", close: 782.58},
//       {date: "2020-05-07", close: 780.04},
//       {date: "2020-05-08", close: 819.42},
//       {date: "2020-05-11", close: 811.29},
//       {date: "2020-05-12", close: 809.41},
//       {date: "2020-05-13", close: 790.96},
//       {date: "2020-05-14", close: 803.33},
//       {date: "2020-05-15", close: 799.17},
//       {date: "2020-05-18", close: 813.63},
//       {date: "2020-05-19", close: 808.01},
//       {date: "2020-05-20", close: 815.56},
//       {date: "2020-05-21", close: 827.6},
//       {date: "2020-05-22", close: 816.88},
//       {date: "2020-05-26", close: 818.87},
//       {date: "2020-05-27", close: 820.23},
//       {date: "2020-05-28", close: 805.81},
//       {date: "2020-05-29", close: 835},
//       {date: "2020-06-01", close: 898.1},
//       {date: "2020-06-02", close: 881.56},
//       {date: "2020-06-03", close: 882.96},
//       {date: "2020-06-04", close: 864.38},
//       {date: "2020-06-05", close: 885.66}
//   ]}}



        const result = dataTransformer.stockDataTransformer(response.data,portfolio)
        const shouldEqual = (response.data.TSLA.chart[5].close*portfolio[0].share)+(response.data.AA.chart[5].close*portfolio[1].share)
        expect(result[5].close).toEqual(shouldEqual)       
})



