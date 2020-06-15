

export default { 
    stockDataTransformer: (apiResponse,portfolio) => {

        const keys = Object.keys(apiResponse)
        const data = []
        const shareFinder = (a) => {
            return portfolio.find((x)=>{
                return x.symbol === a
            })

        }

        keys.forEach((x)=>{
           const y = apiResponse[x].chart.map((element)=>{
                return {
                    date:element.date,
                    close:element.close*shareFinder(x).share
                }
               
                
            })
            data.push(y)
        })

        const dates = data.reduce(function (r, a) {
            a.forEach(function (o) {
                const y = o.date;
                if (Array.isArray(r[y])) {
                    r[y][0] += o.close;

                } else {
                    r[y] = [o.close];
                }
            });
            return r;
        }, {}),
    
        
        result = Object.keys(dates).map(function (y) {
            return {date: y, close: dates[y][0]}
        });
    return result
},
    searchDataTransformer: (apiResponse) => {
       const results = apiResponse["bestMatches"].map((result)=> result = {
            name: result["2. name"],
            symbol: result["1. symbol"]
       })
       return results
    }
}