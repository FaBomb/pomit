const charange_pics_src = new Array("../HTML/images/flow/2.jpg","../HTML/images/flow/1.jpg","../HTML/images/flow/4.jpg","../HTML/images/flow/3.jpg","../HTML/images/flow/6.jpg","../HTML/images/flow/5.jpg");
const topic_content = {"チャレンジタイトル1":"らおが1","チャレンジタイトル2":"お2えりおが",
"チャレンジタイトル3":"おてぇ3おｈｒげｈ","チャレンジタイトル4":"おえ4ｒｈごはｒｈｂいｊんｒ",
"チャレンジタイトル5":"おてぇsag5aげｈ","チャレンジタイトル6":"ｈ6ごがｒがｒｈｂいｊんｒ"}
const charange_topic = ["charange-topic1","charange-topic2","charange-topic3","charange-topic4"]
let charange_num = 0;

charange_slideshow();

function charange_slideshow(){
    if (charange_num === charange_pics_src.length-4) {
        charange_num = 0;
    }
    else {
        charange_num ++;
    }
    document.getElementById(charange_topic[0]).src=charange_pics_src[charange_num];
    document.getElementById(charange_topic[1]).src=charange_pics_src[charange_num+1];
    document.getElementById(charange_topic[2]).src=charange_pics_src[charange_num+2];
    document.getElementById(charange_topic[3]).src=charange_pics_src[charange_num+3];
    document.getElementById("charange_title1").textContent = Object.keys(topic_content)[charange_num].toString();
    document.getElementById("charange_title2").textContent = Object.keys(topic_content)[charange_num+1].toString();
    document.getElementById("charange_title3").textContent = Object.keys(topic_content)[charange_num+2].toString();
    document.getElementById("charange_title4").textContent = Object.keys(topic_content)[charange_num+3].toString();
    document.getElementById("charange_text1").textContent = topic_content[Object.keys(topic_content)[charange_num]].toString();
    document.getElementById("charange_text2").textContent = topic_content[Object.keys(topic_content)[charange_num+1]].toString();
    document.getElementById("charange_text3").textContent = topic_content[Object.keys(topic_content)[charange_num+2]].toString();
    document.getElementById("charange_text4").textContent = topic_content[Object.keys(topic_content)[charange_num+3]].toString();
    setTimeout("charange_slideshow()",5000)
}

function charange_go_forward(){
    if (charange_num === charange_pics_src.length-4) {
        charange_num = 0;
    }
    else {
        charange_num ++;
    }
    document.getElementById(charange_topic[0]).src=charange_pics_src[charange_num];
    document.getElementById(charange_topic[1]).src=charange_pics_src[charange_num+1];
    document.getElementById(charange_topic[2]).src=charange_pics_src[charange_num+2];
    document.getElementById(charange_topic[3]).src=charange_pics_src[charange_num+3];
    document.getElementById("charange_title1").textContent = Object.keys(topic_content)[charange_num].toString();
    document.getElementById("charange_title2").textContent = Object.keys(topic_content)[charange_num+1].toString();
    document.getElementById("charange_title3").textContent = Object.keys(topic_content)[charange_num+2].toString();
    document.getElementById("charange_title4").textContent = Object.keys(topic_content)[charange_num+3].toString();
    document.getElementById("charange_text1").textContent = topic_content[Object.keys(topic_content)[charange_num]].toString();
    document.getElementById("charange_text2").textContent = topic_content[Object.keys(topic_content)[charange_num+1]].toString();
    document.getElementById("charange_text3").textContent = topic_content[Object.keys(topic_content)[charange_num+2]].toString();
    document.getElementById("charange_text4").textContent = topic_content[Object.keys(topic_content)[charange_num+3]].toString();
}

function charange_go_back(){
    if (charange_num === 0) {
        charange_num = charange_pics_src.length-4;
    }
    else {
        charange_num --;
    }
    document.getElementById(charange_topic[0]).src=charange_pics_src[charange_num];
    document.getElementById(charange_topic[1]).src=charange_pics_src[charange_num+1];
    document.getElementById(charange_topic[2]).src=charange_pics_src[charange_num+2];
    document.getElementById(charange_topic[3]).src=charange_pics_src[charange_num+3];
    document.getElementById("charange_title1").textContent = Object.keys(topic_content)[charange_num].toString();
    document.getElementById("charange_title2").textContent = Object.keys(topic_content)[charange_num+1].toString();
    document.getElementById("charange_title3").textContent = Object.keys(topic_content)[charange_num+2].toString();
    document.getElementById("charange_title4").textContent = Object.keys(topic_content)[charange_num+3].toString();
    document.getElementById("charange_text1").textContent = topic_content[Object.keys(topic_content)[charange_num]].toString();
    document.getElementById("charange_text2").textContent = topic_content[Object.keys(topic_content)[charange_num+1]].toString();
    document.getElementById("charange_text3").textContent = topic_content[Object.keys(topic_content)[charange_num+2]].toString();
    document.getElementById("charange_text4").textContent = topic_content[Object.keys(topic_content)[charange_num+3]].toString();
}