// initialize side-navigation bar

var elem_sn = document.querySelector('.sidenav');
var instance_sn = M.Sidenav.init(elem_sn);

let meals = [];

var elem_c = document.querySelector('.carousel');

var instance_c = M.Carousel.init(elem_c, {
    fullWidth: true,
    indicators: true
  });


var elem_col = document.querySelector('.collapsible');
var instance_col = M.Collapsible.init(elem_col);

var elem_d = document.querySelector('.datepicker');
var instance_d = M.Datepicker.init(elem_d);

var elem = document.querySelector('.tabs');
// var instance = M.Tabs.init(elem, {
//     swipeable: true
// });

var instance = M.Tabs.init(elem);
