var dosages = [];
var doseList = [];
var timestamps = [];

function saveDosage() {
	var dosage = parseInt(document.getElementById("dosage").value);

	storeDosage(dosage);
}

function storeDosage(dosage) {
	var today = new Date();

	let thisDosage = {date:today, amount:dosage};

	if (dosages != null) {
		dosages.push(thisDosage);
	} else {
		dosages = [thisDosage];
	}

	localStorage.setItem("dosages", JSON.stringify(dosages));
}

function loadDosages() {
	var loaded = localStorage.getItem("dosages");

	if (loaded != null) {
		dosages = JSON.parse(loaded);
	}
}

loadDosages();
    
for (var dose in dosages) {
	doseList.push(dosages[dose].amount);
	timestamps.push(dosages[dose].date);
}

console.log(doseList);

Chart.defaults.global.legend.display = false;

var ctx = document.getElementById("insulinChart").getContext("2d");

var myLineChart = new Chart(ctx, {
    type: 'line',
  data: {
    labels: timestamps,
    datasets: [{
      label: 'Insulin Dosage',
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