// js_portfolio_main_001_salady-3.js

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

  // ---------------------------------------------------

  // var offHeadBox = headBox.offset().top;
  // var headBoxHeight = headBox.outerHeight();
  // var checkHeadBoxH = offHeadBox + headBoxHeight;

  // sideBox.css({'top':checkHeadBoxH + 'px'});

  
  // var scrollFixFn = function(){
  //   var st = win.scrollTop();
  //   if(offHeadBox <= st){
  //     headBox.css({'position':'fixed'});
  //   }else{
  //     headBox.removeAttr('style');
  //   }
  // };
  // scrollFixFn();

  
  // var  headBoxSetFn = function(){
  //   var headBoxH = headBox.outerHeight();
  //   var mySetHeadOffset = headBoxH + 500;
  //   return mySetHeadOffset;
  // };

  // var scrollFix2Fn = function(){
  //   var st = win.scrollTop();
  //   var myScrollTop = st + headBoxSetFn();
  //   if(checkHeadBoxH < myScrollTop){
  //     sideBox.css({'position':'fixed', top:headBoxSetFn()});
  //   }else{
  //     sideBox.css({'position':'absolute', top:checkHeadBoxH + 'px'});
  //   }
  // };

  // win.on('scroll',function(){
  //   scrollFixFn();
  //   scrollFix2Fn();
  // });

})(jQuery);