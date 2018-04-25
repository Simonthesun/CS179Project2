var moods = [];
var energies = [];
var timestamps = [];
var moodList = [];
var energyList = [];


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
}

function saveEnergy(energy) {
    var today = new Date();

	let thisEnergy = {date:today, amount:energy};

	if (energies != null) {
		energies.push(thisEnergy);
	} else {
		energies = [thisEnergy];
	}

	localStorage.setItem("energies", JSON.stringify(energies));
}

function hideDiv(id){
    let d = document.getElementById("moody")
    d.style.visibility = "hidden";
}

function loadEnergies() {
  var loaded = localStorage.getItem("energies");

  if (loaded != null) {
    energies = JSON.parse(loaded);
  }
}

loadEnergies();

for (var energy in energies) {
  energyList.push(energies[energy].amount);
  timestamps.push(energies[energy].date);
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
      label: 'Energy',
      data: energyList,
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