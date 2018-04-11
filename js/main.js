// initialize side-navigation bar

var elem_sn = document.querySelector('.sidenav');
var instance_sn = M.Sidenav.init(elem_sn);

let meals = [];

var elem_c = document.querySelector('.carousel');

var instance_c = M.Carousel.init(elem_c, {
    fullWidth: true,
    indicators: true
  });


var elem_d = document.querySelector('.datepicker');
var instance_d = M.Datepicker.init(elem_d);

var elem = document.querySelector('.tabs');
// var instance = M.Tabs.init(elem, {
//     swipeable: true
// });

var instance = M.Tabs.init(elem);


function addMeal(cat, items, carbcount)
{
    let newMeal = {};
    newMeal.id = ''.concat('meal', parseInt(n));
    n++;
    newMeal.category = cat;
    newMeal.items = items;
    newMeal.carbs = carbcount;
    newSticky.left =parseInt(x);
    newSticky.top = parseInt(y);
    
    meals.push(newSticky);
    // console.log(stickys);
    localStorage.setItem('meals', JSON.stringify(meals));
    // render(stickys);
}


function initialize() {
  getWeather();
  // (adapted from handout in coding lab)
  let initState = localStorage.getItem('stickys');
  if (initState != null)
  {
      stickys = JSON.parse(initState);
  }
  
}


initialize();
