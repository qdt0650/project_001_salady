// portfolio_sub_menu_02.js
(function($){
// jQuery

var naviBox = $('#naviBox');
var gnbBtn = naviBox.find('.gnb_btn').children('button');
var naviG = naviBox.find('.navigation');

var timed = 500;

// gnb 버튼
gnbBtn.on('click', function(e){
  e.preventDefault();

  var hasAct = naviBox.hasClass('act');
  if(hasAct){
    naviG.slideDown(timed);
    naviBox.removeClass('act');
  }else{
    naviG.slideUp(timed/2);
    naviBox.addClass('act');
  }
});

})(jQuery);