window.addEventListener("load", () => {
    function topFixedHeaderAnimated(offset = 30, threshold = 5) {
        const langButton = document.querySelector('.widget_lang .widget_btn');
        const langList = document.querySelector('.widget_lang .lang_list');
        const header = document.querySelector(".header");
        const nav = document.querySelector(".topMenu");
        const targetSections = document.querySelectorAll(".dark-section");
        const closeBtn = document.querySelector(".preparing_modal .close_btn")
        let headerHeight = header.offsetHeight;
        let lastScrollY = window.scrollY;
        let wasScrollingDown = null;
        let ticking = false;


        header.style.transition = "none";
        nav.style.transition = "none";
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                header.style.transition = "";
                nav.style.transition = "";
            });
        });

        function updateHeader(scrollY) {
            headerHeight = header.offsetHeight;
            const langModal = document.querySelector(".lang_modal")
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
                    header.classList.add("header-bg-dark");
                    nav.classList.add("header-bg-dark");
                    langModal.classList.add("bg-dark");
                    closeBtn.classList.add("bg-dark");
                } else {
                    header.classList.remove("header-bg-dark");
                    nav.classList.remove("header-bg-dark");
                    langModal.classList.remove("bg-dark");
                    closeBtn.classList.remove("bg-dark");
                }
            }

            const delta = scrollY - lastScrollY;
            let scrollingDown = false;
            let scrollingUp = false;

            if (delta > threshold) {
                scrollingDown = true;
            } else if (delta < -threshold) {
                scrollingUp = true;
            }

            if (scrollY > headerHeight) {
                header.classList.add("top-fixed");
                nav.classList.add("top-fixed");

                if (scrollingDown && wasScrollingDown !== true) {
                    header.classList.add("scroll-down");
                    header.classList.remove("scroll-up");
                    nav.classList.add("scroll-down");
                    nav.classList.remove("scroll-up");
                    langList.classList.remove("show")
                    wasScrollingDown = true;
                }
                else if (scrollingUp && wasScrollingDown !== false) {
                    header.classList.remove("scroll-down");
                    header.classList.add("scroll-up");
                    nav.classList.remove("scroll-down");
                    nav.classList.add("scroll-up");
                    wasScrollingDown = false;
                }
            }
            else if (scrollY > 0 && scrollY <= headerHeight) {
                header.classList.remove("scroll-up", "scroll-down", "top-fixed");
                nav.classList.remove("scroll-up", "scroll-down", "top-fixed");
                wasScrollingDown = null;
            }
            else if (scrollY <= 0) {
                header.classList.remove("scroll-up", "scroll-down", "top-fixed");
                nav.classList.remove("scroll-up", "scroll-down", "top-fixed");
                wasScrollingDown = null;
            }

            lastScrollY = scrollY;
        }
        function onScroll() {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    updateHeader(window.scrollY);
                    ticking = false;
                });
            }
        }

        langButton.addEventListener('click', function (event) {
            event.preventDefault();

            langList.classList.toggle('show');
        });

        window.addEventListener("scroll", onScroll);
        updateHeader(window.scrollY);
    }
    topFixedHeaderAnimated();



    gsap.registerPlugin(ScrollTrigger);

    function splitTextWithBlur(el) {
        el.innerHTML = el.textContent.split("").map(c => `
      <span class="char">
        ${c}
        <span class="char-blur">${c}</span>
      </span>`).join("");
        return el.querySelectorAll(".char");
    }

    
    gsap.registerPlugin(ScrollTrigger);

    // 텍스트 분리 함수 (그대로 유지)
    function splitTextWithBlur(el) {
        if (!el) return [];
        el.innerHTML = el.textContent.split("").map(c => `
    <span class="char">
      ${c}
      <span class="char-blur">${c}</span>
    </span>`).join("");
        return el.querySelectorAll(".char");
    }

    // 1. 모든 요소를 리스트로 가져옵니다.
    const topLines = document.querySelectorAll(".line-top");
    const bottomLines = document.querySelectorAll(".line-bottom");
    const topExtras = document.querySelectorAll(".desc_txt");
    const bottomExtras = document.querySelectorAll(".sub_txt");

    // 2. 메인 기준이 되는 topLines를 기준으로 반복문을 실행합니다.
    topLines.forEach((elTop, i) => {

        // 3. 현재 순서(i)에 맞는 짝꿍 요소들을 찾습니다.
        const elBottom = bottomLines[i];
        const elTopExtra = topExtras[i];
        const elBottomExtra = bottomExtras[i];

        // 4. 텍스트 분리 실행
        const topChars = splitTextWithBlur(elTop);
        // elBottom이 존재할 때만 분리
        const bottomChars = elBottom ? splitTextWithBlur(elBottom) : [];

        // 5. 트리거 설정
        // .sec_visual이 감싸고 있다면 그것을 트리거로, 아니라면 top 라인 자체를 트리거로 사용
        const triggerEl = elTop.closest(".sec_visual") || elTop;

        // 6. 개별 타임라인 생성
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerEl,
                start: "top 80%",
                toggleActions: "restart reset restart reset"
            }
        });

        // 7. 애니메이션 조립
        // (각 요소가 실제로 존재할 때만 fromTo를 추가하도록 안전 장치 추가)

        // Top Line
        tl.fromTo(elTop,
            { opacity: 0, x: "30%" },
            { opacity: 1, x: "0%", duration: 3, ease: "power1.out" },
            "<"
        ).fromTo(topChars,
            { x: "-30%", letterSpacing: "0.8em" },
            { x: "0%", letterSpacing: "0em", duration: 2.3, ease: "power1.out" },
            "<"
        );

        // Bottom Line
        if (elBottom) {
            tl.fromTo(elBottom,
                { opacity: 0, x: "-30%" },
                { opacity: 1, x: "0%", duration: 3, ease: "power1.out" },
                "<"
            ).fromTo(bottomChars,
                { x: "30%", letterSpacing: "0.8em" },
                { x: "0%", letterSpacing: "0em", duration: 2.3, ease: "power1.out" },
                "<"
            );
        }

        // Top Extra (.desc_txt)
        if (elTopExtra) {
            tl.fromTo(elTopExtra,
                { opacity: 0, letterSpacing: "0.1em" },
                { opacity: 1, letterSpacing: "0em", duration: 2.3, ease: "power1.out" },
                "<"
            );
        }

        // Bottom Extra (.sub_txt)
        if (elBottomExtra) {
            tl.fromTo(elBottomExtra,
                { opacity: 0, letterSpacing: "0.1em" },
                { opacity: 1, letterSpacing: "0em", duration: 2.3, ease: "power1.out" },
                "<"
            );
        }
    });


    document.querySelectorAll('.topMenu_item a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();

                gsap.to(window, {
                    duration: 1,
                    scrollTo: href,
                    ease: "power3.out"
                });
            }
        });
    });
    
    
    // const preparingmodal = document.querySelector('.preparing_modal');
    // if (preparingmodal){
    //     const preparingButtons = document.querySelectorAll('.preparing_modal_btn');
    //     const preparingFilter = preparingmodal.querySelector('.filter');
    //     const preparingCloseButton = preparingmodal.querySelector('.close_btn');

    //     function openPopup(e) {
    //         e.preventDefault();
    //         preparingmodal.classList.add('show-modal');
    //         document.body.style.overflow = "hidden";
    //     }

    //     function closePopup(e) {
    //         e.preventDefault();
    //         preparingmodal.classList.remove('show-modal');
    //         document.body.style.overflowY = "auto";
    //     }

    //     preparingButtons.forEach(function (button) {
    //         button.addEventListener('click', openPopup);
    //     });

    //     preparingCloseButton.addEventListener('click', closePopup);
    //     preparingFilter.addEventListener('click', closePopup);

    // }

    function setupModal(modalSelector, openButtonsSelector) {
        const modal = document.querySelector(modalSelector);
        if (!modal) {
            return;
        }

        const openButtons = document.querySelectorAll(openButtonsSelector);
        const closeButton = modal.querySelector('.close_btn');
        const filter = modal.querySelector('.filter');
        const siteMapLink = modal.querySelectorAll('.siteMap_list a');
        const gnbLink = modal.querySelectorAll('.gnb_dep1 a');
        // 공통으로 사용하는 모달 닫기 로직 (이벤트 처리 없음)
        function removeModalClass() {
            modal.classList.remove('on');
            if (modal.classList.contains("modal")) {
                document.body.style.overflowX = "hidden";
            }
            document.body.style.overflowY = "auto";
        }

        function openModal(e) {
            e.preventDefault();
            modal.classList.add('on');
            if (modal.classList.contains("modal")) {
                document.body.style.overflowX = "hidden";
                document.body.style.overflowY = "hidden";
            }
        }

        // 1. 닫기 버튼용 함수 (기본 동작 막음)
        function closeModal(e) {
            e.preventDefault(); // 버튼이나 배경 클릭 시에는 # 이동 등을 막습니다.
            removeModalClass();
        }

        // 2. 링크용 함수 (기본 동작 허용 - 이동해야 하므로 e.preventDefault() 없음)
        function closeLink() {
            // e.preventDefault()를 제거하여 앵커 이동을 허용합니다.
            removeModalClass();
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

        if (siteMapLink) {
            siteMapLink.forEach(link => {
                // 여기서는 closeModal 대신 closeLink를 사용합니다.
                link.addEventListener('click', closeLink);
            });
        }
        if (gnbLink) {
            gnbLink.forEach(link => {
                // 여기서는 closeModal 대신 closeLink를 사용합니다.
                link.addEventListener('click', closeLink);
            });
        }
    }

    setupModal('.preparing_modal', '.preparing_modal_btn');
    setupModal('.siteMap_modal', '.only_pc .siteMap');
    setupModal('.gnb_list', '.only_mo .siteMap'); 
    setupModal('.lang_modal', '.only_mo .widget_btn.lang');

    const topBtn = document.querySelector('.top_btn');
    topBtn.addEventListener('click', e => {
        e.preventDefault();
        gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power2.inOut" });
    });
    AOS.init({ duration: 1000, offset: 50, easing: 'ease-out' });
});