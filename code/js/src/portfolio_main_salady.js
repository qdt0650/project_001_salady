// portfolio_main_salady.js

(function($){
// jQuery

  // promotionBox 인디케이터 기능

  var proBanner = $('.pro_banner_01');
  var button = proBanner.find('.button');
  var butUl = button.find('ul');
  var butLi = butUl.find('li');
  var butLink = butLi.find('a');

  var proView = proBanner.find('.pro_view');
  var proViewUl = proView.find('ul');

  var n = 1;

  butLink.on('click', function(e){
    e.preventDefault();
    var _thisI = $(this).parent().index();
    n = _thisI

    proViewUl.stop().animate({marginLeft : (-100 * n) + '%'});

    butLi.eq(n).addClass('act');
    butLi.eq(n).siblings().removeClass('act');

    // console.log(n);
  });

  
  // top버튼

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