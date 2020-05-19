let modal = document.getElementsByClassName('window');
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
$('form').submit(function () {
    let m = this.hasAttribute('message');
    let name = this.name.value;
    let number = this.telephone.value;
    let window_form = this.hasAttribute('modal');
    let what = this.what.value;
    let data = {
        'name': name,
        'phone': number,
        'what': what
    }
    let request = new XMLHttpRequest();
    request.open('POST', '../php/mail.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send('param=' + JSON.stringify(data));
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);
            if (window_form === true) {
                modal[0].style.display = 'none';
            }
            window_number = 1;
            console.log(modal[window_number]);
            shadow.style.display = 'block';
            let header = document.getElementsByTagName('header')[0];
            let main = document.getElementsByTagName('main')[0];
            let footer = document.getElementsByTagName('footer')[0];
            header.style.filter = 'blur(10px)';
            main.style.filter = 'blur(10px)';
            footer.style.filter = 'blur(10px)';
        }
    }
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

const what_fn = function (what, modal, elem) {
    let hidden_input;
    let message;
    if (modal == 1) {
        hidden_input = document.getElementsByClassName('modal-window')[0].children[0];
    }
    else {
        hidden_input = elem.what;
    }
    switch (what) {
        case 1:
            message = 'Обратный звонок';
            break;
        case 2:
            message = 'Подберите мне самый лучший Ааааавтомоообиииииль!!';
            break;
        case 3:
            message = 'Приобрести лучший автомобиль всего за 1 клик';
            break;
        case 4:
            message = 'Заказать диагностику ';
            break;
        case 5:
            message = 'Выездная диагностика';
            break;
        case 6:
            message = 'Подбор авто по пензенской области';
            break;
        case 7:
            message = 'Подбор авто по России';
            break;
        case 8:
            message = 'Подбор авто';
            break;
        case 9:
            message = 'Подбор авто под ключ, от цены авто';
            break;
        case 10:
            message = 'Помочь сбить цену';
            break;
        case 11:
            message = 'Рассчитать стоимость проверки и подборки авто';
            break;
    }
    hidden_input.value = message;
    console.log(hidden_input);
}