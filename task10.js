function getWeather(city, temperature) {
    const humidity = Math.floor(Math.random() * 100);
    const windSpeed = Math.floor(Math.random() * 50);
    let status1;
    if (temperature >= 25) status1 = "Quyoshli";
    else if (temperature >= 10 && temperature < 25) status1 = "Iliq";
    else status1 = "Sovuq";
    const natija = {
        city: city,
        temperature: temperature,
        humidity: humidity,
        windSpeed: windSpeed,
        status: status1
    }
    return natija;
}
console.log(getWeather("Tashkent", 25));