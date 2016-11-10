$('#circulo').waypoint(function(direction) {

  $('#fixed').toggleClass('way');
  $('#menu').toggleClass('way');
},{
  offset:'60px'
});