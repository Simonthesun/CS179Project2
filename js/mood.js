var moods = [];
var energies = [];
var timestamps = [];
var moodList = [];
var energyList = [];
var dummyMonday = [0, 1, 0, 0, 0];
var dummyTuesday = [1, -1, 1, -1, 1];
var dummyWednesday = [0, 1, 1, 1, -1];
var dummyTimes = [1, 2, 3, 4, 5];


function saveMood(mood) {
	var today = new Date();
    
	let thisMood = {date:today, amount:mood};

	if (moods != null) {
		moods.push(thisMood);
	} else {
		moods = [thisMood];
	}

    localStorage.setItem("moods", JSON.stringify(moods));
    console.log(moods);

    window.location.href='dayview.html';
}

// function saveEnergy(energy) {
//     var today = new Date();

// 	let thisEnergy = {date:today, amount:energy};

// 	if (energies != null) {
// 		energies.push(thisEnergy);
// 	} else {
// 		energies = [thisEnergy];
// 	}

// 	localStorage.setItem("energies", JSON.stringify(energies));
// }

// function hideDiv(id){
//     let d = document.getElementById("moody")
//     d.style.visibility = "hidden";
// }

// function loadEnergies() {
//   var loaded = localStorage.getItem("energies");

//   if (loaded != null) {
//     energies = JSON.parse(loaded);
//   }
// }

// loadEnergies();

// for (var energy in energies) {
//   energyList.push(energies[energy].amount);
//   timestamps.push(energies[energy].date);
// }

function loadMoods() {
    var loaded = localStorage.getItem("moods");

    if (loaded != null) {
      moods = JSON.parse(loaded);
    }
}

loadMoods();

for (var mood in moods) {
  moodList.push(moods[mood].amount);
  timestamps.push(moods[mood].date);
}

console.log(energyList);
console.log(timestamps);

var fileName = location.href.split("/").slice(-1)[0]; 

Chart.defaults.global.legend.display = false;

if (fileName.valueOf() == new String("dayview.html").valueOf()) {
  var ctx = document.getElementById("energyChart").getContext("2d");

  var myLineChart = new Chart(ctx, {
    type: 'line',
  data: {
    labels: timestamps,
    datasets: [{
      label: 'Mood',
      data: moodList,
      backgroundColor: "rgba(255,255,255,0.5)"
    }]
  },

  options:
    {
        scales:
        {
            xAxes: [{
                display: false
            }]
        }
    }
});
}

if (fileName.valueOf() == new String("dayviewW.html").valueOf()) {
  var ctx = document.getElementById("energyChart").getContext("2d");

  var myLineChart = new Chart(ctx, {
    type: 'line',
  data: {
    labels: dummyTimes,
    datasets: [{
      label: 'Mood',
      data: dummyWednesday,
      backgroundColor: "rgba(255,255,255,0.5)"
    }]
  },

  options:
    {
        scales:
        {
            xAxes: [{
                display: false
            }]
        }
    }
});
}

if (fileName.valueOf() == new String("dayviewT.html").valueOf()) {
  var ctx = document.getElementById("energyChart").getContext("2d");

  var myLineChart = new Chart(ctx, {
    type: 'line',
  data: {
    labels: dummyTimes,
    datasets: [{
      label: 'Mood',
      data: dummyTuesday,
      backgroundColor: "rgba(255,255,255,0.5)"
    }]
  },

  options:
    {
        scales:
        {
            xAxes: [{
                display: false
            }]
        }
    }
});
}

if (fileName.valueOf() == new String("dayviewM.html").valueOf()) {
  var ctx = document.getElementById("energyChart").getContext("2d");

  var myLineChart = new Chart(ctx, {
    type: 'line',
  data: {
    labels: dummyTimes,
    datasets: [{
      label: 'Mood',
      data: dummyMonday,
      backgroundColor: "rgba(255,255,255,0.5)"
    }]
  },

  options:
    {
        scales:
        {
            xAxes: [{
                display: false
            }]
        }
    }
});
}