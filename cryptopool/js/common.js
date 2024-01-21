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



  const links = document.querySelectorAll('#header .header_inner a'); 
  
  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      if (link.hash !== "") {
        event.preventDefault();

        var hash = link.hash;
        var targetElement = document.querySelector(hash);

        if (targetElement) {
          var startPosition = window.pageYOffset;
          var targetPosition = targetElement.offsetTop;
          var distance = targetPosition - startPosition;
          var duration = 800;
          var startTime = null;

          function animate(currentTime) {
            if (startTime === null) {
              startTime = currentTime;
            }

            var elapsedTime = currentTime - startTime;
            var scrollPosition = easeInOutCubic(elapsedTime, startPosition, distance, duration);
            window.scrollTo(0, scrollPosition);

            if (elapsedTime < duration) {
              requestAnimationFrame(animate);
            } else {
              window.location.hash = hash;
            }
          }

          function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
          }

          requestAnimationFrame(animate);
        }
      }
    });
  });


//aos script
AOS.init({
  duration: 1300,
});