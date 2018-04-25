var camButton = document.getElementById('camButton');
var div = document.getElementById('foodInfo');
var hd = document.getElementById('hotdog');
var outButton = document.getElementById('outButton');
var submitbutton = document.getElementById('submission');
var n = 0;

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
    camButton.className = "btn-floating btn-large waves-effect waves-light pink accent-2";
    outButton.className = "btn-floating disabled";


    // adapted from https://stackoverflow.com/questions/29754029/javascript-animated-gif-to-remain-static-until-clicked
    hd.src = hd.bln ? "images/hotdog.gif" : "images/hotdog2.jpeg";
    hd.bln = !hd.bln;

};

submitbutton.onclick = function() {

    var item = {}
    var curmeal = JSON.parse(localStorage.getItem("curMeal"));
    var num = n.toString();
    console.log(num);
	item.name = "Hot Dog";
	item.servingType = "serving";
	item.servingSize = 1;
    item.carbCount = 10;
    item.id = "hotdog".concat(num);
    n++;
	curmeal.push(item);
	localStorage.setItem("curMeal", JSON.stringify(curmeal));

}

