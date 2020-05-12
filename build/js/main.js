let count_item;

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
})