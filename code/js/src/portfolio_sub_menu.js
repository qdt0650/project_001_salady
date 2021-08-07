// js/src/portfolio_sub_menu.js

// 탭메뉴

(function($){
  
  // 변수
  var menuList = $('.menu_list');
  var menuUl = menuList.children('ul');
  var menuLi = menuUl.children('li');

  var menuImg = $('.menu_img');
  var menuCon = menuImg.children('div');

  menuLi.on('click', function(){
    var thisI = $(this).index();
    // console.log(thisI);
  
    menuCon.eq(thisI).fadeIn();
    menuCon.eq(thisI).siblings().fadeOut();
  });

  menuCon.on('click', function(){
    var thisI = $(this).index();
    console.log(thisI);
  });


})(jQuery);