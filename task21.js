function baho(mark) {
    let natija;
    switch (mark) {
        case 1:
            natija = "Yomon";
            break;
        case 2:
            natija = "Qoniqarsiz";
            break;
        case 3:
            natija = "Qoniqarli";
            break;
        case 4:
            natija = "Yaxshi";
            break;
        case 5:
            natija = "A'lo";
            break;
        default:
            natija = "Noto'g'ri baho";
    }
    return natija;
}
console.log(baho(1));
console.log(baho(3));
console.log(baho(7)); 