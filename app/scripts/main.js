const lineTop = document.querySelector('.top');
const lineMid = document.querySelector('.middle');
const lineBot = document.querySelector('.bottom');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');
const popupMenu = document.querySelector('.popup-menu');


// Animação botao do menu
menu.addEventListener('click', function(){

  if (menu.className.indexOf('menu-close') != -1){
    lineTop.classList.remove('top-rotate');
    lineMid.classList.remove('mid-hidden');
    lineBot.classList.remove('bot-rotate');

    popupMenu.classList.remove('popup-menu-open');
    menu.classList.remove('menu-close');
  }else {
    lineTop.classList.add('top-rotate');
    lineMid.classList.add('mid-hidden');
    lineBot.classList.add('bot-rotate');

    popupMenu.classList.add('popup-menu-open');
    menu.classList.add('menu-close');
  }
});
