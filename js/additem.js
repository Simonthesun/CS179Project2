
var n = 0;

// represent food items in a meal as a list of dictionaries - on "Add Item" page
function addItem() {
	
	var item = {}
	console.log(document.getElementById("servingsize").value);
	var curmeal = JSON.parse(localStorage.getItem("curMeal"));
	item.name = document.getElementById("foodname").value;
	item.servingType = document.getElementById("servingtype").value;
	item.servingSize = document.getElementById("servingsize").value;
	item.carbCount = 10;
	item.id = n.toString();
	n++;
	console.log(n);
	curmeal.push(item);
	console.log("item is:", item);
	console.log("meal is:", curmeal);
	localStorage.setItem("curMeal", JSON.stringify(curmeal));
	

}

function loadMeals() {
	var loaded = localStorage.getItem("meals");

	if (loaded != null) {
		meals = JSON.parse(loaded);
	}
}

document.addEventListener('DOMContentLoaded', function() {
    loadMeals();

}, false);

