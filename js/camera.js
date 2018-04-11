var camButton = document.getElementById('camButton');
var div = document.getElementById('foodInfo');
var hd = document.getElementById('hotdog');

//
camButton.onclick = function() {
    div.className = "center-align scale-transition scale-in";

    camButton.className = "btn-floating disabled";

    // adapted from https://stackoverflow.com/questions/29754029/javascript-animated-gif-to-remain-static-until-clicked
    hd.src = hd.bln ? "images/hotdog.gif" : "images/hotdog2.jpeg";
    hd.bln = !hd.bln;

};