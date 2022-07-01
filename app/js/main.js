$(function(){

$('.top-slider__inner').slick({
  fade:true,
  prevArrow: $('.top-slider__btn--prev'),
  nextArrow: $('.top-slider__btn--next')
});

$(".rating__star").rateYo({
    numStars: 1,
    fullStar: true,
    starWidth: "16px",
    
  });

var mixer = mixitup('.top-products__content');

var mixer = mixitup('.promotions__content');



});