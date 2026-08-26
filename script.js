// =====================================================
// MICHELLE ADHIAMBO PORTFOLIO
// JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =================================================
    // 1. MOBILE NAVIGATION
    // =================================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );
        });


        // Close menu when a navigation link is clicked
        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            });

        });

    }


    // =================================================
    // 2. SMOOTH SCROLLING
    // =================================================

    const navigationLinks =
        document.querySelectorAll('.nav-links a[href^="#"]');

    navigationLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (!targetSection) return;

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // =================================================
    // 3. ACTIVE NAVIGATION LINK
    // =================================================

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");

    function updateActiveLink() {

        const scrollPosition = window.scrollY + 180;

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                currentSection = section.id;
            }

        });


        navItems.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);
    window.addEventListener("resize", updateActiveLink);

    updateActiveLink();


    // =================================================
    // 4. SCROLL TO TOP BUTTON
    // =================================================

    const scrollTopButton =
        document.createElement("button");

    scrollTopButton.className = "scroll-top";

    scrollTopButton.setAttribute(
        "aria-label",
        "Scroll to top"
    );

    scrollTopButton.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(scrollTopButton);


    function updateScrollButton() {

        if (window.scrollY > 400) {

            scrollTopButton.classList.add("show");

        } else {

            scrollTopButton.classList.remove("show");

        }

    }

    window.addEventListener(
        "scroll",
        updateScrollButton
    );


    scrollTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // =================================================
    // 5. CONTACT FORM VALIDATION
    // =================================================

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            const name =
                document.querySelector("#name");

            const email =
                document.querySelector("#email");

            const message =
                document.querySelector("#message");


            if (!name || !email || !message) {
                return;
            }


            const nameValue =
                name.value.trim();

            const emailValue =
                email.value.trim();

            const messageValue =
                message.value.trim();


            // Validate name
            if (nameValue === "") {

                event.preventDefault();

                alert("Please enter your name.");

                name.focus();

                return;
            }


            // Validate email
            if (
                emailValue === "" ||
                !emailValue.includes("@") ||
                !emailValue.includes(".")
            ) {

                event.preventDefault();

                alert("Please enter a valid email address.");

                email.focus();

                return;
            }


            // Validate message
            if (messageValue === "") {

                event.preventDefault();

                alert("Please enter your message.");

                message.focus();

                return;
            }

        });

    }


    // =================================================
    // 6. CLOSE MOBILE MENU WHEN SCREEN GETS BIGGER
    // =================================================

    window.addEventListener("resize", () => {

        if (
            window.innerWidth > 768 &&
            navLinks
        ) {

            navLinks.classList.remove("active");

            if (menuToggle) {

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }

        }

    });

});