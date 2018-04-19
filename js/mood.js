var moods = [];
var energies = [];
var timestamps = [];


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
    console.log("hello");

	let thisEnergy = {date:today, amount:energytype};

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
/*

Chart.defaults.global.legend.display = false;

var ctx = document.getElementById("insulinChart").getContext("2d");

var myLineChart = new Chart(ctx, {
    type: 'line',
  data: {
    labels: timestamps,
    datasets: [{
      label: 'Insulin Mood',
      data: doseList,
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
*/
