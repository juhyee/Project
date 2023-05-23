
$(document).ready(function(){
  // PAGE01
  $('.menu_btn').click( function() {
    $('.gnb_wrap').show();
  })
  $('.close_btn').click( function() {
    $('.gnb_wrap').hide();
  })
   $('.sub_list>ul').hide();
   $('.sub_list.active>ul').show();

  $('.sub_list').click( function() {
    if ($(this).hasClass('active')) {
      $(this).children('ul').slideUp(300);
      $(this).removeClass('active');
    } else {
      $(this).children('ul').slideDown(300);
      $(this).addClass('active');
    }
  })

  $('.tab_list>li').click(function(){
    var nIndex = $('.tab_list>li').index($(this));
    $('.tab_list>li').removeClass('on');
    $('.tab_list>li').eq(nIndex).addClass('on');
    $('.career_info_wrap01').removeClass('on');
    $('.career_info_wrap01').eq(nIndex).addClass('on');
    return false;
  })
})
