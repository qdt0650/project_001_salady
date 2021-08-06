// js/src/portfolio_sub_menu.js

// 탭메뉴

(function($){
  
  // 변수
  var menuList = $('.menu_list');
  var menuUl = menuList.children('ul');
  var menuLi = menuUl.children('li');

  var menuImg = $('.menu_img');
  var menuCon = menuImg.children('div');


  // eq(순서) , index(순서 파악)

  menuLi.on('click', function(){
    var thisI = $(this).index();
    // console.log(thisI);
  
    menuCon.eq(thisI).fadeIn();
    menuCon.eq(thisI).siblings().fadeOut();
  });

  menuCon.on('click', function(){
    var thisI = $(this).index();
  });

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