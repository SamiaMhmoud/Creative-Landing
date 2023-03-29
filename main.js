let mainImg = document.querySelector("#img");
let container = document.querySelector(".container");

function imgChanger(src) {
    mainImg.src = src;
}

function background(color) {
    container.style.background = color;
}

