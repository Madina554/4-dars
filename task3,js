function orderPizza(size, toppings) {
    let pitsa = 0;
    if (size === 'large') {
        pitsa = 60000;
    } else if (size === 'medium') {
        pitsa = 50000;
    } else {
        pitsa = 40000;
    }
    const topping = toppings.length * 7500;
    const price = pitsa + topping;
    const natija = {
        size: size,
        toppings: toppings,
        price: price,
        time: "30 daqiqa"
    };

    console.log(natija);
}

console.log(orderPizza("medium", ["cheese", "tomato"]));