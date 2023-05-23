$("#fullpage").fullpage({
    'verticalCentered': true, // 가운데 정렬 → ie7에선 작동되지 않음
    'scrollOverflow': false,
    'recordHistory': false, // 뒤로가기 설정 (true 기본값)
    'responsiveWidth': 1520, // 해당 크기부터 y 스크롤 
    anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage', '7rdPage', '8rdPage', '9rdPage']
    , afterLoad: function (origin, destination, direction) {
        if (destination.index == 1) {
            document.querySelector('.sec02_img').style.left = 20 + '%';
            document.querySelector('.sec02_img').style.opacity = 1;
        }
        else if (origin && origin.index == 1) {
            document.querySelector('.sec02_img').style.left = 0 + '%';
            document.querySelector('.sec02_img').style.opacity = 0;
        }
        if (destination.index == 2) {
            document.querySelector('.sec03_img.off').style.display = 'block';
            document.querySelector('.sec03_img.on').style.display = 'none';
        }
        else if (origin && origin.index == 2) {
            document.querySelector('.sec03_img.off').style.display = 'block';
            document.querySelector('.sec03_img.on').style.display = 'none';
            document.querySelector('.sec03_click').style.right = 26 + '%';
            document.querySelector('.sec03_click').style.bottom = 22 + '%';
        }
        if (destination.index == 3) {
            document.querySelector('.sec04_img.off').style.display = 'block';
            document.querySelector('.sec04_img.on').style.display = 'none';
        }
        else if (origin && origin.index == 3) {
            document.querySelector('.sec04_img.off').style.display = 'block';
            document.querySelector('.sec04_img.on').style.display = 'none';
            document.querySelector('.sec03_click').style.opacity = 1;
        }
        if (destination.index == 5) {
            document.querySelector('.sec06_img').style.left = 13 + '%';
            document.querySelector('.sec06_img').style.opacity = 1;
        }
        else if (origin && origin.index == 5) {
            document.querySelector('.sec06_img').style.left = 0 + '%';
            document.querySelector('.sec06_img').style.opacity = 0;
        }
        if (destination.index == 6) {
            document.querySelector('.sec07_img').style.width = 36 + '%';
            document.querySelector('.sec07_img').style.opacity = 1;
        }
        else if (origin && origin.index == 6) {
            document.querySelector('.sec07_img').style.width = 27.6 + '%';
            document.querySelector('.sec07_img').style.opacity = 0;
        }
        if (destination.index == 8) {
            document.querySelector('.sec09_img01').style.bottom = 4 + '%';
            document.querySelector('.sec09_img02').style.bottom = 4 + '%';
            document.querySelector('.sec09_img03').style.bottom = 4 + '%';

        }
        else if (origin && origin.index == 8) {
            document.querySelector('.sec09_img01').style.bottom = -100 + '%';
            document.querySelector('.sec09_img02').style.bottom = -100 + '%';
            document.querySelector('.sec09_img03').style.bottom = -100 + '%';
        }
    }
});
$(function () {
    //section3
    $(".click .click_on").animate({ opacity: 1 }, 800, function loop_1() {
        $(".click .click_on").animate({ opacity: 0 }, 800)
        $(".click .click_on").animate({ opacity: 1 }, 800, loop_1)
    })

    $(".sec03_img.off").click(function () {
        $(".sec03_img.on").fadeIn();
        $(this).fadeOut();
        $(".sec03_click").animate({ right: "60%", bottom: "-20%" }, 700)
    })

    //section4
    $(".sec04_img.off").click(function () {
        $(".sec04_img.on").fadeIn();
        $(this).fadeOut();
        $(".sec04_click").animate({ opacity: 0 }, 400)
    })
})