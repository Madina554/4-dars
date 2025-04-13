function createProduct(name,price) {
    const discount = Math.floor(Math.random() * 100);
    const finalPrice = Math.round(price-(price * discount/100));
    const natija = {
        name: name,
        price: price,
        discount: discount,
        finalPrice: finalPrice,
        isAvailable: true
    }
    return natija;
}
console.log(createProduct("iPhone 15", 999));