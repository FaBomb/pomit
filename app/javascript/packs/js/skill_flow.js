const skill_pics_src = new Array("../HTML/images/flow/1.jpg","../HTML/images/flow/2.jpg","../HTML/images/flow/3.jpg","../HTML/images/flow/4.jpg","../HTML/images/flow/6.jpg","../HTML/images/flow/5.jpg");
const skill_content = {"スキルタイトル1":"らおが1","スキルタイトル2":"お2えりおが",
"スキルタイトル3":"おてぇ3おｈｒげｈ","スキルタイトル4":"おえ4ｒｈごはｒｈｂいｊんｒ",
"スキルタイトル5":"おてぇsag5aげｈ","スキルタイトル6":"ｈ6ごがｒがｒｈｂいｊんｒ"}
const skill_topic = ["skill-topic1","skill-topic2","skill-topic3","skill-topic4"]
let skill_num = 0;

skill_slideshow();

function skill_slideshow(){
    if (skill_num === skill_pics_src.length-4) {
        skill_num = 0;
    }
    else {
        skill_num ++;
    }
    document.getElementById(skill_topic[0]).src=skill_pics_src[skill_num];
    document.getElementById(skill_topic[1]).src=skill_pics_src[skill_num+1];
    document.getElementById(skill_topic[2]).src=skill_pics_src[skill_num+2];
    document.getElementById(skill_topic[3]).src=skill_pics_src[skill_num+3];
    document.getElementById("skill_title1").textContent = Object.keys(skill_content)[skill_num].toString();
    document.getElementById("skill_title2").textContent = Object.keys(skill_content)[skill_num+1].toString();
    document.getElementById("skill_title3").textContent = Object.keys(skill_content)[skill_num+2].toString();
    document.getElementById("skill_title4").textContent = Object.keys(skill_content)[skill_num+3].toString();
    document.getElementById("skill_text1").textContent = skill_content[Object.keys(skill_content)[skill_num]].toString();
    document.getElementById("skill_text2").textContent = skill_content[Object.keys(skill_content)[skill_num+1]].toString();
    document.getElementById("skill_text3").textContent = skill_content[Object.keys(skill_content)[skill_num+2]].toString();
    document.getElementById("skill_text4").textContent = skill_content[Object.keys(skill_content)[skill_num+3]].toString();
    setTimeout("skill_slideshow()",4000)
}

function skill_go_forward(){
    if (skill_num === skill_pics_src.length-4) {
        skill_num = 0;
    }
    else {
        skill_num ++;
    }
    document.getElementById(skill_topic[0]).src=skill_pics_src[skill_num];
    document.getElementById(skill_topic[1]).src=skill_pics_src[skill_num+1];
    document.getElementById(skill_topic[2]).src=skill_pics_src[skill_num+2];
    document.getElementById(skill_topic[3]).src=skill_pics_src[skill_num+3];
    document.getElementById("skill_title1").textContent = Object.keys(skill_content)[skill_num].toString();
    document.getElementById("skill_title2").textContent = Object.keys(skill_content)[skill_num+1].toString();
    document.getElementById("skill_title3").textContent = Object.keys(skill_content)[skill_num+2].toString();
    document.getElementById("skill_title4").textContent = Object.keys(skill_content)[skill_num+3].toString();
    document.getElementById("skill_text1").textContent = skill_content[Object.keys(skill_content)[skill_num]].toString();
    document.getElementById("skill_text2").textContent = skill_content[Object.keys(skill_content)[skill_num+1]].toString();
    document.getElementById("skill_text3").textContent = skill_content[Object.keys(skill_content)[skill_num+2]].toString();
    document.getElementById("skill_text4").textContent = skill_content[Object.keys(skill_content)[skill_num+3]].toString();
}

function skill_go_back(){
    if (skill_num === 0) {
        skill_num = skill_pics_src.length-4;
    }
    else {
        skill_num --;
    }
    document.getElementById(skill_topic[0]).src=skill_pics_src[skill_num];
    document.getElementById(skill_topic[1]).src=skill_pics_src[skill_num+1];
    document.getElementById(skill_topic[2]).src=skill_pics_src[skill_num+2];
    document.getElementById(skill_topic[3]).src=skill_pics_src[skill_num+3];
    document.getElementById("skill_title1").textContent = Object.keys(skill_content)[skill_num].toString();
    document.getElementById("skill_title2").textContent = Object.keys(skill_content)[skill_num+1].toString();
    document.getElementById("skill_title3").textContent = Object.keys(skill_content)[skill_num+2].toString();
    document.getElementById("skill_title4").textContent = Object.keys(skill_content)[skill_num+3].toString();
    document.getElementById("skill_text1").textContent = skill_content[Object.keys(skill_content)[skill_num]].toString();
    document.getElementById("skill_text2").textContent = skill_content[Object.keys(skill_content)[skill_num+1]].toString();
    document.getElementById("skill_text3").textContent = skill_content[Object.keys(skill_content)[skill_num+2]].toString();
    document.getElementById("skill_text4").textContent = skill_content[Object.keys(skill_content)[skill_num+3]].toString();
}