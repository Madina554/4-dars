function orderPizza(size, toppings) {
    let pitsa = 0;
    if (size === 'large') {
        pitsa = 60000;
    } else if (size === 'medium') {
        pitsa = 50000;
    } else {
        pitsa = 40000;
    }
    this.size = size,
    this.topping = toppings.length * 7500,
    this.price = pitsa + topping,
    this.time = "30 daqiqa"
}
pizza1 = orderPizza("medium", ["cheese", "tomato"]);
console.log(pizza1);