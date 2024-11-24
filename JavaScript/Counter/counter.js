let view = document.querySelector("#view");
let upCount = document.querySelector("#upCount");
let downCount = document.querySelector("#downCount");
let count = 0;

function append() {
    view.innerText = ++count;    
}

function prepend() {
    view.innerText = --count;    
}

upCount.onclick = append;
downCount.onclick = prepend;