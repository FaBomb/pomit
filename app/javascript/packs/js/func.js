$(function(){
    $('.nav_toggle').on('click', function () {
        $('.nav_toggle, .nav, .sidebar, .topic, .back, .head_img, .message_form').toggleClass('show');
    });
});

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

function func1(jumpNo){
    const elem1 = document.getElementById("jump1")
    const elem2 = document.getElementById("jump2")
    const elem3 = document.getElementById("jump3")
    const elem4 = document.getElementById("jump4")

    if(jumpNo == 2){
      elem2.style.borderBottom = "5px solid #1E70C6";
      elem1.style.borderBottom = "";
      elem3.style.borderBottom = "";
      elem4.style.borderBottom = "";
    }
    else if(jumpNo == 3){
      elem3.style.borderBottom = "5px solid #1E70C6";
      elem1.style.borderBottom = "";
      elem2.style.borderBottom = "";
      elem4.style.borderBottom = "";
    }
    else if(jumpNo == 4){
      elem4.style.borderBottom = "5px solid #1E70C6";
      elem1.style.borderBottom = "";
      elem2.style.borderBottom = "";
      elem3.style.borderBottom = "";
    }
    else {
      elem1.style.borderBottom = "5px solid #1E70C6";
      elem2.style.borderBottom = "";
      elem3.style.borderBottom = "";
      elem4.style.borderBottom = "";
    }
  };

function createArea(childId,parentId){
  console.log(childId)
  let area = document.createElement('li');
  let child = document.getElementById(childId);
  let parent = document.getElementById(parentId);
  area.innerHTML = child.outerHTML;
  parent.insertBefore(area,null);
}

function removeArea(parentId){
  let element = document.getElementById(parentId);
  let elemCount = element.childElementCount;
  if(elemCount != 1){
    element.removeChild(element.lastChild);
  }
}