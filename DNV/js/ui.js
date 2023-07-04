$(function() {
  //quick
  var asidePos = parseInt($(".aside").css("top"));
  var asideBtn = $(".btn-aside")
  var header = $(".header")
  $(window).scroll(function(){
      var scT = $(window).scrollTop();
      var visaulH = $('.secSubVisual').height();
      var conH = $('.container').height();
      var asideH = $('.aside').height();
      var footerH = $('.footer').height();
      if(visaulH  > scT){
        $(".aside").stop().animate({'top':asidePos + "px"},400);
        // header.removeClass('isScroll')
      }else if(conH - asideH < scT){
        $(".aside").stop().animate({'top': conH - asideH - 100 + 'px'},400);
      }else{
        $(".aside").stop().animate({'top':scT + 40  + "px"},400);
        header.addClass('isScroll')
      }
      // $('#header').css({left: -$(window).scrollLeft()});
  });
  asideBtn.on('click', function(){
    $("body, html").animate({ scrollTop: 0 }, "slow");
  })

});


var swiperPagination = new Swiper(".swiper_visual", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperPagination = new Swiper(".swiperTumd", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});