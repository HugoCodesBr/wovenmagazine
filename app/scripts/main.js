// variaveis menu
const lineTop = document.querySelector('.top');
const lineMid = document.querySelector('.middle');
const lineBot = document.querySelector('.bottom');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');
const popupMenu = document.querySelector('.popup-menu');

// variaveis checkout
const cartBox = document.querySelector('.cart-container');
const cart = document.querySelector('.cart');
const fechar = document.querySelector('.xis');

// variaveis busca
const searchBox = document.querySelector('.search-container');
const search = document.querySelector('.search');


// Animação botao do menu
menu.addEventListener('click', function(){

  cartBox.classList.remove('cart-container-open');
  searchBox.classList.remove('search-container-open');

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

// Checkou abrir e fechar
cart.addEventListener('click', function(){

  lineTop.classList.remove('top-rotate');
  lineMid.classList.remove('mid-hidden');
  lineBot.classList.remove('bot-rotate');

  popupMenu.classList.remove('popup-menu-open');
  menu.classList.remove('menu-close');

  searchBox.classList.remove('search-container-open');


  if(cartBox.className.indexOf('cart-container-open') != -1){
    cartBox.classList.remove('cart-container-open')
  }else {
    cartBox.classList.add('cart-container-open')
  }
});

fechar.addEventListener('click', function(){
  cartBox.classList.remove('cart-container-open');
})

// Abrir pesquisa
search.addEventListener('click', function(){

  lineTop.classList.remove('top-rotate');
  lineMid.classList.remove('mid-hidden');
  lineBot.classList.remove('bot-rotate');

  popupMenu.classList.remove('popup-menu-open');
  menu.classList.remove('menu-close');

  cartBox.classList.remove('cart-container-open');

  if (searchBox.className.indexOf('search-container-open') != -1){
    searchBox.classList.remove('search-container-open')
  } else {
    searchBox.classList.add('search-container-open')
  }
})




