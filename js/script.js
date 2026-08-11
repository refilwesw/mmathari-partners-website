/*==========================================================
  MMATHARI PARTNERS
  Corporate Website JavaScript
==========================================================*/
document.addEventListener("DOMContentLoaded", () => {
    /* ==========================
       MOBILE MENU
    ========================== */
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }
    /* ==========================
       STICKY HEADER
    ========================== */
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
    /* ==========================
       ACTIVE NAVIGATION
    ========================== */
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage || (currentPage === "" && href === "index.html")) {
            link.classList.add("active");
        }
    });
    /* ==========================
       SCROLL TO TOP BUTTON
    ========================== */
    const scrollButton = document.createElement("button");
    scrollButton.innerHTML = "↑";
    scrollButton.className = "scroll-top";
    document.body.appendChild(scrollButton);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }
    });
    scrollButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    /* ==========================
       REVEAL ANIMATION
    ========================== */
    const reveals = document.querySelectorAll(
        ".card, .service-card, .profile-card, .value-card, .job-card, .insight-card"
    );
    const revealOnScroll = () => {
        const trigger = window.innerHeight * 0.90;
        reveals.forEach(item => {
            const top = item.getBoundingClientRect().top;
            if (top < trigger) {
                item.classList.add("fade-in");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    /* ==========================
       CONTACT FORM
    ========================== */
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            const required = form.querySelectorAll("[required]");
            let valid = true;
            required.forEach(field => {
                if (field.value.trim() === "") {
                    valid = false;
                    field.style.borderColor = "#FF0000";
                } else {
                    field.style.borderColor = "#32CD32";
                }
            });
            if (!valid) {
                e.preventDefault();
                alert("Please complete all required fields.");
            }
        });
    }
});

document.querySelectorAll(".read-more-btn").forEach(button => {

    button.addEventListener("click", function () {

        const moreText = this.previousElementSibling;

        moreText.classList.toggle("show");

        if (moreText.classList.contains("show")) {

            this.textContent = "Read Less";

        } else {

            this.textContent = "Read More";

        }

    });

});

/* ==========================================================

   TEAM DROPDOWN

   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    function activateTeamSection() {

        const hash = window.location.hash.substring(1);

        const panels = document.querySelectorAll(".team-panel");

        /* No section selected:

           keep Executive Leadership active */

        if (!hash) {

            return;

        }

        const selectedPanel = document.getElementById(hash);

        /* Ignore hashes that are not Team sections */

        if (!selectedPanel ||

            !selectedPanel.classList.contains("team-panel")) {

            return;

        }

        /* Hide all Team sections */

        panels.forEach(function (panel) {

            panel.classList.remove("active");

        });

        /* Show selected Team section */

        selectedPanel.classList.add("active");

        /* Scroll to selected section */

        setTimeout(function () {

            selectedPanel.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }, 100);

    }

    /* Activate section when Team page loads */

    activateTeamSection();

    /* Activate section when dropdown link is clicked */

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

});


