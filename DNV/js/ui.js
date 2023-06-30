$(function() {
  //quick
  var asidePos = parseInt($(".aside").css("top"));
  var asideBtn = $(".btn_aside")

  $(window).scroll(function(){
      var scT = $(window).scrollTop();
      // var conH = $(window).height();

      if(scT === 0){
        $(".aside").stop().animate({'top':scT + asidePos + "px"},600);
      }
      else{
        $(".aside").stop().animate({'top':scT + asidePos + "px"},600);
      }

  });

  asideBtn.on('click', function(){
    $("body, html").animate({ scrollTop: 0 }, "slow");
  })

});


var swiperPagination = new Swiper(".swiper_visual", {
  pagination: {
    el: ".swiper-pagination",
  },
});