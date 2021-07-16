// js_portfolio_main_001_salady-2.js

(function($){
  // jQuery

  // 광고배너 슬라이드 기능

  // 변수
  var slideBtn = $('.slide_btn');
  var nextBtn = slideBtn.children('.next');
  var prevBtn = slideBtn.children('.prev');

  var topicArea = $('.topic_area');
  var topicUl = topicArea.children('ul');
  var topicLi = topicArea.children('li');
  var topicLiLen = topicArea.length;

  var n = 0;
  // var permission = true;

  // var cloneLi = topicLi.eq(-1).clone();
  // topicUl.prepend(cloneLi);
  // var newTopicLi = topicUl.children('li');
  // var newLiLen = newTopicLi.length;


  nextBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      n += 1;

      if( n > topicLiLen-1 ){
        // n = viewLiLen-1;
        n = 0;
        topicUl.css({marginLeft:100+'%'});
      }

      topicUl.stop().animate({marginLeft:(-100 * n) + '%'}, function(){
        permission = true;
      });
    }
  });
  console.log(n);


  prevBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      n -= 1;
      topicUl.stop().animate({marginLeft:(-100 * n) + '%'}, function(){
        if(n < 0){
          n = topicLiLen-1;
          var lastMv = -100 * n + '%';
          topicUl.css({marginLeft:lastMv});
        }
        permission = true;
      });
    }
    console.log(n);
  });



})(jQuery);