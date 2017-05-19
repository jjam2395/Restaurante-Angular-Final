$(document).ready(function() {
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav({
    menuWidth: 280, // Default is 240
    edge: 'left', // Choose the horizontal origin
    draggable: true // Choose whether you can drag to open on touch screens
  });
  $('.slider').slider({
    indicators: false,
    height: 300
  });
  $('.modal').modal();
  $('select').material_select();
  $('#textarea1').trigger('autoresize');
});
