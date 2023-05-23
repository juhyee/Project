$(function () {
    $(".products_box").on({
      mouseenter:function(){
        $(this).children('.can').stop().animate({bottom:"0%",opacity:1},500);
      },
      mouseleave:function(){
        $(this).children('.can').stop().animate({bottom:"-100%",opacity:0})
      }
    })
    $( ".draggable" ).draggable({
      drag: function (event, ui) {
        $('.empty_txt').addClass('ani');
      },
      stop:function(){
        $('.empty_txt').removeClass('ani');
      },
      zIndex: 10000,
      revert: true,
    });  
    
    $( ".right_area > ul" ).droppable({
        zIndex: 10000,
        drop: function( event, ui ) {
          var innerbtn = $('.ui-draggable-dragging');
          innerbtn.parent('li').addClass('focus');
          innerbtn.parent('li').siblings('li').removeClass('focus');
          $('.empty').removeClass('on');
          $(".btn_list li").each(function (index) {
            if ($(this).hasClass('focus')) {
            $('.right_area > ul > li').eq(index).addClass('focus');
            $('.right_area > ul > li').eq(index).siblings('li').removeClass('focus');
            return false;
            }
          })
        } 
    });
    $('.close_btn').on('click', function(){
      $('.popup_wrap').removeClass('focus');
      $('.empty').addClass('on');
      return false;
    })
  });