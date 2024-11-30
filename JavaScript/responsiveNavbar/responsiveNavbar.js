const menu = document.querySelector("#menu")
const menuBar = document.querySelector("menuBar")

menuBar.onclick = createMenu

function createMenu() {
    menuBar.style.display = "block";
}