function raqam(raqam) {
    let natija;
    switch (raqam) {
        case 1:
            natija = "bir";
            break;
        case 2:
            natija = "ikki";
            break;
        case 3:
            natija = "uch";
            break;
        case 4:
            natija = "to'rt";
            break;
        case 5:
            natija = "besh";
            break;
        default:
            natija = "noto'g'ri raqam";
    }
    return natija;
}
console.log(raqamSozga(1));
console.log(raqamSozga(3)); 
console.log(raqamSozga(7)); 