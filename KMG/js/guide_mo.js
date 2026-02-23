let closeGuideModal = () => { };
document.body.style.overflowY = "hidden";

function setupModal(modalSelector, openButtonsSelector) {
    const modal = document.querySelector(modalSelector);
    if (!modal) {
        return;
    }

    const openButtons = document.querySelectorAll(openButtonsSelector);
    const closeButton = modal.querySelector('.close_btn');
    const filter = modal.querySelector('.filter');

    function openModal(e) {
        e.preventDefault();
        modal.classList.add('on');
        document.body.style.overflowY = "hidden";
    }

    function closeModal(e) {
        if (e) e.preventDefault();
        modal.classList.remove('on');
        document.body.style.removeProperty("overflow-y");
    }

    if (modalSelector === '.guide_modal') {
        closeGuideModal = closeModal;
    }

    openButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    if (filter) {
        filter.addEventListener('click', closeModal);
    }
}

setupModal('.guide_modal', '.guide_btn');
setupModal('.gnb_list', '.only_mo .siteMap');
setupModal('.lang_modal', '.only_mo .widget_btn.lang');

function renderSlideContent(slideData, wrapper) {
    wrapper.innerHTML = '';

    const slideIndex = parseInt(slideData.id.replace('slide', '')) - 1;

    for (let i = 1; i <= slideData.count; i++) {
        const imgSrc = `../img/mo/guide/guide_slide_${String(slideIndex + 1).padStart(2, '0')}_${String(i).padStart(2, '0')}.jpg`;
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('guide_img');
        slideDiv.innerHTML = `<img src="${imgSrc}" alt="${slideData.title} ${i}" />`;
        wrapper.appendChild(slideDiv);
    }

    const subEl = document.querySelector('.guide_title span');
    const titleEl = document.querySelector('.guide_title h4');
    const descEl = document.querySelector('.guide_title p');

    if (slideData.count === 1) {
        subEl.style.display = "none";
        titleEl.style.display = "none";
        descEl.style.display = "none";
    } else {
        subEl.style.display = "";
        titleEl.style.display = "";
        descEl.style.display = "";
        subEl.textContent = slideData.sub;
        titleEl.innerHTML = slideData.title.toUpperCase();
        descEl.innerHTML = slideData.desc;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.guide_list');
    const mapBtns = document.querySelectorAll('.map_btn');

    const initialSlideData = guideSlideData.find(s => s.id === 'slide1');
    if (initialSlideData && wrapper) {
        renderSlideContent(initialSlideData, wrapper);
    }

    mapBtns.forEach(btn => {

        btn.addEventListener('click', e => {
            e.preventDefault();

            const slideId = btn.dataset.slide;
            const slideData = guideSlideData.find(s => s.id === slideId);
            if (!slideData || !wrapper) return;

    
            renderSlideContent(slideData, wrapper);

    
            closeGuideModal()
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            header.style.backgroundColor = "transparent";
            header.style.backdropFilter = "blur(0)";
        }else {
            header.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
            header.style.backdropFilter = "blur(0.260vw)";
        }
        
    })
});

