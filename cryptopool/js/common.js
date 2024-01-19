let isScroll; //스크롤 상태 체크
let scrollPosition = 0; //스크롤 위치
const delta = 5; // 스크롤 감지 시작 위치
const header = document.querySelector('.header') // scroll element
const headerH = header.offsetHeight;

window.onscroll = function () {
  isScroll = true;
};

setInterval(function () {
  if (isScroll) {
    scrollCheck();
    isScroll = false;
  }
}, 250);

function scrollCheck() {
  var currentScrollTop = window.scrollY;
  if (Math.abs(scrollPosition - currentScrollTop) <= delta) {
    return;
  }
  if (currentScrollTop > scrollPosition && currentScrollTop > headerH) {
    header.classList.remove('fixed');
    header.classList.remove('scroll');
  } else if (currentScrollTop <= headerH) {
    header.classList.remove('fixed');
  } else {
    if (currentScrollTop + window.innerHeight < document.body.offsetHeight) {
      header.classList.add('scroll');
      header.classList.add('fixed');
    }
  }
  scrollPosition = currentScrollTop;
}


//aos script
AOS.init({
  duration: 1300,
});