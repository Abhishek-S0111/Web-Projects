let body = document.querySelector("#body");
let flipButton = document.querySelector("#flip-button");

flipButton.onclick = flip;

function flip() {
    let a = Math.floor(Math.random() * 1000000);
    if (a - 100000 >= 0){    
        body.style.background = "#" + (a-100000);
    }
}