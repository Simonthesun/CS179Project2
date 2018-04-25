var meals = [];
var n = 0;

function initializeMeal()
{
	if ((localStorage.getItem("curMeal") === "") || (localStorage.getItem("curMeal") === null)) {
		console.log("adding new empty meal");
		var meal = [];
		localStorage.setItem("curMeal", JSON.stringify(meal));
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
    
    meals.push(newMeal);
    // console.log(stickys);
    localStorage.setItem('meals', JSON.stringify(meals));
	// render(stickys);
	localStorage.setItem('curMeal', "");
}

function removeItem(id)
{
	var curmeal = JSON.parse(localStorage.curMeal);
	curmeal = curmeal.filter(item => item.id = id);
	console.log(curmeal);
	localStorage.setItem('curMeal', curmeal);
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
    // get the stickys element
   let mealsElm = document.querySelector(".meals");
   console.log(mealsElm);
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
	<th><button onclick="location.href='meal.html'; removeItem(${item.id})">Delete Item</button></th>
	</tr>`
    
}

function initialize() {

    // (adapted from handout in coding lab)
	let initState = localStorage.getItem('meals');
    console.log(initState);
    if (initState != null)
    {
        meals = JSON.parse(initState);
	}
	else {
		meals = [];
	}
	let currentmeal = JSON.parse(localStorage.getItem("curMeal"));
    renderMeal(currentmeal);
}

initialize();