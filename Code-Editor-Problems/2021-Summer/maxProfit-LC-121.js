
const maxProfit = (prices) => {
    let minprice = Math.max(...prices)
    let maxprofit = 0
    
    for ( let i = 0; i < prices.length; i++) {
        if ( prices[i] < minprice) {
            minprice = prices[i]
        } else if ( prices[i] - minprice > maxprofit ) {
            maxprofit = prices[i] - minprice;
        }

        console.log(minprice, maxprofit)

     }
     return maxprofit
}


console.log(maxProfit([7,1,5,3,6,4]))
