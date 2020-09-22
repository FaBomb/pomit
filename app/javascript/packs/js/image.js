let list_img = new Array();
list_img[0] = new Array("../../HTML/images/category/skill.jpg");
list_img[1] = new Array("../../HTML/images/category/charange.jpg");
list_img[2] = new Array("../../HTML/images/category/help.jpg");
let elem = document.getElementById("headImg")

function set_img(sel_val){
    elem.setAttribute("src",list_img[sel_val]);
}