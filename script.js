$(document).ready(function(){
  $('.parallax').parallax();
});

var divs = $('.card-img');
if($(window).scrollTop()<10){
  divs.stop(true,true).fadeIn("fast");
} else {
  divs.stop(true,true).fadeOut("fast");
}
