$(function(){
  $('a').on("click",function(e){
    e.preventDefault();
  });
});

$(document).ready(function(){
  var main_img = $('.thumb_list>li.on>a>img').attr("src");
  var main_alt = $('.thumb_list>li.on>a>img').attr("alt");
  $('.product_img_wrap').html( '<img src='+(main_img)+' alt="'+(main_alt)+'" class="main_img">' );
  // product_img
  $('.thumb_list>li>a').click(function(){
     var num = $('.thumb_list>li>a').index($(this));
     var img_name = $('.thumb_list>li').eq(num).children('a').children('img').attr("src");
     var img_alt = $('.thumb_list>li').eq(num).children('a').children('img').attr("alt");
    $(this).parents('li').siblings().removeClass('on');
    $(this).parents('li').addClass('on');
    // $('.main_img').attr('src','../img/product01_0'+(num + 1)+'.jpg');
    $('.main_img').attr('src',img_name);
    $('.main_img').attr('alt',img_alt);
    return false;
  });
  // product_review
  var swiper = new Swiper(".review_swiper", {

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".review_next",
      prevEl: ".review_prev",
    },
  });


// count
  var count = 0;
  $('.plus').on('click',function(){
      count += 1;
      $(this).siblings('#count_num').val(count)
  })
  $('.minus').on('click',function(){
    if (count<=0) {$('#count_num').val(0)
    }else if (count>0) {
      count -= 1;
      $(this).siblings('#count_num').val(count)
    }
  })
  $('.cencal_btn').on('click',function(){
      $(this).parents('.option_cnt').parents('li').remove();
  })

  //serch_depth
  $('.category_select').change(function(){
      $(this).siblings('.category_selected').html($(this).children("option:selected").text());
  });

})
// page04
$(function(){
  $('.coupon_btn').on("click",function(e){
    window.open("../basket_page/popup.html", "팝업", "top=0, left=0, height=766px, width=861px");
  });

  $('.popup_btn').on("click",function(e){
    self.close();
  });
});
// page05
$(document).ready(function(){
  $('.tbl_btn_wrap').click(function() {
    $(this).toggleClass('off');
    if($(this).hasClass('off')){
      $(this).children('.tbl_btn_txt').text('OFF');
      $(this).attr('title', 'on');
    }else{
      $(this).children('.tbl_btn_txt').text('ON');
      $(this).attr('title', 'off');
    }
  });

  $('.live_tab>li').click(function(){
    var nIndex = $('.live_tab>li').index($(this));
    $('.live_tab>li').removeClass('on');
    $('.live_tab>li').eq(nIndex).addClass('on');
    $('.live_cnt').removeClass('on');
    $('.live_cnt').eq(nIndex).addClass('on');
    return false;
  })
});
// page06
$(document).ready(function(){
  $('.down_btn').click(function(){
      $(this).parents('td').parents('tr').addClass('success');
      $('.success>td>a').text("받기완료");
      $('.success>td>a').attr('title', 'SK pay point 다운받기완료');
      return false;
  })

  $('.term_tab>li').click(function(){
    var nIndex = $('.term_tab>li').index($(this));
    $('.term_tab>li').removeClass('on');
    $('.term_tab>li').eq(nIndex).addClass('on');
    return false;
  })

  $('.pagination_tab>li').click(function(){
    var nIndex = $('.pagination_tab>li').index($(this));
    $('.pagination_tab>li').removeClass('on');
    $('.pagination_tab>li').eq(nIndex).addClass('on');
    return false;
  })
})
