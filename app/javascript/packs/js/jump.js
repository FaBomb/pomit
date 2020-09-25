$(function(){
    let fix    = $(".jump"); 
    let fixTop = fix.offset().top;
    $(window).scroll(function () {  
      if($(window).scrollTop() >= fixTop) {
        fix.css("position","sticky");
        fix.css("position","-webkit-sticky");
        fix.css("top","0"); 
        fix.css("width","90%") 
        fix.css("border-bottom-color","red")  
      } else {
        fix.css("position","");                
        fix.css("top","");     
      }
    });
  });