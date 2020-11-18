$(document).ready(function () {
    // MOBILE-MENU
    const menuToggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector('.header-nav');
    const overlayEl = document.querySelector('#overlay');
    const bodyEl = document.body;

    // клик по иконке гамбургер
    menuToggle.addEventListener('click', function(){
        this.classList.toggle('active');
        mobMenu.classList.toggle('active');
        overlayEl.classList.toggle('active');
        bodyEl.classList.toggle('noscroll');
    });

    // клик по мобильному меню (закрываем)
    mobMenu.addEventListener('click', function(){
        this.classList.remove('active');
        menuToggle.classList.remove('active');
        overlayEl.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });

    // закрытие мобильного меню по клику по оверлею 
    overlayEl.addEventListener('click', function(){
        this.classList.remove('active');
        menuToggle.classList.remove('active');
        mobMenu.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });

    // закрытие MobMenu при resize экрана
    window.addEventListener('resize', function(){
        mobMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        overlayEl.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });
        //NAVE-PAGE
    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}

    });

    // FILTER PORTFOLIO
    let containerEl = document.querySelector('#projects-container');
    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    });


//FORM PLACEHOLDER
const formInputs = document.querySelectorAll('.form-field');
for(let item of formInputs){
    const thisPlaceholder = item.nextElementSibling;

    item.addEventListener('focus', function(){
        thisPlaceholder.classList.add('active');
    });

    item.addEventListener('blur', function() {
        if(item.value == ''){
            thisPlaceholder.classList.remove('active');
        }
    });  
}


// FORM VALIDATE
$('.contacts-form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        theme: {
            required: true
        },
        message: {
            required: true
        }
    },
    messages: {
        email: {
            required: 'Введите email',
            email: 'отсутствует символ @'
        },
        theme: {
            required: 'Введите тему сообщения'
        },
        message: {
            required: 'Введите текст сообщения'
        }
    },
    submitHandler: function (form) {
        ajaxFormSubmit();
    }
})

// function AJAX запроса на сервер
function ajaxFormSubmit() {
    let string = $('.contacts-form').serialize(); //сохранение введеных данных

    //Формируем AJAX запрос
    $.ajax({
        type: "POST", // тип запроса
        url: "php/mail.php", //куда отправляем запрос
        data: string,

        //Функция, если успешно
        success: function (html) {
            $('.contacts-form').slideUp(800);
            $('#answer').html(html);
        }
    });
    //Чтобы по Submit больше ничего не выполнялось - делаем возврат false, чтобы прервать
    return false;
}

    // BACK TOP BUTTON
    $('#backTop').hide();
    $(window).scroll(function () {

        if($(this).scrollTop() > 200){
            $('#backTop').fadeIn();
        }
        else{
            $('#backTop').fadeOut();
        }
    })

    // валидация поле телефона
    // $(".phone").mask("+7(999)999-99-99");
    // //ф-ция для позиции курсора
    // $.fn.setCursorPosition = function (pos) {
    //     if ($(this).get(0).setSelectionRange) {
    //         $(this).get(0).setSelectionRange(pos, pos);
    //     } else if ($(this).get(0).createTextRange) {
    //         var range = $(this).get(0).createTextRange();
    //         range.collapse(true);
    //         range.moveEnd('character', pos);
    //         range.moveStart('character', pos);
    //         range.select();
    //     }
    // };
    // //ф-ция для позиции курсора для нашего поля phone
    // $('.phone').click(function () {
    //     $(this).setCursorPosition(3); // set position number
    // });
})

    