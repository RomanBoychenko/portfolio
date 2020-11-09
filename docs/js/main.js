$(document).ready(function () {
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
})

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


    