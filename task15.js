function baholash(ball) {
    let natija;
    switch (true) {
        case (ball >= 90 && ball <= 100):
            natija = "A'lo";
            break;
        case (ball >= 70 && ball < 90):
            natija = "Yaxshi";
            break;
        case (ball >= 60 && ball < 70):
            natija = "Qoniqarli";
            break;
        case (ball >= 0 && ball < 60):
            natija = "Qoniqarsiz";
            break;
        default:
            natija = "Noto'g'ri ball";
    }
    return natija;
}
console.log(baholash(85));
console.log(baholash(95));
console.log(baholash(65));
console.log(baholash(45));