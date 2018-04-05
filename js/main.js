// initialize side-navigation bar

var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem);



var elem = document.querySelector('.collapsible');
var instance = M.Collapsible.init(elem);



var elem = document.querySelector('.carousel');
var instance = M.Carousel.init(elem, {
    fullWidth: true,
    indicators: true
});