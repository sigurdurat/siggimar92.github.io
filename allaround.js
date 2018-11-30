'use strict';

$(document).ready(function() {

    $('html, body').animate({
        scrollTop: 0
    }, 800);

    var iconContainerHeight = 90;
    var marginHeight = 30;
    var scrollHeight = document.getElementById('umOkkur').offsetHeight - (iconContainerHeight + marginHeight);
    var isExpanded = true;
    $(window).scroll(function() {

        if ($(window).scrollTop() > scrollHeight) {
            $('.icon-container').addClass('icon-container--small');    
            $('.icon').addClass('icon--small');
            isExpanded = false;
        }
      
        if (!isExpanded && $(window).scrollTop() < scrollHeight) {
            $('.icon-container').removeClass('icon-container--small');    
            $('.icon').removeClass('icon--small');
            isExpanded = true;
        }
      
    });

    $('.icon-container').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

});



// $('#link').click(function(e){
//     var $target = $('html,body');
//     $target.animate({scrollTop: $target.height()}, 500);
//   });