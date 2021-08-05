// portfolio_main_salady.js

(function($){

  var proBanner = $('.pro_banner_01');
  var button = proBanner.find('.button');
  var butUl = button.find('ul');
  var butLi = butUl.find('li');
  var butLink = butLi.find('a');
  
  var proView = proBanner.find('.pro_view');
  var proViewUl = proView.find('ul');
  var proViewLi = proView.find('li');
  var viewLiLen = proViewLi.length;
  
  var proBtn = proBanner.find('.pro_btn')
  var nextBtn = proBtn.find('.pro_next_btn')
  var prevBtn = proBtn.find('.pro_prev_btn')
  
  var n = 0;
  var permission = true;
  var indiSetFn = function(){
    butLi.eq(n).addClass('act');
    butLi.eq(n).siblings().removeClass('act');
  };

  butLink.on('click', function(e){
    e.preventDefault();
    var _thisI = $(this).parent().index();
    n = _thisI

    proViewUl.stop().animate({marginLeft : (-100 * n) + '%'});
    indiSetFn();
  });

  nextBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      n += 1;
       if(n > viewLiLen-1){
          n = 0;
          proViewUl.stop().css({marginLeft: 100 +'%'});
        }
      proViewUl.stop().animate({marginLeft: -100 * n +'%'}, function(){
          indiSetFn(n);   
          permission = true;  
      });
    }
  });

  prevBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      n -= 1;
       if(n > viewLiLen-1){
          n = 0;
          proViewUl.stop().css({marginLeft: 100 +'%'});
        }
      proViewUl.stop().animate({marginLeft: -100 * n +'%'}, function(){
          indiSetFn(n);   
          permission = true;  
      });
    }
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

