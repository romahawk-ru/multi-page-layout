//preloader




//swiper
const swiper = new Swiper('.swiper', {
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


//burger menu
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.add('is-active');
  });
  document.querySelector('#burger-close').addEventListener('click', function () {
    document.querySelector('#menu').classList.remove('is-active');
  });
});


//dвыпадающие контакты
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#box-on').addEventListener('click', function () {
    document.querySelector('#contact-box').classList.add('header-contacts__box-is-active');
  });
  document.querySelector('#contact-box').addEventListener('click', function () {
    document.querySelector('#contact-box').classList.remove('header-contacts__box-is-active');
  });
});

// появление элементов при скроле

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


//эффекты при скроле 

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