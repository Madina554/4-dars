function rateMovie(title, year, ratings) {
    let sum = 0;
    let len = ratings.length;
    for (let i = 0; i <= ratings; i++){
        sum = sum + ratings[i];
    }
    const averageRating = sum / len;
    let status1;
    if (averageRating >= 8.5) {
        status1 = "Ajoyib";
    } else if (averageRating >= 6.5 && averageRating < 8.5) {
        status1 = "Yaxshi";
    } else {
        status1 = "Yomon";
    }
    const natija = {
        title: title,
        year: year,
        ratings: ratings,
        averageRating: averageRating,
        status: status1
    }
    return natija;
}
console.log(rateMovie("Avatar", 2009, [9, 8, 10, 7, 9]));