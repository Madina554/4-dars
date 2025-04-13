function kunlar(kun) {
    let natija;
    switch (kun) {
        case 1:
            natija = "Dushanba";
            break;
        case 2:
            natija = "Seshanba";
            break;
        case 3:
            natija = "Chorshanba";
            break;
        case 4:
            natija = "Payshanba";
            break;
        case 5:
            natija = "Juma";
            break;
        case 6:
            natija = "Shanba";
            break;
        case 7:
            natija = "Yakshanba";
            break;
        default:
            natija = "Noto'g'ri kun";
    }
    return natija;
}
console.log(kunlar(1)); 
console.log(kunlar(3));
console.log(kunlar(5));  
console.log(kunlar(19)); 