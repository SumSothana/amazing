var imgs = ["protecting-covid2.jpg", "protect-covid3.jpg", "protective4.jpg", "protective5.jpg"];
var index = 0;

function back() {
    if (index <= 0) {
        index = imgs.length;

    }
    document.getElementById("covid").src = "../HWJS/img/News/" + imgs[--index];
}

function next() {
    if (index >= imgs.length - 1) {
        index = -1;
    }
    document.getElementById("covid").src = "../HWJS/img/News/" + imgs[++index];
}