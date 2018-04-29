var meals = [];
var n = 0;

function initializeMeal()
{
	if ((localStorage.getItem("curMeal") === "") || (localStorage.getItem("curMeal") === null)) {
		console.log("adding new empty meal");
		var meal = [];
		localStorage.setItem("curMeal", JSON.stringify(meal));
	}
	else{
		console.log("hello");
		console.log(localStorage.getItem("curMeal"));
	}

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

// Add all the items in a list of items to a 'meal' object in local storage
function addMeal()
{
	
	let newMeal = {};
	var foods = JSON.parse(localStorage.curMeal);
	console.log(foods);
    newMeal.id = ''.concat('meal', parseInt(n));
    n++;
    newMeal.category = document.getElementById("mealtype");
    newMeal.food = foods;
	newMeal.carbs = calcCarbs(foods);
	window.location.href='insulin.html';
    
    meals.push(newMeal);
    // console.log(stickys);
    localStorage.setItem('meals', JSON.stringify(meals));
	// render(stickys);
	localStorage.setItem('curMeal', "");
	
}

function removeFood(id)
{
	var curmeal = JSON.parse(localStorage.curMeal);

	curmeal = curmeal.filter(item => item.id != id);
	console.log("filtered meal:")
	console.log(curmeal);
	localStorage.setItem('curMeal', JSON.stringify(curmeal));
}

// calculate the total carbs for a list of foods

function calcCarbs(meal) 
{
	var carbs = 0;
	for (var i = 0, max = meal.length; i < meal.length; i++){
		carbs = carbs + meal[i].carbCount;
	}
	return carbs;
}

// display a table of items in the meal

function renderMeal(meal)
{
    // get the meal element
   let mealsElm = document.querySelector(".meals");
   // render the meal from a list of foods
   mealsElm.innerHTML = meal.map(p => renderItem(p)).join('');

}

// Adds the HTML for a single item to the table for a given meal
function renderItem(item)
{
    return `<tr>
	<th>${item.name}</th>
	<th>${item.servingSize} ${item.servingType}</th>
	<th>${item.carbCount}</th>
	<th><a class="btn-floating btn waves-effect waves-light pink accent-2" onclick="M.toast(
		{html: 'Removed Item! Reloading...',
			completeCallback: function(){
				removeFood(${item.id});
				window.location.reload()}})">X</a></th>
	</tr>`
    
}



document.addEventListener('DOMContentLoaded', function() {

    let initState = localStorage.getItem('meals');
    console.log(initState);
    if (initState != null)
    {
        meals = JSON.parse(initState);
	}
	else {
		meals = [];
	}
	initializeMeal();
	let currentmeal = JSON.parse(localStorage.curMeal);
	console.log(currentmeal);
    renderMeal(currentmeal);

}, false);