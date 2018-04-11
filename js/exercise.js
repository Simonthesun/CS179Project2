var exercises = [];

function storeExercise(exName, exIntensity, exTime) {
	var today = new Date();

	let thisExercise = {date:today, name:exName, intensity:exIntensity, time:exTime};

	if (exercises != null) {
		exercises.push(thisExercise);
	} else {
		exercises = [thisExercise];
	}

	localStorage.setItem("exercises", JSON.stringify(exercises));
}

function saveExercise() {
	var activity = document.getElementById("activity").value;
	var intensity = document.getElementById("intensity").value;
	var time = document.getElementById("time").value;

	storeExercise(activity, intensity, time);
}

function loadExercises() {
	var loaded = localStorage.getItem("exercises");

	if (loaded != null) {
		exercises = JSON.parse(loaded);
	}
}

document.addEventListener('DOMContentLoaded', function() {
    loadExercises();

}, false);