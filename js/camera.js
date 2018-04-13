var camButton = document.getElementById('camButton');
var div = document.getElementById('foodInfo');
var hd = document.getElementById('hotdog');
var outButton = document.getElementById('outButton');
var submitbutton = document.getElementById('submission');

//
camButton.onclick = function() {

    div.className = "center-align scale-transition scale-in";
    camButton.className = "btn-floating disabled";
    outButton.className = "btn-floating btn-large waves-effect waves-light red";

    // adapted from https://stackoverflow.com/questions/29754029/javascript-animated-gif-to-remain-static-until-clicked
    hd.src = hd.bln ? "images/hotdog.gif" : "images/hotdog2.jpeg";
    hd.bln = !hd.bln;

};

outButton.onclick = function() {

    div.className = "center-align scale-transition scale-out";
    camButton.className = "btn-floating btn-large waves-effect waves-light blue";
    outButton.className = "btn-floating disabled";


    // adapted from https://stackoverflow.com/questions/29754029/javascript-animated-gif-to-remain-static-until-clicked
    hd.src = hd.bln ? "images/hotdog.gif" : "images/hotdog2.jpeg";
    hd.bln = !hd.bln;

};

submitbutton.onclick = function() {

    var item = {}
	console.log(document.getElementById("servingsize").value);
	var curmeal = JSON.parse(localStorage.getItem("curMeal"));
	item.name = "Hot Dog";
	item.servingType = 1;
	item.servingSize = 1;
	item.carbCount = 10;
	curmeal.push(item);
	console.log("item is:", item);
	console.log("meal is:", curmeal);
	localStorage.setItem("curMeal", JSON.stringify(curmeal));
    
}