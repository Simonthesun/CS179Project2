// initialize side-navigation bar

var elem_sn = document.querySelector('.sidenav');
var instance_sn = M.Sidenav.init(elem_sn);



var elem_c = document.querySelector('.carousel');
var instance_c = M.Carousel.init(elem_c, {
    fullWidth: true,
    indicators: true
});


var elem = document.querySelector('.datepicker');
var instance = M.Datepicker.init(elem);

var elemSelectMeal = document.querySelector('select');
var instanceSelectMeal = M.FormSelect.init(elemSelectMeal, options);


// var todd = document.querySelector("#today").valueAsDate = new Date();
