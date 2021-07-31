// device.js
(function($){

$.ajax({
  url: '../data/device_type.json',
  context: document.body
}).done(function(data){
  // console.log(data);
  var importDevice = data;

// jQuery

// 변수

var win = $(window);

// 1. 브라우저 크기 값 파악
var deviceW = function(){
  var deviceType = importDevice;
  var checkType;
  var winW = win.outerWidth(true); 

  if(winW >= deviceType[3].size){
    checkType = deviceType[3].type;
  }else if(winW >= deviceType[2].size){
    checkType = deviceType[2].type;
  }else if(winW >= deviceType[1].size){
    checkType = deviceType[1].type;
  }else {
    checkType = deviceType[0].type;
  }
  return checkType;
};


var beforeW = deviceW();
console.log('before', beforeW);

// 브라우저의 크기가 변경되면 해당하는 수치를 파악
win.on('resize', function(){
  var afterW = deviceW();
  console.log('after', afterW);

  // 디바이스 환경이 변경되면( 같지 않으면 !== )
  if(beforeW !== afterW){
    location.reload();
  }
});

}); // $.ajax()

})(jQuery);