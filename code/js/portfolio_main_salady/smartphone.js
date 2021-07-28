// smartphone.js

(function($){
  
  // jQuery
  // smartphone.css
  // 메뉴 다음, 이전 버튼

  // 변수
  var viewBox = $('#viewBox');
  var menuBtn = viewBox.children('.menu_btn');
  var menuNextBtn = menuBtn.children('.menu_next_btn');
  var menuPrevBtn = menuBtn.children('.menu_prev_btn');

  var menuTab = $('.menu_tab');
  var menuTabUl = menuTab.children('ul');
  var menuTabLi = menuTab.children('li');
  var tabLiLen = menuTabLi.length;

  var tabWidth = menuTabUl.width();
  // var tabWidth = menuTabUl.width() + '%';
  // console.log(tabWidth);

  // 1칸 이동

  menuNextBtn.on('click', function(e){
    e.preventDefault();
    menuTabUl.css({marginLeft:-100 + '%'});
  });

  

})(jQuery);