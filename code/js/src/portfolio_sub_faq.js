// portfolio_sub_faq.js
(function($){
// jQuery

var faq = $('.faq_note');
var faqDl = faq.find('dl');
var faqDt = faqDl.children('dt');
var faqBtn = faqDt.children('button');
var faqDd = faqDl.children('dd');

faqBtn.on('click',function(e){
  e.preventDefault();
  var thisI = $(this).parent();
  var nextDd = thisI.next(faqDd);
  var nextDdWin = nextDd.css('display') === 'none';

  nextDd.siblings('dd').stop().slideUp();
  thisI.siblings('dt').removeClass('act');

  if(nextDdWin){
    nextDd.slideDown();
    thisI.addClass('act');
  }else{
    nextDd.slideUp();
    thisI.removeClass('act');
  }
});

})(jQuery);

