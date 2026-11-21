let scoreHome = 0;
let scoreGuest = 0;

function updateScore(elementId, points) {
    if ("score-home-el" == elementId) {
        scoreHome += points;
        document.getElementById(elementId).textContent = scoreHome;
    } else {
        scoreGuest += points;
        document.getElementById(elementId).textContent = scoreGuest;
    }

}