
// var btn = document.getElementById('btn');
// btn.addEventListener('click', handler);
// function handler(e) {
//   var modalWindow = document.getElementById('modal');
//     if(e.target.tagName == 'li'){
//         modalWindow.style.display = "flex";
//     }
// }


var btn = document.getElementById('btn');
var btnPopup = document.getElementById('popup__btn');
var popup = document.getElementById('popup_content');
var btn_confirm = document.getElementById('popup_content');
var modalWindow = document.getElementById('modal');
var span = document.getElementsByClassName('close')[0];
var mainsidebar = document.getElementById('mainsidebar');
var sidebar = document.querySelector('.sidebar');
console.log(sidebar);
var btn_sidebar = document.querySelectorAll('.sidebar__item_link__img.btn_sidebar');
console.log(btn_sidebar);
var close_sidebar = document.getElementById('close_sidebar');
var accauntInfo = document.getElementById('accauntInfo');
var logo = document.getElementById('logo');
var closeAccaunt = document.getElementById('closeAccaunt');


btn.onclick = function() {
    modalWindow.style.display = "block";
};
btnPopup.onclick = function() {
    popup.style.display = "block"
};
span.onclick = function(){
    modalWindow.style.display = "none";
};
btn_confirm.onclick = function(){
    popup.style.display = "none";
};

btn_sidebar[0].onclick = function() {
        mainsidebar.style.left = "0";
        sidebar.style.left = "-60px";

};
btn_sidebar[1].onclick = function() {
    mainsidebar.style.left = "-255px";
    sidebar.style.left = "0";
};
close_sidebar.onclick = function(){
    mainsidebar.style.left = "-255px";
    sidebar.style.left = "0";
};

logo.onclick = function() {
    accauntInfo.style.display = "flex"
};
closeAccaunt.onclick = function(){
    accauntInfo.style.display = "none";
};


window.onclick = function (e) {
  if(e.target == popup) {
      popup.style.display = "none";
  }
};


