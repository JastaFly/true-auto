let modal = document.getElementsByClassName('modal-window');
let header = document.getElementsByTagName('header')[0];
let main = document.getElementsByTagName('main')[0];
let footer = document.getElementsByTagName('footer')[0];
let shadow = document.getElementsByClassName('shadow')[0];
let window_number;

$(document).ready(function () {
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 25000
    });
    $(".slider-two").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 25000,
    });

});

let slide_two = $('.slider-two');
slide_two.on('changed.owl.carousel', function(event) {
    let slide_count = document.getElementsByClassName('active')[2];
    if (slide_count != undefined) {
        var count_val = slide_count.children[0].getAttribute('count');
        let count_elem = document.getElementsByClassName('slider-two__count')[0];
        count_elem.innerHTML = '0' + count_val;
    }
});

const show_window = function (number) {
    window_number = number;
    $(modal[window_number]).slideToggle();
    shadow.style.display = 'block';
    header.style.filter = 'blur(10px)';
    main.style.filter = 'blur(10px)';
    footer.style.filter = 'blur(10px)';
}

const close_window = function () {
    $(modal[window_number]).slideToggle();
    shadow.style.display = 'none';
    header.style.filter = 'blur(0)';
    main.style.filter = 'blur(0)';
    footer.style.filter = 'blur(0)';
}

const show_nav = function () {
    let nav = document.getElementsByTagName('nav')[0];
    $(nav).slideToggle();
}