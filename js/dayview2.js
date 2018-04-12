var meals = [];
var n = 0;



function loadMeals() {
	var loaded = localStorage.getItem("meals");

	if (loaded != null) {
		meals = JSON.parse(loaded);
	}
}

document.addEventListener('DOMContentLoaded', function() {
    loadMeals();

}, false);


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
	let curmeal = JSON.parse(localStorage.getItem("meals"));
	let l = curmeal.length;
	console.log(l);
	console.log(curmeal[l-1]);
    renderMeal(curmeal[l-1].food);
}

initialize();