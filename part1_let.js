function discountPrices (prices, discount) {
    let discounted = [];
    let finalPrice = 0;

    for (let i = 0; i < prices.length; i++){
        let discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    //console.log('i is: ')
    //console.log(i);
    //console.log('discountedPrice is:');
    console.log(discountedPrice);
    //console.log('finalPrice is: ');
    //console.log(finalPrice);

    //console.log('discounted is:');
    return discounted;
}

//discountPrices([100,200,300], .5)
console.log(discountPrices([100,200,300], .5));