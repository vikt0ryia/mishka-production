var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var buy = document.querySelector('.open-modal');
var popup = document.querySelector('.modal');
var close = popup.querySelector('.modal__overlay');

buy.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('modal--show');
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal--show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    }
  }
});
