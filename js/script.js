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

function showTeam(teamId) {

    // Hide all team panels

    document.querySelectorAll(".team-panel").forEach(panel => {

        panel.classList.remove("active");

    });

    // Remove active state from all buttons

    document.querySelectorAll(".team-tab").forEach(button => {

        button.classList.remove("active");

    });

    // Show selected panel

    const selectedPanel = document.getElementById(teamId);

    if (selectedPanel) {

        selectedPanel.classList.add("active");

    }

    // Activate selected button

    document.querySelectorAll(".team-tab").forEach(button => {

        if (button.getAttribute("onclick") === `showTeam('${teamId}')`) {

            button.classList.add("active");

        }

    });

}






