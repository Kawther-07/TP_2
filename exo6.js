var lost = false;

window.onload = function() {
    document.getElementById("start").onclick = start;
    document.getElementById("end").onmouseover = end;
    var x = document.getElementsByClassName("boundary");
    for (var i = 0; i < x.length; i++) {
        x[i].onmouseover = boundariesGlow;
    }
};

function boundariesGlow() {
    lost = true;
    var x = document.getElementsByClassName("boundary");
}

function start() {
    lost = false;
    var x = document.getElementsByClassName("boundary");
}

function end() {
    if(lost) { //display message after hovering over the E
        var s = document.getElementById("status").innerHTML = "You Lost.";
    } 
    else {
        var s = document.getElementById("status").innerHTML = "Congratulations! You Won.";
    }
}