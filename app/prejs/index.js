var menuBtnToggle = document.querySelector('.header-nav-menu__btn_close');


// MENU BTN START
menuBtnToggle.addEventListener('click', function () {
  this.classList.toggle('open');
  document.querySelector('.header-nav').classList.toggle('active');
})
// MENU BTN END


// TAB SELECTION
var tabLinks = document.querySelectorAll('.sections-nav__link');
var tabBody = document.querySelectorAll('.sections-chill');
for (var i = 0; i < tabLinks.length; i++) {
  tabLinks[i].onclick = function (e) {
    e.preventDefault(); 
    for (var k = 0; k < tabLinks.length; k++) {
      tabLinks[k].classList.remove('active');
    }
    for (var b = 0; b < tabBody.length; b++) {
      tabBody[b].classList.remove('active');
    }
    this.classList.add('active');
    document.getElementById(this.getAttribute('data-tab')).classList.add('active');
  }
}
// TAB SELECTION END


// Slider start

function Slider(sliderClass) {
  this.slide = document.querySelectorAll(sliderClass + ' .slide');
  this.btnLeft = document.querySelector(sliderClass + ' .prev__arrow');
  this.btnRight = document.querySelector(sliderClass + ' .next__arrow');
  this.counter = 0;
  this.btnLeft.addEventListener('click', left);
  this.btnRight.addEventListener('click', right);
  var context = this;

  function right() {
      context.slide[context.counter].classList.remove('active');
      context.counter++;
      if (context.counter == context.slide.length) {
          context.counter = 0;
      }
      context.slide[context.counter].classList.add('active');
  }

  function left() {
      context.slide[context.counter].classList.remove('active');
      context.counter--;
      if (context.counter < 0) {
          context.counter = --context.slide.length;
      }
      context.slide[context.counter].classList.add('active');
  }
}

var slider1 = new Slider('.slider1');
var slider1 = new Slider('.slider2');
var slider1 = new Slider('.slider3');
var slider1 = new Slider('.slider4');




