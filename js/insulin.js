var dosages = [];
var doseList = [];
var timestamps = [];
var dummyMonday = [2, 6, 12, 7, 10];
var dummyTuesday = [5, 2, 8, 4, 8];
var dummyWednesday = [2, 7, 13, 6, 3];
var dummyTimes = [1, 2, 3, 4, 5];

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

var ctxM = document.getElementById("dummyChartM").getContext("2d");

var dummyChartM = new Chart(ctxM, {
    type: 'line',
  data: {
    labels: dummyTimes,
    datasets: [{
      label: 'Insulin Dosage',
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

var ctxT = document.getElementById("dummyChartT").getContext("2d");

var dummyChartT = new Chart(ctxT, {
    type: 'line',
  data: {
    labels: dummyTimes,
    datasets: [{
      label: 'Insulin Dosage',
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

var ctxW = document.getElementById("dummyChartW").getContext("2d");

var dummyChartW = new Chart(ctxW, {
    type: 'line',
  data: {
    labels: dummyTimes,
    datasets: [{
      label: 'Insulin Dosage',
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