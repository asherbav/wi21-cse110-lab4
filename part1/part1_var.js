function discountPrices (prices, discount) {
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++){
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    //console.log('i is: ')
    console.log(i);
    //console.log('discountedPrice is:');
    console.log(discountedPrice);
    //console.log('finalPrice is: ');
    console.log(finalPrice);

    //console.log('discounted is:');
    return discounted;
}

discountPrices([100,200,300], .5)
//console.log(discountPrices([100,200,300], .5));