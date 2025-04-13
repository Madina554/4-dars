function yosh(age) {
    let natija;
    switch (true) {
        case (age >=0  && age <= 12):
            natija = "Bola";
            break;
        case (age >=13 && age < 19):
            natija = "O'smir";
            break;
        case (age >= 20 && age < 59):
            natija = "Katta";
            break;
        case (age >= 60):
            natija = "Qariya";
            break;
        default:
            natija = "Noto'g'ri yosh";
    }
    return natija;
}
console.log(yosh(8));
console.log(yosh(15));
console.log(yosh(45));
console.log(yosh(65));