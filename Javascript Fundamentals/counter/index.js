let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count++;
    countEl.innerText = count;
    myLogger();
}

function myLogger() {
    console.log("button was clicked");
    console.log("count: " + count);
}