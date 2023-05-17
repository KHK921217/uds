$(function(){
  $('.header_container > .inner_container > nav > .menu, .header_container > .inner_container > nav > .mbtn > i').click(function(){
    $('header .header_container .menu_wrap').toggle();
  })//nav_click

  $('.mbtn').click(function(){
    $('.mbtn').toggleClass('active')

  })//icon_click

})//ready function
