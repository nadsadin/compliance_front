import './../scss/app.scss';
import './../img/slider.png';
import './../img/avatar.png';
import './../img/mtpp.png';
import './../img/post-preview-1.png';
import './../img/post-preview-2.png';
import './../img/post-preview-3.png';
import './../img/event-preview-1.png';
import './../img/event-preview-2.png';
import './../img/event-preview-3.png';
import './../img/partner.png';
import './../img/mtpp-logo-white.png';
import './../img/mtpp-logo-gray.png';

import './bootstrap';
import Swiper from 'swiper';
$(function() {
    console.log('Hello world');
    const swiperHero = new Swiper('.hero-slider', {
        pagination: {
            el: '.swiper-pagination',
        }
    });
    $(window).scroll(function() {
        $(".navbar-landing").toggleClass("bg-transparent navbar-dark", $(this).scrollTop() < 20),
        $(".navbar-landing").toggleClass("bg-white navbar-light", $(this).scrollTop() > 20)
    });
    $(".navbar-landing").toggleClass("bg-white navbar-light", $(this).scrollTop() > 20)
    // $(".navbar-toggler").click(function () {
    //     if($(window).scrollTop() < 20){
    //         $(".navbar-landing").toggleClass("bg-transparent navbar-dark bg-white navbar-light");
    //     }
    // });
});