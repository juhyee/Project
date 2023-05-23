$(document).ready(function () {
  modal();
  menuE();
  headerE()
});
// mo version menu event
function menuE() {
  $(".sitemap_btn").on("click", function () {
    $("#mo_gnb").addClass("on");
    $('html, body').addClass('not_scroll');
    $(".mo_menu").animate({ right: "0" })
  });
    $(".close_btn").on("click", function () {
      $("#mo_gnb").removeClass("on");
      $('html, body').removeClass('not_scroll');
      $(".mo_menu").animate({ right: "-100%" })
    });
}


function modal() {
  $("a.contact").on("click", function (e) {
    $(".contact_modal").addClass('show')
    $('html, body').addClass('not_scroll');
    e.preventDefault();
  });
  $('.contact_modal').on('click', function (e) {
    if (e.target.className == 'filter' || e.target.className == 'modal_btn') {
      $(".contact_modal").removeClass('show')
      $('html, body').removeClass('not_scroll');
    }
    if(e.target.className == 'close'){
      $(".contact_modal").removeClass('show')
      $('html, body').removeClass('not_scroll');
    }
    e.preventDefault();
  })

}

function headerE() {
  var header = $('#header')
  // $(window).on('wheel DOMMouseScroll', function (event) {
  //   let scroll = $(window).scrollTop();
  //   if (scroll > 0) {
  //     header.addClass('fixed')
  //     if (event.originalEvent.wheelDelta >= 0) {
  //       header.addClass('scroll')
  //     } else {
  //       header.removeClass('scroll')
  //     }
  //   } else {
  //     header.removeClass('scroll')
  //     header.removeClass('fixed')
  //   }
  // });

  // $(window).on('scroll', function (event) {
  //   let scroll = $(window).scrollTop();
  //   if (scroll > 0) {
  //     header.addClass('fixed scroll')
    
  //   } else {
  //     header.removeClass('scroll')
  //     header.removeClass('fixed')
  //   }
  // });


  // $(document).on('touchstart', function (e){
  //   ts = e.originalEvent.touches[0].clientY;
  // });

  // $(document).on('touchend', function (e){
  //   var scroll = $(window).scrollTop();
  //   var te = e.originalEvent.changedTouches[0].clientY;

  //   if (scroll > 0){
  //     header.addClass('fixed')
  //     if(ts > te+5){
  //       header.removeClass('scroll')
  //     }else if(ts < te-5){
  //       header.addClass('scroll')
  //     }
  //   } else {
  //     header.removeClass('scroll')
  //     header.removeClass('fixed')
  //   }
  // });
}


//aos script
AOS.init({
  duration: 1300,
});


var container01 = document.getElementById('map01');
    var options = {
      center: new kakao.maps.LatLng(37.409023405734196, 127.09483509625203),
      level: 2,

    };
    var map01 = new kakao.maps.Map(container01, options);

    var points = [
      new kakao.maps.LatLng(37.409023405734196, 127.09483509625203),
    ];
    var bounds = new kakao.maps.LatLngBounds();

    var i, marker;
    for (i = 0; i < points.length; i++) {
      marker = new kakao.maps.Marker({ position: points[i] });
      marker.setMap(map01);
      bounds.extend(points[i]);
    }

    function setBounds() {
      map01.setBounds(bounds);
    }


    var container02 = document.getElementById('map02');
    var options02 = {
      center: new kakao.maps.LatLng(37.47784496609639, 126.95889727910759),
      level: 1
    };

    var map02 = new kakao.maps.Map(container02, options02);

    var points = [
      new kakao.maps.LatLng(37.47784496609639, 126.95889727910759),
    ];
    var bounds = new kakao.maps.LatLngBounds();

    var i, marker;
    for (i = 0; i < points.length; i++) {
      marker = new kakao.maps.Marker({ position: points[i] });
      marker.setMap(map02);
      bounds.extend(points[i]);
    }

    function setBounds() {
      map02.setBounds(bounds);
    }