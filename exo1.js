window.onload = function(){
    var x = document.getElementsByClassName("boundary");
    x[0].onmouseover = overWall;
    x[1].onmouseover = overWall1;
    x[2].onmouseover = overWall2;
    x[3].onmouseover = overWall3;
    x[4].onmouseover = overWall4;
};

function overWall() {
    var x = document.getElementsByClassName("boundary");
    x[0].style.backgroundColor = "red";
}
function overWall1() {
    var x = document.getElementsByClassName("boundary");
    x[1].style.backgroundColor = "red";
}
function overWall2() {
    var x = document.getElementsByClassName("boundary");
    x[2].style.backgroundColor = "red";
}
function overWall3() {
    var x = document.getElementsByClassName("boundary");
    x[3].style.backgroundColor = "red";
}
function overWall4() {
    var x = document.getElementsByClassName("boundary");
    x[4].style.backgroundColor = "red";
}