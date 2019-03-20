'use strict';

$(document).ready(function() {
    var iconContainerHeight = 90;
    var marginHeight = 50;
    var scrollHeight = $('#umOkkur').outerHeight() - (iconContainerHeight + marginHeight);
    var iconContainer = $('.icon-container');
    var icon = $('.icon');
    var scroll = $(window).scrollTop();

    iconContainer.toggleClass('icon-container--small', scroll >= scrollHeight);    
    icon.toggleClass('icon--small', scroll >= scrollHeight);

    setTimeout(function() {
        $('hr').addClass('grow');
    }, 275);

    iconContainer.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    function onScroll() {
        scroll = $(window).scrollTop();
        iconContainer.toggleClass('icon-container--small', scroll >= scrollHeight);    
        iconContainer.toggleClass('dark-grey', scroll >= scrollHeight);    
        icon.toggleClass('icon--small', scroll >= scrollHeight);
    }

    window.addEventListener('scroll', onScroll);
    
    onScroll();
});


// $('#link').click(function(e){
//     var $target = $('html,body');
//     $target.animate({scrollTop: $target.height()}, 500);
//   });