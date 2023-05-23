$( function() {
    //visual_swiper
    var swiper = new Swiper(".visual_swiper", {
        loop: true,
        speed: 1000,
        autoplay: {delay: 4000},
        allowTouchMove: false,
        touchRatio: 0,
        direction: "vertical",
    });

    //list scroll event
    $(window).scroll(function(){   
        var visualHeight = $(".visual").outerHeight(),
            listHeight = $(".list_wrap").outerHeight(), 
            scTop = $(window).scrollTop();
        if(scTop < visualHeight - 700 || scTop > visualHeight + listHeight - 500) {
            $('.list02 .list_bg').removeClass('active');
        } else if (scTop > visualHeight - 500){
            $('.list02 .list_bg').addClass('active');
        }
    })

    //list mouse event
    $('.list_wrap li.mouse').mouseover(function(){
        $(this).children('.list_bg').removeClass('on');
        $(this).children('.list_info').addClass('on');
    })
    $('.list_wrap li.mouse').mouseleave(function(){
        $(this).children('.list_bg').addClass('on');
        $(this).children('.list_info').removeClass('on');
    })

    // sns_swiper
    var sns_swiper = new Swiper(".sns_swiper", {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        autoplay: {delay: 1000},
    });
    
});