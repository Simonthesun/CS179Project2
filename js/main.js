// initialize side-navigation bar

var elem_sn = document.querySelector('.sidenav');
var instance_sn = M.Sidenav.init(elem_sn);



var elem = document.querySelector('.carousel');

var instance = M.Carousel.init(elem, {
    fullWidth: true,
    indicators: true
  });


var elem = document.querySelector('.datepicker');
var instance = M.Datepicker.init(elem);

// var elemSelectMeal = document.querySelector('select');
// var instanceSelectMeal = M.FormSelect.init(elemSelectMeal);


// var todd = document.querySelector("#today").valueAsDate = new Date();

// var instance_t = M.Tabs.init(el);

var camButton = document.getElementById('camButton');
var div = document.getElementById('foodInfo');

camButton.onclick = function() {
    div.className = "center-align scale-transition scale-in";
    
};
