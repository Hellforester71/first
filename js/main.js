

$(document).ready(function () {
     // бургер-меню
     var headerBurger = $('.header__burger');
     var headerBurgerClone = $('.header__burger-clone');
     var visibleList = $('.visible__menu-link');
     var linkInput = $('.fas');
     headerBurger.on('click', function () {
          $('.visible__menu-wrapper').toggle(300);
          $('body').toggleClass('lock');
     });
     headerBurgerClone.on('click', function () {
          $('.visible__menu-wrapper').toggle(300);
          $('body').removeClass('lock');
     });
     visibleList.on('click', function () {
          $('.visible__menu-wrapper').toggle(300);
          $('body').removeClass('lock');
     });
     // останавливаем предыдущую анимацию
     $('.visible__menu-btn').off();
     $('.visible__menu-btn').on('click', function () {
          $('.visible__menu-input').toggle(300);
     });

     // подменю "каталог в основное"
     $('.menu__link-hover').click(function () {
          $('.header__menu-visible').toggleClass('header__menu-visible-visible');
          $('.string').toggle(300);
          $('.strong').toggle(300);
     });
     // подменю "каталог" в мобильнике
    

     


     // убираем меню при клике вокруг
     $('.header__img img, .header__top-middle-wrapper, .sale, .map, .footer').click(function () {
          $('.header__menu-visible').removeClass('header__menu-visible-visible');

     });
     // подменю "каталог в бургере"
     $('.visible__menu-link-link').on('click', function () {
          $('.visible__menu-tittle').toggle(200, function () {
               $(this).css({ 'margin-top': '10px' });
          });
     });
     $('#visible__menu-subtittle').on('click', function () {
          $('.visible__menu-tittle-tittle').toggle(200, function () {
               $(this).css({ 'margin-top': '10px' });
          });
     });
     $('#visible__menu-subtittle-two').on('click', function () {
          $('.visible__menu-tittle-tittle-two').toggle(200, function () {
               $(this).css({ 'margin-top': '10px' });
          });
     });
     $('#visible__menu-subtittle-true').on('click', function () {
          $('.visible__menu-tittle-tittle-true').toggle(200, function () {
               $(this).css({ 'margin-top': '10px' });
          });
     });


     // поиск
     linkInput.on('click', function () {
          $('.menu__input').toggle(300);
     });

     // !фиксируем страницу, на ней свойство position:absolute
     // $(window).scroll(function () {
     //      $('.visible__menu-wrapper').css({"margin-top":$(this).scrollTop()});
     // });
     $(window).scroll(function () {
          $('.visible__menu-wrapper').css({ "position": "fixed" });
     });







});




