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
                    closeBtn.classList.add("bg-dark");
                } else {
                    header.classList.remove("header-bg-dark");
                    nav.classList.remove("header-bg-dark");
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
})