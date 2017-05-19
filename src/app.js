jQuery(document).ready(function($){
    $('.collapsible').collapsible();
    //SIDENAV
    $(".button-collapse-sideNav").sideNav({
      menuWidth: 280,
    });

    $(".button-collapse").sideNav({
      menuWidth: 280,
      edge: 'left', // Choose the horizontal origin
      draggable: true // Choose whether you can drag to open on touch screens
    });
    $('.chips').material_chip();

    $('.chips').on('chip.add', function(e, chip){
    // you have the added chip here
  });
  });
