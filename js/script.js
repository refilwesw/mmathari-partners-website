/*==========================================================

  MMATHARI PARTNERS

  Corporate Website JavaScript

==========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================================

       MOBILE MENU

    ====================================================== */

    const menuToggle = document.querySelector(".menu-toggle");

    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

            });

        });

    }

    /* ======================================================

       STICKY HEADER

    ====================================================== */

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", function () {

            header.classList.toggle("scrolled", window.scrollY > 50);

        });

    }

    /* ======================================================

       ACTIVE NAVIGATION

    ====================================================== */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        const href = link.getAttribute("href");

        if (

            href === currentPage ||

            (currentPage === "" && href === "index.html")

        ) {

            link.classList.add("active");

        }

    });

    /* ======================================================

       SCROLL TO TOP BUTTON

    ====================================================== */

    const scrollButton = document.createElement("button");

    scrollButton.innerHTML = "↑";

    scrollButton.className = "scroll-top";

    scrollButton.setAttribute("aria-label", "Scroll to top");

    scrollButton.type = "button";

    document.body.appendChild(scrollButton);

    function updateScrollButton() {

        scrollButton.classList.toggle("show", window.scrollY > 400);

    }

    window.addEventListener("scroll", updateScrollButton);

    updateScrollButton();

    scrollButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ======================================================

       REVEAL ANIMATION

    ====================================================== */

    const reveals = document.querySelectorAll(

        ".card, .service-card, .profile-card, .value-card, .job-card, .insight-card"

    );

    function revealOnScroll() {

        const trigger = window.innerHeight * 0.90;

        reveals.forEach(function (item) {

            if (item.getBoundingClientRect().top < trigger) {

                item.classList.add("fade-in");

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    /* ======================================================

       CONTACT FORM VALIDATION

    ====================================================== */

    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {

            const requiredFields = form.querySelectorAll("[required]");

            let valid = true;

            requiredFields.forEach(function (field) {

                if (field.value.trim() === "") {

                    valid = false;

                    field.style.borderColor = "#FF0000";

                } else {

                    field.style.borderColor = "";

                }

            });

            if (!valid) {

                event.preventDefault();

                alert("Please complete all required fields.");

            }

        });

    });

    /* ======================================================

       READ MORE / READ LESS

    ====================================================== */

    document.querySelectorAll(".read-more-btn").forEach(function (button) {

        button.addEventListener("click", function () {

            const moreText = this.previousElementSibling;

            if (!moreText) {

                return;

            }

            moreText.classList.toggle("show");

            this.textContent = moreText.classList.contains("show")

                ? "Read Less"

                : "Read More";

        });

    });

    /* ======================================================

       TEAM SECTION NAVIGATION

    ====================================================== */

    function activateTeamSection() {

        const hash = window.location.hash.substring(1);

        const panels = document.querySelectorAll(".team-panel");

        if (!panels.length || !hash) {

            return;

        }

        const selectedPanel = document.getElementById(hash);

        if (

            !selectedPanel ||

            !selectedPanel.classList.contains("team-panel")

        ) {

            return;

        }

        panels.forEach(function (panel) {

            panel.classList.remove("active");

        });

        selectedPanel.classList.add("active");

        setTimeout(function () {

            selectedPanel.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }, 100);

    }

    activateTeamSection();

    window.addEventListener("hashchange", activateTeamSection);

    /* ======================================================

       MOBILE TEAM DROPDOWN

    ====================================================== */

    const teamDropdown = document.querySelector(".nav-dropdown > a");

    if (teamDropdown) {

        teamDropdown.addEventListener("click", function (event) {

            if (window.innerWidth <= 768) {

                event.preventDefault();

                this.parentElement.classList.toggle("open");

            }

        });

    }

    /* ======================================================

       HOMEPAGE PHOTO GALLERY SLIDESHOW

    ====================================================== */

    const homeGallerySlides = document.querySelectorAll(".about-home-slide");

    const homeGalleryDots = document.querySelectorAll(".about-home-dot");

    if (homeGallerySlides.length) {

        let slideIndex = 0;

        function showHomeGallerySlide(index) {

            homeGallerySlides.forEach(function (slide) {

                slide.classList.remove("active");

            });

            homeGalleryDots.forEach(function (dot) {

                dot.classList.remove("active");

            });

            homeGallerySlides[index].classList.add("active");

            if (homeGalleryDots[index]) {

                homeGalleryDots[index].classList.add("active");

            }

        }

        showHomeGallerySlide(0);

        homeGalleryDots.forEach(function (dot, index) {

            dot.addEventListener("click", function () {

                slideIndex = index;

                showHomeGallerySlide(slideIndex);

            });

        });

        if (homeGallerySlides.length > 1) {

            setInterval(function () {

                slideIndex = (slideIndex + 1) % homeGallerySlides.length;

                showHomeGallerySlide(slideIndex);

            }, 4000);

        }

    }

    /* ======================================================

       HOMEPAGE BACKGROUND SLIDESHOW

    ====================================================== */

    const homeBackgroundSlides = document.querySelectorAll(".mp-home-slide");

    if (homeBackgroundSlides.length) {

        let currentSlide = 0;

        homeBackgroundSlides.forEach(function (slide, index) {

            slide.classList.toggle(

                "mp-home-slide-active",

                index === 0

            );

        });

        if (homeBackgroundSlides.length > 1) {

            setInterval(function () {

                homeBackgroundSlides[currentSlide]

                    .classList.remove("mp-home-slide-active");

                currentSlide =

                    (currentSlide + 1) % homeBackgroundSlides.length;

                homeBackgroundSlides[currentSlide]

                    .classList.add("mp-home-slide-active");

            }, 5000);

        }

    }

    /* ======================================================

       ABOUT US TEAM / COLLABORATION SLIDESHOW

    ====================================================== */

    const aboutTeamSlides = document.querySelectorAll(".about-team-slide");

    if (aboutTeamSlides.length) {

        let currentSlide = 0;

        function showAboutTeamSlide(index) {

            aboutTeamSlides.forEach(function (slide) {

                slide.classList.remove("active");

            });

            aboutTeamSlides[index].classList.add("active");

        }

        showAboutTeamSlide(0);

        if (aboutTeamSlides.length > 1) {

            setInterval(function () {

                currentSlide =

                    (currentSlide + 1) % aboutTeamSlides.length;

                showAboutTeamSlide(currentSlide);

            }, 5000);

        }

    }

    /* ======================================================

       OUR PORTFOLIO SLIDESHOW

    ====================================================== */

    const portfolioSlides = document.querySelectorAll(".portfolio-slide");

    if (portfolioSlides.length) {

        let currentSlide = 0;

        portfolioSlides.forEach(function (slide, index) {

            slide.classList.toggle("active", index === 0);

        });

        if (portfolioSlides.length > 1) {

            setInterval(function () {

                portfolioSlides[currentSlide].classList.remove("active");

                currentSlide =

                    (currentSlide + 1) % portfolioSlides.length;

                portfolioSlides[currentSlide].classList.add("active");

            }, 5000);

        }

    }

    /* ======================================================

       CAREERS PHOTO SLIDESHOW

    ====================================================== */

    const careerSlides = document.querySelectorAll(".careers-slide");

    if (careerSlides.length) {

        let careerIndex = 0;

        careerSlides.forEach(function (slide, index) {

            slide.classList.toggle("active", index === 0);

        });

        if (careerSlides.length > 1) {

            setInterval(function () {

                careerSlides[careerIndex].classList.remove("active");

                careerIndex =

                    (careerIndex + 1) % careerSlides.length;

                careerSlides[careerIndex].classList.add("active");

            }, 4000);

        }

    }

    /* ======================================================

       TEAM HERO - 5 PHOTO SLIDESHOW

       NO IMAGE CROPPING

    ====================================================== */

    const teamHeroSlides = document.querySelectorAll(

        ".team-hero-slideshow .hero-slide"

    );

    const teamHeroDots = document.querySelectorAll(

        ".team-hero-slideshow .hero-dot"

    );

    if (teamHeroSlides.length) {

        let current = 0;

        let timer;

        function showTeamHeroSlide(index) {

            current =

                (index + teamHeroSlides.length) % teamHeroSlides.length;

            teamHeroSlides.forEach(function (slide, i) {

                slide.classList.toggle("active", i === current);

            });

            teamHeroDots.forEach(function (dot, i) {

                dot.classList.toggle("active", i === current);

            });

        }

        function startTeamHeroSlideshow() {

            clearInterval(timer);

            if (teamHeroSlides.length > 1) {

                timer = setInterval(function () {

                    showTeamHeroSlide(current + 1);

                }, 5000);

            }

        }

        teamHeroDots.forEach(function (dot, index) {

            dot.addEventListener("click", function () {

                showTeamHeroSlide(index);

                startTeamHeroSlideshow();

            });

        });

        showTeamHeroSlide(0);

        startTeamHeroSlideshow();

    }

    /* ======================================================

       REDUCED MOTION ACCESSIBILITY

    ====================================================== */

    const reducedMotion = window.matchMedia(

        "(prefers-reduced-motion: reduce)"

    );

    if (reducedMotion.matches) {

        document.documentElement.classList.add("reduce-motion");

    }

});


