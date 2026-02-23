document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.header');
  const visual = document.querySelector(".sec_visual");
  const txt = document.querySelector(".visual_txt");
  const h3 = txt.querySelector("h3");
  const p = txt.querySelector("p");
  const topBtn = document.querySelector('.top_btn');
  const logo = document.querySelector('.logo.only_mo')
  let scrollPosition = 0;
  const delta = 5;

  function scrollHeader() {
    const headerH = header.offsetHeight;

    window.addEventListener('scroll', () => {
      const currentScrollTop = window.scrollY;
      const visualH = visual.clientHeight;

      if (currentScrollTop <= visualH + headerH) {
        header.style.backgroundColor = "transparent";
        header.style.backdropFilter = "blur(0)";
      } else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        header.style.backdropFilter = "blur(0.260vw)";
      }


      if (Math.abs(scrollPosition - currentScrollTop) > delta) {
        if (currentScrollTop > scrollPosition && currentScrollTop > headerH) {
          header.classList.remove('fixed');
          header.classList.add('scroll');
          header.classList.remove('once');
        } else if (currentScrollTop <= headerH) {
          header.classList.remove('fixed', 'scroll');
        } else if (currentScrollTop + window.innerHeight < document.body.offsetHeight) {
          header.classList.add('fixed');
          header.classList.remove('once');
        }
        scrollPosition = currentScrollTop;
      }
    });


    header.addEventListener("mouseenter", () => {
      if (window.scrollY <= visual.clientHeight + header.offsetHeight) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        header.style.backdropFilter = "blur(0.260vw)";
        if (!header.classList.contains('fixed') && !header.classList.contains('scroll')) {
          header.style.backgroundColor = "transparent";
          header.style.backdropFilter = "blur(0)";
        } else {
          header.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          header.style.backdropFilter = "blur(0.260vw)";
        }
      }
    });
    header.addEventListener("mouseleave", () => {
      header.style.backgroundColor = "transparent";
      header.style.backdropFilter = "blur(0)";
    });
  }
  const langButton = document.querySelector('.only_pc .widget_lang .widget_btn');
  const langList = document.querySelector('.only_pc .widget_lang .lang_list');

  langButton.addEventListener('click', function (event) {
    event.preventDefault();
    langList.classList.toggle('show');
  });

  scrollHeader();


  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  let mm = gsap.matchMedia();
  mm.add({
    isDesktop: "(min-width: 769px)",
    isMobile: "(max-width: 768px)"
  }, (context) => {
    let { isDesktop, isMobile } = context.conditions;

    if (isDesktop) {
      ScrollTrigger.create({
        trigger: visual,
        start: "top top",
        onEnter: () => {
          gsap.to(txt, { color: "#fff", scale: 1, duration: 0.5 });
          gsap.to(h3, { color: "#fff", fontSize: "4.167vw", duration: 0.5 });
          gsap.to(p, { color: "#fff", fontSize: "1.354vw", duration: 0.5 });
          gsap.to(".swiper-visual", { clipPath: "circle(100vw at 85.729vw 50%)", ease: "power2.out" });
          header.classList.add("once");
        },
        onUpdate: () => {
          if (window.scrollY === 0) {
            gsap.to(txt, { color: "#12284d", scale: 1, duration: 0.5 });
            gsap.to(h3, { color: "#12284d", fontSize: "5.729vw", duration: 0.5 });
            gsap.to(p, { color: "#12284d", fontSize: "1.458vw", duration: 0.5 });
            gsap.to(".swiper-visual", { clipPath: "circle(9.0625vw at 85.729vw 50%)", ease: "power2.out" });
            header.style.backgroundColor = "transparent";
            header.style.backdropFilter = "blur(0)";
            header.classList.remove("once");
          }
        }
      });
    }

    if (isMobile) {
      gsap.to(txt, { color: "#fff", scale: 1, duration: 0.5 });
      gsap.to(h3, { color: "#fff", fontSize: "7.125vw", duration: 0.5 });
      gsap.to(p, { color: "#fff", fontSize: "3.308vw", duration: 0.5 });
      gsap.to(".logo-wrap", {
        width: "19.799vw",
        height: "9.160vw",
        duration: 0.5,
        // ease: "power2.out"
      });
      gsap.to(".logo-color", {
        opacity: 0,
        duration: 0.5
      });
      gsap.to(".logo-white", {
        opacity: 1,
        duration: 0.5
      });
      gsap.to(".swiper-visual", {
        // 216.794vw -> 100% 로 변경
        clipPath: "circle(130% at 75.573vw calc(100dvh - 3.521dvh - 16.539vw))",
        // ease: "power2.out",
        duration: 1
      });
      setTimeout(() => {
        header.classList.add("once");
      }, 500);

    }
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: visual,
      start: "top top",
      end: "+=100",
      scrub: true,
      pin: true
    }
  });


  const wrapperPC = document.querySelector('.swiper-visual.only_pc .swiper-wrapper');
  const wrapperMO_Big = document.querySelector('.swiper-visual.only_mo .swiper-wrapper');
  const wrapperMO_Small = document.querySelector('.swiper-visual-sm.only_mo .swiper-wrapper');

  const slidesPC = Array.from(wrapperPC.children);
  const slidesMO_Big = Array.from(wrapperMO_Big.children);
  const slidesMO_Small = Array.from(wrapperMO_Small.children);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let indices = Array.from({ length: slidesPC.length }, (_, i) => i);

  shuffleArray(indices);

  wrapperPC.innerHTML = "";
  wrapperMO_Big.innerHTML = "";
  wrapperMO_Small.innerHTML = "";


  indices.forEach(index => {
    wrapperPC.appendChild(slidesPC[index]);
    wrapperMO_Big.appendChild(slidesMO_Big[index]);
    wrapperMO_Small.appendChild(slidesMO_Small[index]);
  });

  const swiperVisual = new Swiper(".swiper-visual", {
    loop: true,
    spaceBetween: 0,
    speed: 2000,
    autoplay: { delay: 1500, disableOnInteraction: false },
    effect: "fade"
  });

  const swiperVisualSm = new Swiper(".swiper-visual-sm", {
    loop: true,
    spaceBetween: 0,
    speed: 2000,
    autoplay: { delay: 1500, disableOnInteraction: false },
    effect: "fade"
  });


  const fakeCursor = document.querySelector('.fake_cursor');
  const fakeCursorText = fakeCursor.querySelector(".cursor_txt");
  const title = document.querySelector('.vision_title');
  const visionListPc = document.querySelector('.vision_list.pc');

  if (visionListPc && fakeCursor) {
    visionListPc.addEventListener('mouseenter', () => {
      fakeCursor.style.opacity = "1";
    });
    visionListPc.addEventListener('mouseleave', () => {
      fakeCursor.style.opacity = "0";
    });
    visionListPc.addEventListener('mousemove', (e) => {
      fakeCursor.style.left = e.clientX + 'px';
      fakeCursor.style.top = e.clientY + 'px';
    });
  }

  function updateFakeCursor(index, currentActiveIndex) {
    if (currentActiveIndex === index) {
      fakeCursor.classList.add('close');
      fakeCursor.classList.remove('view');
      fakeCursorText.innerText = "Close";
    } else {
      fakeCursor.classList.add('view');
      fakeCursor.classList.remove('close');
      fakeCursorText.innerText = "View";
    }
  }

  function initVisionList(selector) {
    const container = document.querySelector(selector);

    if (!container) return;

    const items = container.querySelectorAll('.list_item');
    const titleElement = typeof title !== 'undefined' ? title : null;

    let activeIndex = null;
    let isAnimating = false;

    function resetItems() {
      items.forEach(item => {
        const current = item.querySelector('.current');
        const next = item.querySelector('.next');
        const txtBox = item.querySelector('.txtBox');
        const txtBg = item.querySelector('.txtBg');
        const dim = item.querySelector('.item_dim');

        item.style.flex = "1";

        if (container.classList.contains("mo")) {
          container.style.height = "150.64vw";
        }

        if (txtBox) {
          txtBox.style.opacity = 1;
          txtBox.style.transform = "scale(1)";
        }
        if (txtBg) {
          txtBg.style.opacity = 0;
          txtBg.style.left = "-100vw";
        }
        if (container.classList.contains("mo")) {
          if (titleElement) {
            titleElement.style.top = "24.94vw";
            titleElement.style.opacity = 1;
          }
        } else {
          if (titleElement) {
            titleElement.style.top = "6.094vw";
            titleElement.style.opacity = 1;
          }
        }


        if (dim) {
          dim.style.display = "block";
        }

        if (current) current.src = current.dataset.original;
        if (next) {
          next.src = current.dataset.original;
          next.style.opacity = 0;
        }
      });

      activeIndex = null;
      if (typeof updateFakeCursor === 'function') updateFakeCursor(-1, null);
    }

    function activateItem(index) {
      items.forEach((item, i) => {
        const current = item.querySelector('.current');
        const next = item.querySelector('.next');
        const txtBox = item.querySelector('.txtBox');
        const txtBg = item.querySelector('.txtBg');
        const dim = item.querySelector('.item_dim');

        if (i === index) {
          item.style.flex = "3";

          if (container.classList.contains("mo")) {
            container.style.height = "216.79vw";
          }
          if (txtBox) txtBox.style.opacity = 0;
          if (txtBg) {
            txtBg.style.left = "5.208vw";
            txtBg.style.opacity = 1;
          }

          if (titleElement) {
            titleElement.style.top = "-15.625vw";
            titleElement.style.opacity = 0;
          }

          if (dim) dim.style.display = "none";

          if (next && current) {
            next.src = current.dataset.large;
            next.style.opacity = 1;
            setTimeout(() => {
              current.src = next.src;
              next.style.opacity = 0;
            }, 0);
          }
        } else {
          item.style.flex = "0";
          if (txtBox) {
            txtBox.style.opacity = 0;
            txtBox.style.transform = "scale(0.8)";
          }
          if (current) current.style.transform = "scale(1)";
        }
      });

      activeIndex = index;
      if (typeof updateFakeCursor === 'function') updateFakeCursor(index, index);
    }

    items.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        if (typeof fakeCursor !== 'undefined') {
          fakeCursor.classList.add('on');
        }
        if (typeof updateFakeCursor === 'function') updateFakeCursor(index, activeIndex);
      });
      item.addEventListener('mouseleave', () => {
        if (typeof fakeCursor !== 'undefined') {
          fakeCursor.classList.remove('on');
        }
      });
      item.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;
        if (activeIndex === index) {
          resetItems();
          setTimeout(() => isAnimating = false, 0);
          return;
        }
        activateItem(index);
        setTimeout(() => isAnimating = false, 0);
      });
    });
  }
  initVisionList('.vision_list.pc');
  initVisionList('.vision_list.mo');


  window.addEventListener("scroll", () => {
    const targetSections = document.querySelectorAll(".dark-section");
    const langModal = document.querySelector(".lang_modal")
    const closeBtn = document.querySelector(".preparing_modal .close_btn")
    headerHeight = header.offsetHeight;
    if (targetSections.length > 0) {
      let isIntersectingAny = false;

      for (const section of targetSections) {
        const rect = section.getBoundingClientRect();
        const isIntersecting = rect.top <= headerHeight && rect.bottom > headerHeight;

        if (isIntersecting) {
          isIntersectingAny = true;
          break;
        }
      }

      if (isIntersectingAny) {
        langModal.classList.add("bg-dark");
        closeBtn.classList.add("bg-dark");
      } else {
        langModal.classList.remove("bg-dark");
        closeBtn.classList.remove("bg-dark");
      }
    }
  });

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

  setupModal('.study_modal', '.study_btn');
  setupModal('.preparing_modal', '.preparing_modal_btn');
  setupModal('.siteMap_modal', '.only_pc .siteMap');
  setupModal('.gnb_list', '.only_mo .siteMap');
  setupModal('.lang_modal', '.only_mo .widget_btn.lang');


  topBtn.addEventListener('click', e => {
    e.preventDefault();
    gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power2.inOut" });
  });
  AOS.init({ duration: 1000, offset: 50, easing: 'ease-out' });
});