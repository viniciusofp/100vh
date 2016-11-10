$('#circulo').waypoint(function(direction) {
  $('#fixed').toggleClass('hide');
  $('#menu').toggleClass('hide');
},{
  offset:'60px'
});