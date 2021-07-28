// js_portfolio_sub_menu-2.js

(function($){
  // jQuery

  // 변수
  var headBox = $('#headBox');
  var naviBox = $('#naviBox');
  var sideBox = $('#sideBox');

  var topBtn = $('.top_btn');

  topBtn.find('a').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop : 0 });
  });

})(jQuery);