let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    saveEl.textContent += (" " + count + " -");
    console.log("count: " + count);
    count = 0;
    countEl.innerText = count;
}