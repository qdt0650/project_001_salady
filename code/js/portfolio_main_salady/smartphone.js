// smartphone.js
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
    console.log( winW,deviceSize[0].size,deviceSize[1].size)
    if(winW >= deviceSize[0].size && winW < deviceSize[1].size){
      console.log('smartphone 기능 동작체크');
      // 디바이스 크기가 스마트폰 영역일경우 아래 내용동작
      
      var proBox = $('#promotionBox');
      var sideBox = $('#sideBox');
     
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
      // console.log(gnbBtn);
      
      var naviBox = $('#naviBox');
      var gnbBtn = naviBox.find('.gnb_btn').children('button');
      var naviG = naviBox.find('.navigation');
      
      var hideBox = function(){
        proBox.hide();
        viewBox.hide();
        sideBox.hide();
      };
      
      var showBox = function(){
        proBox.show();
        viewBox.show();
        sideBox.show();
      };
      var timed = 500;

      // gnb 버튼
      gnbBtn.on('click', function(e){
        e.preventDefault();

        var hasAct = naviBox.hasClass('act');
        if(hasAct){
          naviG.slideDown(timed);
          hideBox();
          naviBox.removeClass('act');
        }else{
          naviG.slideUp(timed/2);
          showBox();
          naviBox.addClass('act');
        }
      });

      // 스마트폰 메뉴 다음 이전 버튼
      nextBtn.on('click', function(e){
        e.preventDefault();
        if(permission){
          permission = false;
          n += 1;
  
          if(n > tabLiLen-1){
            n = tabLiLen-1;
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
            n = tabLiLen-1;
            menuTabUl.css({marginLeft: -100 * n + '%'});
          }
        });
      });




    }     
  });
  
  })(jQuery); 