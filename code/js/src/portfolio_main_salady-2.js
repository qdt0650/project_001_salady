// portfolio_main_salady-2.js
(function($){
// jQuery

// popup close 

var popUp = $('.popup');
var popClose = popUp.children('.popup_close');
var closeBtn = popClose.children('.popup_btn');

closeBtn.on('click', function(e){
  e.preventDefault();
  popUp.hide();
});

})(jQuery);