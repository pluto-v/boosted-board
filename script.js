/* insert some js here */

(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".bar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 150) {
                $('.bar').fadeIn();
            } else {
                $('.bar').fadeOut();
            }
        });
    });

});
  }(jQuery));