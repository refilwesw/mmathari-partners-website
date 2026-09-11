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

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }

    /* ======================================================

       ACTIVE NAVIGATION

    ====================================================== */

    const currentPage =

        window.location.pathname.split("/").pop();

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

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            scrollButton.classList.add("show");

        } else {

            scrollButton.classList.remove("show");

        }

    });

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

            const top =

                item.getBoundingClientRect().top;

            if (top < trigger) {

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

            const requiredFields =

                form.querySelectorAll("[required]");

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

});

/* ==========================================================

   READ MORE / READ LESS

========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const buttons =

        document.querySelectorAll(".read-more-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const moreText =

                this.previousElementSibling;

            if (!moreText) {

                return;

            }

            moreText.classList.toggle("show");

            if (moreText.classList.contains("show")) {

                this.textContent = "Read Less";

            } else {

                this.textContent = "Read More";

            }

        });

    });

});

/* ==========================================================

   TEAM SECTION NAVIGATION

========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    function activateTeamSection() {

        const hash =

            window.location.hash.substring(1);

        const panels =

            document.querySelectorAll(".team-panel");

        if (!panels.length) {

            return;

        }

        /* No section selected:

           keep the page's default active section */

        if (!hash) {

            return;

        }

        const selectedPanel =

            document.getElementById(hash);

        /* Ignore unrelated hashes */

        if (

            !selectedPanel ||

            !selectedPanel.classList.contains("team-panel")

        ) {

            return;

        }

        /* Hide all panels */

        panels.forEach(function (panel) {

            panel.classList.remove("active");

        });

        /* Show selected panel */

        selectedPanel.classList.add("active");

        /* Scroll to selected section */

        setTimeout(function () {

            selectedPanel.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }, 100);

    }

    activateTeamSection();

    window.addEventListener(

        "hashchange",

        activateTeamSection

    );

    /* ======================================================

       MOBILE TEAM DROPDOWN

    ====================================================== */

    const teamDropdown =

        document.querySelector(".nav-dropdown > a");

    if (teamDropdown) {

        teamDropdown.addEventListener(

            "click",

            function (event) {

                if (window.innerWidth <= 768) {

                    event.preventDefault();

                    this.parentElement.classList.toggle("open");

                }

            }

        );

    }

});

/* ==========================================================

   HOMEPAGE PHOTO GALLERY SLIDESHOW

   Uses:

   .about-home-slide

   .about-home-dot

   This is SEPARATE from the homepage background slideshow.

========================================================== */

(function () {

    function startHomeGallerySlideshow() {

        const slides =

            document.querySelectorAll(".about-home-slide");

        const dots =

            document.querySelectorAll(".about-home-dot");

        if (!slides.length) {

            return;

        }

        let slideIndex = 0;

        function showSlide(index) {

            slides.forEach(function (slide) {

                slide.classList.remove("active");

            });

            dots.forEach(function (dot) {

                dot.classList.remove("active");

            });

            slides[index].classList.add("active");

            if (dots[index]) {

                dots[index].classList.add("active");

            }

        }

        /* Show first photograph */

        showSlide(0);

        /* Dot navigation */

        dots.forEach(function (dot, index) {

            dot.addEventListener("click", function () {

                slideIndex = index;

                showSlide(slideIndex);

            });

        });

        /* Automatic slideshow */

        setInterval(function () {

            slideIndex++;

            if (slideIndex >= slides.length) {

                slideIndex = 0;

            }

            showSlide(slideIndex);

        }, 4000);

    }

    if (document.readyState === "loading") {

        document.addEventListener(

            "DOMContentLoaded",

            startHomeGallerySlideshow

        );

    } else {

        startHomeGallerySlideshow();

    }

})();

/* ==========================================================

   HOMEPAGE BACKGROUND SLIDESHOW

   IMPORTANT:

   Uses ONLY .mp-home-slide

   This is deliberately separate from the homepage

   photo gallery (.about-home-slide).

========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const slides =

        document.querySelectorAll(".mp-home-slide");

    if (slides.length < 2) {

        return;

    }

    let currentSlide = 0;

    /* Make sure first slide is visible */

    slides.forEach(function (slide, index) {

        slide.classList.toggle(

            "mp-home-slide-active",

            index === 0

        );

    });

    /* Change background photograph every 5 seconds */

    setInterval(function () {

        slides[currentSlide]

            .classList.remove("mp-home-slide-active");

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        slides[currentSlide]

            .classList.add("mp-home-slide-active");

    }, 5000);

});

/* ==========================================================

   ABOUT US TEAM / COLLABORATION SLIDESHOW

========================================================== */

(function () {

    function startAboutTeamSlideshow() {

        const slides =

            document.querySelectorAll(".about-team-slide");

        if (!slides.length) {

            return;

        }

        let currentSlide = 0;

        function showSlide(index) {

            slides.forEach(function (slide) {

                slide.classList.remove("active");

            });

            slides[index].classList.add("active");

        }

        showSlide(0);

        setInterval(function () {

            currentSlide++;

            if (currentSlide >= slides.length) {

                currentSlide = 0;

            }

            showSlide(currentSlide);

        }, 5000);

    }

    if (document.readyState === "loading") {

        document.addEventListener(

            "DOMContentLoaded",

            startAboutTeamSlideshow

        );

    } else {

        startAboutTeamSlideshow();

    }

})();

/* ==========================================================

   OUR PORTFOLIO SLIDESHOW

========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const slides =

        document.querySelectorAll(".portfolio-slide");

    if (!slides.length) {

        return;

    }

    let currentSlide = 0;

    /* Ensure first slide is active */

    slides.forEach(function (slide, index) {

        slide.classList.toggle(

            "active",

            index === 0

        );

    });

    setInterval(function () {

        slides[currentSlide]

            .classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        slides[currentSlide]

            .classList.add("active");

    }, 5000);

});

/* ==========================================================

   CAREERS PHOTO SLIDESHOW

========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const careerSlides =

        document.querySelectorAll(".careers-slide");

    if (!careerSlides.length) {

        return;

    }

    let careerIndex = 0;

    /* Ensure first slide is active */

    careerSlides.forEach(function (slide, index) {

        slide.classList.toggle(

            "active",

            index === 0

        );

    });

    setInterval(function () {

        careerSlides[careerIndex]

            .classList.remove("active");

        careerIndex++;

        if (careerIndex >= careerSlides.length) {

            careerIndex = 0;

        }

        careerSlides[careerIndex]

            .classList.add("active");

    }, 4000);

});

/* ==========================================================

   REDUCED MOTION ACCESSIBILITY

========================================================== */

(function () {

    const reducedMotion =

        window.matchMedia(

            "(prefers-reduced-motion: reduce)"

        );

    if (!reducedMotion.matches) {

        return;

    }

    document.documentElement.classList.add(

        "reduce-motion"

    );

})();



