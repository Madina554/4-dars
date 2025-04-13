function fasl(oy) {
    let natija;
    switch (oy) {
        case 12:
        case 1:
        case 2:
            natija = "Qish";
            break;
        case 3:
        case 4:
        case 5:
            natija = "Bahor";
            break;
        case 6:
        case 7:
        case 8:
            natija = "Yoz";
            break;
        case 9:
        case 10:
        case 11:
            natija = "Kuz";
            break;
        default:
            natija = "Noto'g'ri oy";
    }
    return natija;
}
console.log(fasl(1));
console.log(fasl(4)); 
console.log(fasl(7));   
console.log(fasl(10));