jQuery(document).ready(function($){
    $('.collapsible').collapsible();
    //SIDENAV
    $(".button-collapse-sideNav").sideNav({
      menuWidth: 280,
      closeOnClick: true
    });

    $(".button-collapse").sideNav({
      menuWidth: 280,
      closeOnClick: true
    });
    $('.chips').material_chip();

    $('.chips').on('chip.add', function(e, chip){
    // you have the added chip here
  });
  });
