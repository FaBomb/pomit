const pics_src = new Array("../HTML/images/flow/1.jpg","../HTML/images/flow/2.jpg","../HTML/images/flow/3.jpg","../HTML/images/flow/4.jpg","../HTML/images/flow/5.jpg","../HTML/images/flow/6.jpg");
const topic = new Array("total-topic1","total-topic2","total-topic3")
let num = 0;

slideshow();

function slideshow(){
    if (num == pics_src.length-3) {
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById(topic[0]).src=pics_src[num];
    document.getElementById(topic[1]).src=pics_src[num+1];
    document.getElementById(topic[2]).src=pics_src[num+2];
    setTimeout("slideshow()",4000)
}

function go_forward(){
    if (num == pics_src.length-3) {
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById(topic[0]).src=pics_src[num];
    document.getElementById(topic[1]).src=pics_src[num+1];
    document.getElementById(topic[2]).src=pics_src[num+2];
}

function go_back(){
    if (num == 0) {
        num = pics_src.length-3;
    }
    else {
        num --;
    }
    document.getElementById(topic[0]).src=pics_src[num];
    document.getElementById(topic[1]).src=pics_src[num+1];
    document.getElementById(topic[2]).src=pics_src[num+2];
}