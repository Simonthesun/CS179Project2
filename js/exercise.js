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
    loadExercises();

    var fileName = location.href.split("/").slice(-1)[0]; 
    if (fileName.valueOf() == new String("dayview2.html").valueOf()) {
    	var list = document.getElementById("exerciseList");

    	for (var key in exercises) {
    		var entry = document.createElement('li');
			entry.appendChild(document.createTextNode(exercises[key].name + " (" + exercises[key].intensity + ")"));
			list.appendChild(entry);
    	}
    }

}, false);