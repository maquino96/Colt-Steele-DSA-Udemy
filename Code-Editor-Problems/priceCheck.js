
const priceCheck = (prod, prodPrices, prodSold, soldPrice) => {

    let price = {};
    let count = 0;
    let errors = []

    for ( let i = 0; i< prod.length; i++){
        price[prod[i]] = prodPrices[i]
    }

    // console.log(prices)

    for ( let j = 0; j < prodSold.length; j++){
        if(price[prodSold[j]] !== soldPrice[j]) {
            count++;
            errors.push([ prodSold[j], soldPrice[j]])

        }
    }

    return {
        count: count,
        list: errors
    }

}

let products = [ 'eggs', 'milk', 'cheese']
let productPrices = [ 2.99, 4, 7.50]

let productSold = ['cheese', 'cheese', 'milk', 'milk', 'milk', 'eggs' ]
let sold = [7.50, 10, 4, 5, 6, 2.99, 2.99]

console.log( priceCheck(products, productPrices, productSold, sold))


