(function (Drupal, once) {
    'use strict';

    Drupal.behaviors.homeFunctionality = {
        attach: function (context, settings) {
            once('instructions', '.chess_carousel').forEach(elm => {
                const chessSwiper = new Swiper(".chessSwiper", {
                    direction: "vertical",
                    pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                    },
                    navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    },
                });
            })
        }
    };

}(Drupal, once));