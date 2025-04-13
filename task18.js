function oylar(oy) {
    let natija;
    switch (oy) {
        case 1:
            natija = 31;
            break;
        case 2:
            natija = 28;
            break;
        case 3:
            natija = 31;
            break;
        case 4:
            natija = 30;
            break;
        case 5:
            natija = 31;
            break;
        case 6:
            natija = 30;
            break;
        case 7:
            natija = 31;
            break;
        case 8:
            natija = 31;
            break;
        case 9:
            natija = 30;
            break;
        case 10:
            natija = 31;
            break;
        case 11:
            natija = 30;
            break;
        case 12:
            natija = 31;
            break;
        default:
            natija = "Noto'g'ri oy";
    }
    return natija;
}
console.log(oylar(1));
console.log(oylar(3));
console.log(oylar(5));
console.log(oylar(19)); 