function createMenuItem(name, price) {
    const prepTime = Math.floor(Math.random() * 51) + 10;
    const natija = {
        name: name,
        price: price,
        prepTime: prepTime,
        category: "main",
        isSpicy: false 
    }
    return natija;
}
console.log(createMenuItem("Osh", 45000));