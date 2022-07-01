document.getElementById("feedback").innerHTML = "Speler 1 maak je keuze";
let player1Choice = "";
let player2Choice = "";

function player1(p1choice) {
    document.getElementById("feedback").innerHTML = "Speler 2 maak je keuze";
    document.getElementById('player1').style.display = "none";
    document.getElementById('player2').style.display = "block";
    player1Choice = p1choice;
}

function player2(p2choice) {
    document.getElementById('feedback').innerHTML = "";
    document.getElementById('player1').style.display = "none";
    document.getElementById('player2').style.display = "none";
    document.getElementById('reset').style.display = "block";
    player2Choice = p2choice;
    switch (player1Choice + player2Choice) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            document.getElementById("feedback").innerText = "Speler 1 wint!";
            break;
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            document.getElementById("feedback").innerText = "Speler 2 wint!";
            break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            document.getElementById("feedback").innerText = "gelijkspel!";
            break;
        default:
            document.getElementById("feedback").innerText = "er is iets fout gegaan";
    }
}