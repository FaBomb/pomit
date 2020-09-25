let list_img = new Array();
list_img[0] = new Array("category/skill.jpg");
list_img[2] = new Array("category/help.jpg");
list_img[1] = new Array("category/charange.jpg");
let elem = document.getElementById("headImg")

function image_change(sel_val){
    elem.setAttribute("src",list_img[sel_val]);
}
