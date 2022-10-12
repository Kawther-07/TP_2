window.onload = function() {
    var x = document.getElementsByClassName("boundary");
    for (var i = 0; i < x.length; i++) {
        x[i].onmouseover = boundariesGlow;
    }
};

function boundariesGlow() {
    var x = document.getElementsByClassName("boundary");
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
    }
}