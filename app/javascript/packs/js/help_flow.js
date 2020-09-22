const help_pics_src = new Array("../HTML/images/flow/3.jpg","../HTML/images/flow/1.jpg","../HTML/images/flow/2.jpg","../HTML/images/flow/4.jpg","../HTML/images/flow/5.jpg","../HTML/images/flow/6.jpg");
const help_content = {"ヘルプタイトル1":"らおが1","ヘルプタイトル2":"お2えりおが",
"ヘルプタイトル3":"おてぇ3おｈｒげｈ","ヘルプタイトル4":"おえ4ｒｈごはｒｈｂいｊんｒ",
"ヘルプタイトル5":"おてぇsag5aげｈ","ヘルプタイトル6":"ｈ6ごがｒがｒｈｂいｊんｒ"}
const help_topic = ["help-topic1","help-topic2","help-topic3","help-topic4"]
let help_num = 0;

help_slideshow();

function help_slideshow(){
    if (help_num === help_pics_src.length-4) {
        help_num = 0;
    }
    else {
        help_num ++;
    }
    document.getElementById(help_topic[0]).src=help_pics_src[help_num];
    document.getElementById(help_topic[1]).src=help_pics_src[help_num+1];
    document.getElementById(help_topic[2]).src=help_pics_src[help_num+2];
    document.getElementById(help_topic[3]).src=help_pics_src[help_num+3];
    document.getElementById("title1").textContent = Object.keys(help_content)[help_num].toString();
    document.getElementById("title2").textContent = Object.keys(help_content)[help_num+1].toString();
    document.getElementById("title3").textContent = Object.keys(help_content)[help_num+2].toString();
    document.getElementById("title4").textContent = Object.keys(help_content)[help_num+3].toString();
    document.getElementById("text1").textContent = help_content[Object.keys(help_content)[help_num]].toString();
    document.getElementById("text2").textContent = help_content[Object.keys(help_content)[help_num+1]].toString();
    document.getElementById("text3").textContent = help_content[Object.keys(help_content)[help_num+2]].toString();
    document.getElementById("text4").textContent = help_content[Object.keys(help_content)[help_num+3]].toString();
    setTimeout("help_slideshow()",4500)
}

function help_go_forward(){
    if (help_num === help_pics_src.length-4) {
        help_num = 0;
    }
    else {
        help_num ++;
    }
    document.getElementById(help_topic[0]).src=help_pics_src[help_num];
    document.getElementById(help_topic[1]).src=help_pics_src[help_num+1];
    document.getElementById(help_topic[2]).src=help_pics_src[help_num+2];
    document.getElementById(help_topic[3]).src=help_pics_src[help_num+3];
    document.getElementById("title1").textContent = Object.keys(help_content)[help_num].toString();
    document.getElementById("title2").textContent = Object.keys(help_content)[help_num+1].toString();
    document.getElementById("title3").textContent = Object.keys(help_content)[help_num+2].toString();
    document.getElementById("title4").textContent = Object.keys(help_content)[help_num+3].toString();
    document.getElementById("text1").textContent = help_content[Object.keys(help_content)[help_num]].toString();
    document.getElementById("text2").textContent = help_content[Object.keys(help_content)[help_num+1]].toString();
    document.getElementById("text3").textContent = help_content[Object.keys(help_content)[help_num+2]].toString();
    document.getElementById("text4").textContent = help_content[Object.keys(help_content)[help_num+3]].toString();
}

function help_go_back(){
    if (help_num === 0) {
        help_num = help_pics_src.length-4;
    }
    else {
        help_num --;
    }
    document.getElementById(help_topic[0]).src=help_pics_src[help_num];
    document.getElementById(help_topic[1]).src=help_pics_src[help_num+1];
    document.getElementById(help_topic[2]).src=help_pics_src[help_num+2];
    document.getElementById(help_topic[3]).src=help_pics_src[help_num+3];
    document.getElementById("title1").textContent = Object.keys(help_content)[help_num].toString();
    document.getElementById("title2").textContent = Object.keys(help_content)[help_num+1].toString();
    document.getElementById("title3").textContent = Object.keys(help_content)[help_num+2].toString();
    document.getElementById("title4").textContent = Object.keys(help_content)[help_num+3].toString();
    document.getElementById("text1").textContent = help_content[Object.keys(help_content)[help_num]].toString();
    document.getElementById("text2").textContent = help_content[Object.keys(help_content)[help_num+1]].toString();
    document.getElementById("text3").textContent = help_content[Object.keys(help_content)[help_num+2]].toString();
    document.getElementById("text4").textContent = help_content[Object.keys(help_content)[help_num+3]].toString();
}