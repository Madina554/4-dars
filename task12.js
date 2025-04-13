function getCarInfo(model, year) {
    const priceList = {
        "Tesla Model 3": 45000,
        "Tesla Model S": 80000,
        "BMW X5": 60000,
        "Chevrolet Malibu": 30000,
        "Chevrolet Cobalt": 10000,
        "Chevrolet Onix": 15000,
        "KIA K5":20000
    };
    const price = priceList[model];
    const natija = {
        model: model,
        year: year,
        price: price,
        color: "white",
        isElectric: true
    };
    return natija;
}
console.log(getCarInfo("Tesla Model 3", 2023));