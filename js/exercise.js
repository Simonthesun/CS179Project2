var exercises = [];

function storeExercise(exName, exTime, exIntensity, exEnd) {
	var today = new Date();

	let thisExercise = {date:today, time:exTime, name:exName, intensity:exIntensity, end:exEnd};

	if (exercises != null) {
		exercises.push(thisExercise);
	} else {
		exercises = [thisExercise];
	}

	localStorage.setItem("exercises", JSON.stringify(exercises));
}

function saveExercise() {
	var activity = document.getElementById("activity").value;
	var timeString = document.getElementById("time").value;
	var intensity = document.getElementById("intensity").value;
	var duration = parseInt(document.getElementById("duration").value);
	var startTimes = timeString.split(":");
	var hour = parseInt(startTimes[0]);
	var min = parseInt(startTimes[1]);
	var time = new Date();
	time.setHours(hour, min, 0);
	var end = new Date(time.getTime());
	end.setTime(time.getTime() + (duration * 60000));

	storeExercise(activity, time, intensity, end);
	window.location.href='dayview.html';
}

function loadExercises() {
	var loaded = localStorage.getItem("exercises");

	if (loaded != null) {
		exercises = JSON.parse(loaded);
	}
}

document.addEventListener('DOMContentLoaded', function() {

    let initState = localStorage.getItem('exercises');
    if (initState != null)
    {
        exercises = JSON.parse(initState);
	}
	else {
		exercises = [];
	}
	let curex = JSON.parse(localStorage.getItem("exercises"));
    renderExercise(curex);

}, false);


// display a table of items in the meal

function renderExercise(ex)
{
    // get the exercise element
   let list = document.querySelector(".exerciseList");
   // render the meal from a list of foods
   list.innerHTML = ex.map(p => renderItem(p)).join('');
}

// Adds the HTML for a single item to the table for a given meal
function renderItem(item)
{
    return `<tr>
	<th>${item.activity}</th>
	<th>${item.time}</th>
	<th>${item.intensity}</th>
	<th>${item.duration}</th>
	</tr>`
    
}