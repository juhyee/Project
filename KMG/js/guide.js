document.addEventListener("DOMContentLoaded", () => {
    imageMapResize();

    const maps = document.querySelectorAll('.map');
    const mapZoom = document.querySelector('.map_btn_zoom');
    const mapBtns = document.querySelectorAll('.map_btn');
    const slide = document.querySelector('.mapSlide');
    const swiperEl = document.querySelector('.mapSlide_swiper');
    const swiperWrapper = swiperEl.querySelector('.swiper-wrapper');
    const slideClose = document.querySelector('.mapSlide_close');

    let swiper;

    // 지도 확대/축소 버튼
    mapZoom.addEventListener('click', (event) => {
        event.preventDefault();
        maps.forEach(map => map.classList.toggle('hide'));
        mapZoom.classList.toggle('out');
        imageMapResize();
    });

    mapBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();

            const slideId = btn.dataset.slide;
            const slideData = guideSlideData.find(s => s.id === slideId);
            if (!slideData) return;

            const slideIndex = parseInt(slideId.replace('slide', '')) - 1;

            // Swiper 초기화
            if (swiper) swiper.destroy(true, true);
            swiperWrapper.innerHTML = '';

            // 이미지 시퀀스 생성
            for (let i = 1; i <= slideData.count; i++) {
                const imgSrc = `../img/guide/guide_slide_${String(slideIndex + 1).padStart(2, '0')}_${String(i).padStart(2, '0')}.jpg`;
                const slideDiv = document.createElement('div');
                slideDiv.classList.add('swiper-slide');
                slideDiv.innerHTML = `<img src="${imgSrc}" alt="${slideData.title} ${i}" />`;
                swiperWrapper.appendChild(slideDiv);
            }

            // Swiper 생성
            swiper = new Swiper('.mapSlide_swiper', {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            if (slideData.count === 1) {
                document.querySelector('.mapSlide_txt span').style.display = "none";
                document.querySelector('.mapSlide_txt h4').style.display = "none";
                document.querySelector('.mapSlide_txt p').style.display = "none";
                document.querySelector('.mapSlide_txt .mapSlide_close').classList.add("black");
            } else {
                document.querySelector('.mapSlide_txt span').style.display = "";
                document.querySelector('.mapSlide_txt h4').style.display = "";
                document.querySelector('.mapSlide_txt p').style.display = "";
                document.querySelector('.mapSlide_txt .mapSlide_close').classList.remove("black");
                document.querySelector('.mapSlide_txt span').textContent = slideData.sub;
                document.querySelector('.mapSlide_txt h4').innerHTML = slideData.title.toUpperCase();
                document.querySelector('.mapSlide_txt p').innerHTML = slideData.desc;
            }


            // 슬라이드 보이기
            slide.classList.remove('hide');
        });
    });

    // 슬라이드 닫기 버튼
    slideClose.addEventListener('click', e => {
        e.preventDefault();
        slide.classList.add('hide');
        if (swiper) swiper.destroy(true, true);
    });


    const logo = document.querySelector(".logo");
    logo.addEventListener('click', () => {
        // 부모(index.html)에게 fullscreen 종료 요청
        window.parent.postMessage({ action: 'exitFullscreen' }, '*');
    });

});

