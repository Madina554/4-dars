function createMatch(team1, team2, score) {
    const win = score.split(":")
    const score1 = parseInt(score[0]);
    const score2 = parseInt(score[1]);
    let winner;
    if (win[0] > win[2]) {
        winner = team1;
    } else if (win[0] < win[2]) {
        winner = team2;
    } else {
        winner = "Durrang";
    }
    const natija = {
        team1: team1,
        team2: team2,
        score: score,
        winner: winner,
        duration: "90 min",
        stadium: "Santiago Bernabeu"
    } 
    return natija;
}
console.log(createMatch("Real Madrid", "Barcelona", "2:1"));