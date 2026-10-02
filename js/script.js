// ==========================================================

// MMATHARI PARTNERS - MAIN JAVASCRIPT

// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================================================

    // MOBILE MENU

    // ======================================================

    const menuToggle = document.querySelector(".menu-toggle");

    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            menuToggle.classList.toggle("active");

        });

        // Close mobile menu when a navigation link is clicked

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

            });

        });

    }

    // ======================================================

    // STICKY HEADER

    // ======================================================

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }

    // ======================================================

    // ACTIVE NAVIGATION LINK

    // ======================================================

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navigationLinks = document.querySelectorAll(

        ".nav-menu a, .main-nav a"

    );

    navigationLinks.forEach(function (link) {

        const href = link.getAttribute("href");

        if (!href) {

            return;

        }

        const linkPage = href.split("#")[0].split("/").pop();

        if (

            linkPage === currentPage ||

            (currentPage === "" && linkPage === "index.html")

        ) {

            link.classList.add("active");

        }

    });

    // ======================================================

    // SCROLL TO TOP

    // ======================================================

    const scrollTopButton = document.querySelector(

        ".scroll-to-top, #scrollToTop"

    );

    if (scrollTopButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {

                scrollTopButton.classList.add("show");

                scrollTopButton.classList.add("visible");

            } else {

                scrollTopButton.classList.remove("show");

                scrollTopButton.classList.remove("visible");

            }

        });

        scrollTopButton.addEventListener("click", function (event) {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    // ======================================================

    // REVEAL ANIMATIONS

    // ======================================================

    const revealElements = document.querySelectorAll(

        ".reveal, .fade-in, .slide-up"

    );

    if ("IntersectionObserver" in window && revealElements.length > 0) {

        const revealObserver = new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {

                threshold: 0.15

            }

        );

        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    }

    // ======================================================

    // FORM VALIDATION

    // ======================================================

    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {

            let valid = true;

            const requiredFields = form.querySelectorAll(

                "input[required], textarea[required], select[required]"

            );

            requiredFields.forEach(function (field) {

                if (!field.value.trim()) {

                    valid = false;

                    field.classList.add("error");

                } else {

                    field.classList.remove("error");

                }

            });

            const emailFields = form.querySelectorAll(

                'input[type="email"]'

            );

            emailFields.forEach(function (field) {

                if (field.value.trim() !== "") {

                    const emailPattern =

                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    if (!emailPattern.test(field.value.trim())) {

                        valid = false;

                        field.classList.add("error");

                    } else {

                        field.classList.remove("error");

                    }

                }

            });

            if (!valid) {

                event.preventDefault();

            }

        });

    });

    // ======================================================

    // READ MORE / READ LESS

    // ======================================================

    const readMoreButtons = document.querySelectorAll(

        ".read-more-btn, .read-more"

    );

    readMoreButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId = button.getAttribute("data-target");

            let target = null;

            if (targetId) {

                target = document.getElementById(targetId);

            }

            if (!target) {

                target = button.previousElementSibling;

            }

            if (!target) {

                return;

            }

            const isHidden =

                target.style.display === "none" ||

                !target.classList.contains("expanded");

            if (isHidden) {

                target.style.display = "block";

                target.classList.add("expanded");

                button.textContent = "Read Less";

            } else {

                target.style.display = "none";

                target.classList.remove("expanded");

                button.textContent = "Read More";

            }

        });

    });

    // ======================================================

    // TEAM SECTION NAVIGATION

    // ======================================================

    const teamSectionLinks = document.querySelectorAll(

        'a[href^="team.html#"], a[href^="#"]'

    );

    teamSectionLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const href = link.getAttribute("href");

            if (!href || href === "#") {

                return;

            }

            const hash = href.includes("#")

                ? href.substring(href.indexOf("#"))

                : "";

            if (!hash) {

                return;

            }

            const target = document.querySelector(hash);

            if (target) {

                setTimeout(function () {

                    const headerHeight = header

                        ? header.offsetHeight

                        : 0;

                    const targetPosition =

                        target.getBoundingClientRect().top +

                        window.pageYOffset -

                        headerHeight -

                        20;

                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }, 100);

            }

        });

    });

    // ======================================================

    // MOBILE TEAM DROPDOWN

    // ======================================================

    const teamDropdownToggle = document.querySelector(

        ".team-dropdown-toggle"

    );

    const teamDropdown = document.querySelector(

        ".team-dropdown"

    );

    if (teamDropdownToggle && teamDropdown) {

        teamDropdownToggle.addEventListener("click", function (event) {

            event.preventDefault();

            teamDropdown.classList.toggle("active");

        });

    }

    // ======================================================

    // HOMEPAGE PHOTO GALLERY SLIDESHOW

    // ======================================================

    const gallerySlides = document.querySelectorAll(

        ".gallery-slide"

    );

    if (gallerySlides.length > 1) {

        let galleryIndex = 0;

        function showGallerySlide(index) {

            gallerySlides.forEach(function (slide, i) {

                slide.classList.toggle(

                    "active",

                    i === index

                );

            });

        }

        showGallerySlide(galleryIndex);

        setInterval(function () {

            galleryIndex++;

            if (galleryIndex >= gallerySlides.length) {

                galleryIndex = 0;

            }

            showGallerySlide(galleryIndex);

        }, 5000);

    }

    // ======================================================

    // HOMEPAGE BACKGROUND SLIDESHOW

    // ======================================================

    const backgroundSlides = document.querySelectorAll(

        ".background-slide, .hero-background-slide"

    );

    if (backgroundSlides.length > 1) {

        let backgroundIndex = 0;

        backgroundSlides.forEach(function (slide, index) {

            slide.classList.toggle(

                "active",

                index === 0

            );

        });

        setInterval(function () {

            backgroundSlides[backgroundIndex].classList.remove(

                "active"

            );

            backgroundIndex++;

            if (backgroundIndex >= backgroundSlides.length) {

                backgroundIndex = 0;

            }

            backgroundSlides[backgroundIndex].classList.add(

                "active"

            );

        }, 6000);

    }

    // ======================================================

    // ABOUT PAGE TEAM SLIDESHOW

    // ======================================================

    const aboutSlides = document.querySelectorAll(

        ".about-team-slide"

    );

    if (aboutSlides.length > 1) {

        let aboutIndex = 0;

        function showAboutSlide(index) {

            aboutSlides.forEach(function (slide, i) {

                slide.classList.toggle(

                    "active",

                    i === index

                );

            });

        }

        showAboutSlide(aboutIndex);

        setInterval(function () {

            aboutIndex++;

            if (aboutIndex >= aboutSlides.length) {

                aboutIndex = 0;

            }

            showAboutSlide(aboutIndex);

        }, 5000);

    }

    // ======================================================

    // PORTFOLIO SLIDESHOW

    // ======================================================

    const portfolioSlides = document.querySelectorAll(

        ".portfolio-slide"

    );

    if (portfolioSlides.length > 1) {

        let portfolioIndex = 0;

        function showPortfolioSlide(index) {

            portfolioSlides.forEach(function (slide, i) {

                slide.classList.toggle(

                    "active",

                    i === index

                );

            });

        }

        showPortfolioSlide(portfolioIndex);

        setInterval(function () {

            portfolioIndex++;

            if (portfolioIndex >= portfolioSlides.length) {

                portfolioIndex = 0;

            }

            showPortfolioSlide(portfolioIndex);

        }, 5000);

    }

    // ======================================================

    // CAREERS SLIDESHOW

    // ======================================================

    const careerSlides = document.querySelectorAll(

        ".career-slide"

    );

    if (careerSlides.length > 1) {

        let careerIndex = 0;

        function showCareerSlide(index) {

            careerSlides.forEach(function (slide, i) {

                slide.classList.toggle(

                    "active",

                    i === index

                );

            });

        }

        showCareerSlide(careerIndex);

        setInterval(function () {

            careerIndex++;

            if (careerIndex >= careerSlides.length) {

                careerIndex = 0;

            }

            showCareerSlide(careerIndex);

        }, 5000);

    }

    // ======================================================

    // TEAM PAGE HERO - 5 PHOTO SLIDESHOW

    // ======================================================

    //

    // IMPORTANT:

    // This slideshow is designed to show the COMPLETE photo.

    //

    // The CSS must use:

    //

    // object-fit: contain;

    //

    // NOT:

    //

    // object-fit: cover;

    //

    // The "cover" setting crops photos and can cut off

    // people's heads.

    // ======================================================

    const teamHero = document.querySelector(

        ".team-hero-slideshow"

    );

    if (teamHero) {

        const teamSlides = teamHero.querySelectorAll(

            ".hero-slide"

        );

        const teamDots = teamHero.querySelectorAll(

            ".hero-slide-dots button"

        );

        if (teamSlides.length > 0) {

            let teamIndex = 0;

            let teamTimer = null;

            // ----------------------------------------------

            // SHOW TEAM SLIDE

            // ----------------------------------------------

            function showTeamSlide(index) {

                if (teamSlides.length === 0) {

                    return;

                }

                if (index < 0) {

                    index = teamSlides.length - 1;

                }

                if (index >= teamSlides.length) {

                    index = 0;

                }

                teamIndex = index;

                teamSlides.forEach(function (slide, i) {

                    const isActive = i === teamIndex;

                    slide.classList.toggle(

                        "active",

                        isActive

                    );

                    slide.setAttribute(

                        "aria-hidden",

                        isActive ? "false" : "true"

                    );

                });

                teamDots.forEach(function (dot, i) {

                    const isActive = i === teamIndex;

                    dot.classList.toggle(

                        "active",

                        isActive

                    );

                    dot.setAttribute(

                        "aria-selected",

                        isActive ? "true" : "false"

                    );

                });

            }

            // ----------------------------------------------

            // NEXT TEAM SLIDE

            // ----------------------------------------------

            function nextTeamSlide() {

                showTeamSlide(

                    teamIndex + 1

                );

            }

            // ----------------------------------------------

            // START TEAM SLIDESHOW

            // ----------------------------------------------

            function startTeamSlideshow() {

                stopTeamSlideshow();

                if (teamSlides.length > 1) {

                    teamTimer = setInterval(

                        nextTeamSlide,

                        5000

                    );

                }

            }

            // ----------------------------------------------

            // STOP TEAM SLIDESHOW

            // ----------------------------------------------

            function stopTeamSlideshow() {

                if (teamTimer) {

                    clearInterval(teamTimer);

                    teamTimer = null;

                }

            }

            // ----------------------------------------------

            // DOT NAVIGATION

            // ----------------------------------------------

            teamDots.forEach(function (dot, index) {

                dot.addEventListener("click", function () {

                    showTeamSlide(index);

                    startTeamSlideshow();

                });

            });

            // ----------------------------------------------

            // PAUSE WHEN MOUSE IS OVER SLIDESHOW

            // ----------------------------------------------

            teamHero.addEventListener(

                "mouseenter",

                function () {

                    stopTeamSlideshow();

                }

            );

            // ----------------------------------------------

            // RESUME WHEN MOUSE LEAVES

            // ----------------------------------------------

            teamHero.addEventListener(

                "mouseleave",

                function () {

                    startTeamSlideshow();

                }

            );

            // ----------------------------------------------

            // KEYBOARD NAVIGATION

            // ----------------------------------------------

            teamHero.addEventListener(

                "keydown",

                function (event) {

                    if (event.key === "ArrowRight") {

                        event.preventDefault();

                        nextTeamSlide();

                        startTeamSlideshow();

                    }

                    if (event.key === "ArrowLeft") {

                        event.preventDefault();

                        showTeamSlide(

                            teamIndex - 1

                        );

                        startTeamSlideshow();

                    }

                }

            );

            // ----------------------------------------------

            // INITIALIZE TEAM SLIDESHOW

            // ----------------------------------------------

            showTeamSlide(0);

            startTeamSlideshow();

        }

    }

    // ======================================================

    // REDUCED MOTION SUPPORT

    // ======================================================

    const reducedMotionQuery = window.matchMedia(

        "(prefers-reduced-motion: reduce)"

    );

    function updateReducedMotion() {

        if (reducedMotionQuery.matches) {

            document.body.classList.add(

                "reduced-motion"

            );

        } else {

            document.body.classList.remove(

                "reduced-motion"

            );

        }

    }

    updateReducedMotion();

    if (reducedMotionQuery.addEventListener) {

        reducedMotionQuery.addEventListener(

            "change",

            updateReducedMotion

        );

    } else if (reducedMotionQuery.addListener) {

        reducedMotionQuery.addListener(

            updateReducedMotion

        );

    }

});


