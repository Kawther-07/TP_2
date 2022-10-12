window.onload = function() {
    document.getElementById("maze").onmouseleave = mouseLeave;
    document.getElementById("maze").onmouseenter = mouseEnter;
    document.getElementById("end").onmouseover = end;

    var boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overWall;
        boundaries[i].onmousleave = overWall;
    }
};

function mouseLeave() {
    cursor  = true;
}

function  mouseEnter() {
    cursor  = false;
}

function overWall(){
    var x = document.getElementsByClassName("boundary");
    
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
        if (x[i].style.backgroundColor == "red") {
            var s = document.getElementById("status").innerHTML = "You Lost.";
        }
    }
}
    
function end() {
    var x = document.getElementsByClassName("boundary");
    
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.backgroundColor != "red" && cursor ==false) {
            var s = document.getElementById("status").innerHTML = "Congratulations! You Won!";
        } else {
            var s = document.getElementById("status").innerHTML = "Stop Cheating, Play Fair!";
        }
    }
}
