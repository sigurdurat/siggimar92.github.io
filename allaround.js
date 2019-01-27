'use strict';

$(document).ready(function() {
    var iconContainerHeight = 90;
    var marginHeight = 30;
    var scrollHeight = $('#umOkkur').outerHeight() - (iconContainerHeight + marginHeight);
    var iconContainer = $('.icon-container');
    var icon = $('.icon');
    var scroll = $(window).scrollTop();
    var reveals = document.querySelectorAll('[data-reveal]');
    var winHeight = 1;

    iconContainer.toggleClass('icon-container--small', scroll >= scrollHeight);    
    icon.toggleClass('icon--small', scroll >= scrollHeight);

    iconContainer.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    function onResize() {
        winHeight = window.innerHeight
        reveals.forEach(function(reveal) {
          var { top } = reveal.getBoundingClientRect()
          reveal._top = top
        });
      }

    function onScroll() {
        scroll = $(window).scrollTop();
        iconContainer.toggleClass('icon-container--small', scroll >= scrollHeight);    
        icon.toggleClass('icon--small', scroll >= scrollHeight);

        var breakpoint = window.pageYOffset + 0.5 * winHeight;

        reveals.forEach(function(reveal) {
            reveal.classList.toggle(
                'isVisible', 
                reveal._top <= breakpoint
            )
        });
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll);
    
    onResize();
    onScroll();
});