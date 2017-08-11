export default function () {
  

  jQuery(document).ready(() => {

    $('.form-create').on('input keyup', function () {
    var value = $( this ).find('.card-create').val();
    console.log(value);
      if(value.length > 5){
        console.log($( this ).val().length);
        $(this).find('.form-create_check').css("display" , "inline-block");
        $(this).find('.form-create_cencel').css("display" , "inline-block");
      }else{
        $(this).find('.form-create_check').css("display" , "none");
        $(this).find('.form-create_cencel').css("display" , "none");
      }
      });

      $('.nav .nav-toggle').click(()=>{
        var nav = $('.nav');
        var holder = $('.holder');
        var navTgle = $('.nav-toggle');
        if(parseInt($(window).width(),10) < 1440){
          if(parseInt($('.nav').css('width'),10) !=255){
            nav.css('width','255px');
            // holder.css("margin-left" , "271px");
            navTgle.find('i').css("display" , "inline-block");
            nav.find('h2 > a').css("display" , "inline-block");
            nav.find('ul  li').css("margin-left" , "0px");
            nav.find('ul  span').css("display" , "inline-block");
          }else {
            nav.css('width','54px');
            // holder.css("margin-left" , "71px");
            navTgle.find('i').css("display" , "none");
            nav.find('h2 > a').css("display" , "none");
            nav.find('ul  li').css("margin-left" , "-8px");
            nav.find('ul  span').css("display" , "none");
          }
        }else{
          return;
        }
      })
      $('.nav-md .nav-toggle').click(()=>{
        var nav = $('.nav-md').find('ul').css('display');
        var navTgle = $('.nav-toggle');
        if(nav != 'none'){
            $('.nav-md').find('ul').css("display" , "none");
            $('.nav-md').css("height" , "0px");
            navTgle.find('i').css("display" , "none");
            $('#header').css("height" , "57px");
            $('#header .title').css("left" , "60px");
            $('.holder').css("height" , "calc(100vh - 57px)");
          }else {
            $('.nav-md').find('ul').css("display" , "flex");
            $('.nav-md').css("height" , "38px");
            navTgle.find('i').css("display" , "inline-block");
            $('#header').css("height" , "67px");
            $('#header .title').css("left" , "71px");
            $('.holder').css("height" , "calc(100vh - 105px)");
          }
      })
  });
}