// tablet.js
(function($){
// jQuery

// 1. 디바이스 사이즈를 체크
// 2. 사용하려는 규격에 일치할 경우 아래 내용이 동작하도록 처리 끝! - 가급적 함수로 처리하는게 좋아요
$.ajax({
  url: '../data/device_type.json',
  context: document.body
}).done(function(data){
  // console.log(data);
  var deviceSize = data;
  var win = $(window);
  var winW = win.outerWidth();
  console.log(deviceSize)
  console.log( winW,deviceSize[1].size,deviceSize[2].size)
  if(winW >= deviceSize[1].size && winW < deviceSize[2].size){
    console.log('tablet 기능 동작체크');
    // 디바이스 크기가 타블렛 영역일경우 아래 내용동작


    
    // 태블릿 메뉴 다음 이전 버튼
    var viewBox = $('#viewBox');
    var menuBtn = viewBox.children('.menu_btn');
    var nextBtn = menuBtn.children('.menu_next_btn');
    var prevBtn = menuBtn.children('.menu_prev_btn');
  
    var menuTab = viewBox.children('.menu_tab');
    var menuTabUl = menuTab.children('ul');
    var menuTabLi = menuTabUl.children('li');
    var tabLiLen = menuTabLi.length;
  
    var n = 0;
    var permission = true;

    nextBtn.on('click', function(e){
      e.preventDefault();
      if(permission){
        permission = false;
        n += 1;

        if(n > tabLiLen-7){
          n = tabLiLen-7;
        }

        menuTabUl.stop().animate({marginLeft:(-100 * n) + '%'},function(){
          permission = true;
        });
      }
    });

    prevBtn.on('click', function(e){
      e.preventDefault();
      n -= 1;
      menuTabUl.stop().animate({marginLeft:(-100 * n) + '%'}, function(){
          if( n < 0){
          n = tabLiLen-7;
          menuTabUl.css({marginLeft: -100 * n + '%'});
        }
        });
    });



  } 
  
});

})(jQuery); 