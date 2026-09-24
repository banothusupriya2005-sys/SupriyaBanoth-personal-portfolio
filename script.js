/* =========================================================
   SUPRIYA BANOTHU - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================= PAGE LOADER ================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 700);

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking navigation */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= TYPING ANIMATION ================= */

const typingText = document.getElementById("typingText");

const roles = [
    "Software Developer",
    "Web Developer",
    "AI/ML Enthusiast",
    "CSE Student",
    "IT Aspirant"
];

let roleIndex = 0;
let characterIndex = 0;

let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            isDeleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    const speed = isDeleting ? 45 : 90;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* ================= THEME TOGGLE ================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeBtn.innerHTML =
        '<i class="fas fa-sun"></i>';

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight =
        document.body.classList.contains("light-theme");

    if (isLight) {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeBtn.innerHTML =
            '<i class="fas fa-sun"></i>';

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeBtn.innerHTML =
            '<i class="fas fa-moon"></i>';

    }

});


/* ================= HEADER ON SCROLL ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* ================= SCROLL TO TOP ================= */

const scrollTopBtn =
    document.getElementById("scrollTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});


scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .about-card, " +
    ".timeline-item, .skill-card, .project-card, " +
    ".certificate-card, .contact-card, .contact-form"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= SKILL ANIMATION ================= */

const skillBars =
    document.querySelectorAll(".skill-bar span");

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const bar =
                        entry.target;

                    const width =
                        bar.style.width;

                    bar.style.width = "0";

                    setTimeout(() => {

                        bar.style.transition =
                            "width 1.2s ease";

                        bar.style.width =
                            width;

                    }, 100);

                    skillObserver.unobserve(bar);

                }

            });

        },
        {
            threshold: 0.4
        }
    );


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        !name ||
        !email ||
        !subject ||
        !message
    ) {

        formStatus.textContent =
            "Please fill in all fields.";

        formStatus.style.color =
            "#f87171";

        return;

    }


    /*
       The portfolio currently uses mailto to open
       the visitor's email application.

       This requires no backend.
    */

    const mailSubject =
        encodeURIComponent(subject);

    const mailBody =
        encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `${message}`
        );


    const mailtoLink =
        `mailto:banothusupriya2005@gmail.com` +
        `?subject=${mailSubject}` +
        `&body=${mailBody}`;


    window.location.href =
        mailtoLink;


    formStatus.textContent =
        "Opening your email application...";

    formStatus.style.color =
        "#22c55e";


    setTimeout(() => {

        contactForm.reset();

    }, 500);

});


/* ================= CURRENT YEAR ================= */

const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();


/* ================= SMOOTH ANCHOR SCROLL ================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId === "#" ||
                !targetId
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* ================= PROJECT LINK WARNING ================= */

document.querySelectorAll(
    '.project-links a[href="#"]'
).forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        alert(
            "Add your GitHub repository or live project URL here."
        );

    });

});


/* ================= IMAGE FALLBACK ================= */

const profileImage =
    document.querySelector(".profile-image img");

if (profileImage) {

    profileImage.addEventListener(
        "error",
        () => {

            profileImage.style.display =
                "none";

            const placeholder =
                document.querySelector(
                    ".profile-placeholder"
                );

            if (placeholder) {

                placeholder.style.display =
                    "flex";

            }

        }
    );

}


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%cHello! 👋 Welcome to Supriya's Portfolio.",
    "color:#38bdf8;font-size:16px;font-weight:bold;"
);

console.log(
    "Built with HTML, CSS and JavaScript."
);