  const swiper = new Swiper('.swiper', {    //Реализация работы слайдера
  // Optional parameters
  loop: true,

  //AutoplayOptions 
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //скорость прокрутки
  speed: 1000,

});


//Реализация бургер меню с фиксированием экрана и отключением скролла
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.add('is-active');
    document.querySelector('#burger').classList.add('is-not-active');
    document.querySelector('#burger-close').classList.add('active');
    document.querySelector('body').classList.add('overflow-hidden');
    document.querySelector('html').classList.add('overflow-hidden');

  });
  document.querySelector('#burger-close').addEventListener('click', function () {
    document.querySelector('#menu').classList.remove('is-active');
    document.querySelector('#burger').classList.remove('is-not-active');
    document.querySelector('#burger-close').classList.remove('active');
    document.querySelector('body').classList.remove('overflow-hidden');
    document.querySelector('html').classList.remove('overflow-hidden');
  });
});



/* Открытие меню контактов телеграмм при нажатии
на кнопку, и скрытие по клику в свободной области */
function myFunction() {
  document.getElementById("contact-box").classList.toggle("header-contacts__box-is-active");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("header-contacts__box");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('header-contacts__box-is-active')) {
      openDropdown.classList.remove('header-contacts__box-is-active');
    }
  }
}
};

// анимированное появление элементов при скроле

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

//плавное появление hero__container
$('.hero__container').delay(1000).animate({'opacity':'1'},500);


//эффекты при скроле для header

var StickyElement = function(node){
  var doc = $(document), 
  fixed = false,
  anchor = node.find('.sticky-anchor'),
  content = node.find('.sticky-content'); 
  var onScroll = function(e){
      var docTop = doc.scrollTop(),
      anchorTop = anchor.offset().top;
      if(docTop > anchorTop){
          if(!fixed){
              anchor.height(content.outerHeight());
              content.addClass('fixed');        
              fixed = true;
          }
          } else {
          if(fixed){
              anchor.height(0);
              content.removeClass('fixed'); 
              fixed = false;
          }
      }
  };
  $(window).on('scroll', onScroll);
};
var sticky = new StickyElement($('.sticky-element'));

// реализация Slick слайдера

$(document).ready(function(){
  $('.slider__carousel').slick({
    arows: true, //стрелки
    dots: false, //точки пагинации
    adaptiveHeigth: true, //автоматическая регулировка высоты
    slidesToShow: 4, //количество показываемых слайдов
    slidesToScroll: 1, //количество появляющихся слайдов при переключении
    speed: 1000, //скорость пролистывания
    easing: 'easy-in-out', //алгоритм анимации
    autoplay: true, //включение автопроигрывания
    autoplaySpeed: 1000, // скорость автопроигрывания
    appendArrows:$('.arrow__box'),
    responsive:[

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
        {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
        {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

//реализация поп ап окна для шапки
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#pop-up__btn').addEventListener('click', function () {
    document.querySelector('#pop-up__top').classList.add('pop-up-active');
  });
  document.querySelector('#pop-up_close').addEventListener('click', function () {
    document.querySelector('#pop-up__top').classList.remove('pop-up-active');
  });
});


//поп ап для десктоп версии
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#pop-up__btn-desktop').addEventListener('click', function () {
    document.querySelector('#pop-up__desktop').classList.add('pop-up-active');
    document.querySelector('body').classList.add('overflow-hidden');
    document.querySelector('html').classList.add('overflow-hidden');
  });
  document.querySelector('#pop-up_close-desktop').addEventListener('click', function () {
    document.querySelector('#pop-up__desktop').classList.remove('pop-up-active');
    document.querySelector('body').classList.remove('overflow-hidden');
    document.querySelector('html').classList.remove('overflow-hidden');

  });
});


//поп ап для запроса десктоп версия
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#pop-up__btn-request').addEventListener('click', function () {
    document.querySelector('#pop-up__request').classList.add('pop-up-active');
    document.querySelector('body').classList.add('overflow-hidden');
    document.querySelector('html').classList.add('overflow-hidden');
  });
  document.querySelector('#pop-up_close-request').addEventListener('click', function () {
    document.querySelector('#pop-up__request').classList.remove('pop-up-active');
    document.querySelector('body').classList.remove('overflow-hidden');
    document.querySelector('html').classList.remove('overflow-hidden');

  });
});

//поп ап для "обсудить проект" десктоп версия
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.btn-discuss__active').addEventListener('click', function () {
    document.querySelector('#pop-up__discuss').classList.add('pop-up-active');
    document.querySelector('body').classList.add('overflow-hidden');
    document.querySelector('html').classList.add('overflow-hidden');
  });
  document.querySelector('#pop-up_close-discuss').addEventListener('click', function () {
    document.querySelector('#pop-up__discuss').classList.remove('pop-up-active');
    document.querySelector('body').classList.remove('overflow-hidden');
    document.querySelector('html').classList.remove('overflow-hidden');
  });
});


//поп ап для "обсудить проект нижняя часть" десктоп версия
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.btn-discuss__active-two').addEventListener('click', function () {
    document.querySelector('#pop-up__discuss').classList.add('pop-up-active');
    document.querySelector('body').classList.add('overflow-hidden');
    document.querySelector('html').classList.add('overflow-hidden');
  });
  document.querySelector('#pop-up_close-discuss').addEventListener('click', function () {
    document.querySelector('#pop-up__discuss').classList.remove('pop-up-active');
    document.querySelector('body').classList.remove('overflow-hidden');
    document.querySelector('html').classList.remove('overflow-hidden');
  });
});

//реализация поп ап Оставить отзыв
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#pop-up__feedback-btn').addEventListener('click', function () {
    document.querySelector('#pop-up__feedback').classList.add('pop-up-active');
    document.querySelector('body').classList.add('overflow-hidden');
    document.querySelector('html').classList.add('overflow-hidden');
  });
  document.querySelector('#pop-up_close-feedback').addEventListener('click', function () {
    document.querySelector('#pop-up__feedback').classList.remove('pop-up-active');
    document.querySelector('body').classList.remove('overflow-hidden');
    document.querySelector('html').classList.remove('overflow-hidden');
  });
});