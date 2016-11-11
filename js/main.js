$('#circulo').waypoint(function(direction) {

  $('#fixed').toggleClass('way');
  $('#menu').toggleClass('way');

},{
  offset:'60px'
});
$('#circulo').waypoint(function(direction) {

  if (direction == 'down')	{
  	$('#menu').removeClass('navbar-fixed-bottom').addClass('navbar-fixed-top');
  }
  else {
  	$('#menu').addClass('navbar-fixed-bottom').removeClass('navbar-fixed-top');
  }
},{
  offset:'0px'
});




// =======

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 250;
	var distance = 800;
    
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}