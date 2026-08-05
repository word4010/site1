/*=========================================
        PRELOADER
=========================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 200);

});

/*=========================================
        AOS
=========================================*/

AOS.init({

    duration: 900,

    once: true,

    offset: 100

});

/*=========================================
        TYPED
=========================================*/

new Typed("#typed", {

    strings: [

        "Найсильніша сім'я UA Online",

        "Честь • Сила • Єдність",

        "Разом до перемоги",

        "Steel Never Sleeps"

    ],

    typeSpeed: 55,

    backSpeed: 35,

    backDelay: 1800,

    loop: true

});

/*=========================================
        SWIPER GALLERY
=========================================*/

new Swiper(".gallerySwiper", {

    loop: true,

    grabCursor: true,

    centeredSlides: true,

    autoplay: {

        delay: 2500,

        disableOnInteraction: false

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true

    },

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev"

    },

    breakpoints: {

        0: {

            slidesPerView: 1

        },

        768: {

            slidesPerView: 2

        },

        1200: {

            slidesPerView: 3

        }

    }

});

/*=========================================
        REVIEW SWIPER
=========================================*/

new Swiper(".reviewSwiper", {

    loop: true,

    autoplay: {

        delay: 3500

    },

    pagination: {

        el: ".reviewSwiper .swiper-pagination",

        clickable: true

    },

    slidesPerView: 1

});

/*=========================================
        VANILLA TILT
=========================================*/

VanillaTilt.init(

    document.querySelectorAll("[data-tilt]"),

    {

        max: 12,

        speed: 400,

        glare: true,

        "max-glare": .25

    }

);

/*=========================================
        GSAP HERO
=========================================*/

gsap.from(".hero-content", {

    y: 80,

    opacity: 0,

    duration: 1.3,

    ease: "power3.out"

});

gsap.from(".hero-image", {

    x: 100,

    opacity: 0,

    duration: 1.5,

    delay: .3,

    ease: "power3.out"

});
/*=========================================
        PARTICLES.JS
=========================================*/

particlesJS("particles-js", {

    particles: {

        number: {

            value: 80,

            density: {

                enable: true,

                value_area: 900

            }

        },

        color: {

            value: "#f3c64b"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: .6

        },

        size: {

            value: 3,

            random: true

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#f3c64b",

            opacity: .25,

            width: 1

        },

        move: {

            enable: true,

            speed: 2,

            out_mode: "out"

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,

                mode: "grab"

            },

            onclick: {

                enable: true,

                mode: "push"

            }

        },

        modes: {

            grab: {

                distance: 180,

                line_linked: {

                    opacity: .8

                }

            },

            push: {

                particles_nb: 4

            }

        }

    },

    retina_detect: true

});

/*=========================================
        CUSTOM CURSOR
=========================================*/

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursor2.style.left = e.clientX - 13 + "px";
    cursor2.style.top = e.clientY - 13 + "px";

});

/*=========================================
        SCROLL PROGRESS
=========================================*/

const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    progress.style.width =

        scroll / height * 100 + "%";

});

/*=========================================
        HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 70) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*=========================================
        BURGER MENU
=========================================*/

const burger = document.querySelector(".burger");

const nav = document.querySelector("nav");

burger.onclick = () => {

    nav.classList.toggle("active");

};

document.querySelectorAll("nav a").forEach(link => {

    link.onclick = () => {

        nav.classList.remove("active");

    }

});

/*=========================================
        LIVE CLOCK
=========================================*/

const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString("uk-UA");

}

setInterval(updateClock, 1000);

updateClock();

/*=========================================
        SETTINGS PANEL
=========================================*/

const settingsBtn = document.getElementById("settingsBtn");

const settings = document.querySelector(".settings");

settingsBtn.onclick = () => {

    settings.classList.toggle("active");

};

/*=========================================
        MUSIC
=========================================*/

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () => {

    if (playing) {

        music.pause();

        playing = false;

        musicBtn.innerHTML = "<i class='fa-solid fa-music'></i>";

    } else {

        music.volume = .35;

        music.play();

        playing = true;

        musicBtn.innerHTML = "<i class='fa-solid fa-pause'></i>";

    }

};

/*=========================================
            LOCAL STORAGE
=========================================*/

const themeSelect = document.getElementById("theme");

const particlesToggle = document.getElementById("particlesToggle");

const animationToggle = document.getElementById("animationToggle");

const soundToggle = document.getElementById("soundToggle");

const musicToggle = document.getElementById("musicToggle");

/*=========================================
        LOAD SETTINGS
=========================================*/

function loadSettings() {

    const theme = localStorage.getItem("theme");

    const particles = localStorage.getItem("particles");

    const animation = localStorage.getItem("animation");

    const sound = localStorage.getItem("sound");

    const musicState = localStorage.getItem("music");

    if (theme) {

        themeSelect.value = theme;

        document.body.className = "";

        if (theme !== "default") {

            document.body.classList.add("theme-" + theme);

        }

    }

    if (particles !== null) {

        particlesToggle.checked = particles === "true";

    }

    if (animation !== null) {

        animationToggle.checked = animation === "true";

    }

    if (sound !== null) {

        soundToggle.checked = sound === "true";

    }

    if (musicState !== null) {

        musicToggle.checked = musicState === "true";

    }

}

loadSettings();

/*=========================================
            SAVE SETTINGS
=========================================*/

function saveSettings() {

    localStorage.setItem("theme", themeSelect.value);

    localStorage.setItem("particles", particlesToggle.checked);

    localStorage.setItem("animation", animationToggle.checked);

    localStorage.setItem("sound", soundToggle.checked);

    localStorage.setItem("music", musicToggle.checked);

}

/*=========================================
            THEMES
=========================================*/

themeSelect.addEventListener("change", () => {

    document.body.className = "";

    if (themeSelect.value !== "default") {

        document.body.classList.add(

            "theme-" + themeSelect.value

        );

    }

    saveSettings();

});

/*=========================================
        PARTICLES TOGGLE
=========================================*/

particlesToggle.addEventListener("change", () => {

    const particles = document.getElementById("particles-js");

    if (particlesToggle.checked) {

        particles.style.display = "block";

    } else {

        particles.style.display = "none";

    }

    saveSettings();

});

/*=========================================
        ANIMATION TOGGLE
=========================================*/

animationToggle.addEventListener("change", () => {

    if (animationToggle.checked) {

        document.body.classList.remove("no-animation");

    } else {

        document.body.classList.add("no-animation");

    }

    saveSettings();

});

/*=========================================
            SOUND
=========================================*/

let soundEnabled = true;

soundToggle.addEventListener("change", () => {

    soundEnabled = soundToggle.checked;

    saveSettings();

});

/*=========================================
            MUSIC
=========================================*/

musicToggle.addEventListener("change", () => {

    if (musicToggle.checked) {

        music.play();

        playing = true;

    } else {

        music.pause();

        playing = false;

    }

    saveSettings();

});

/*=========================================
            CLICK SOUND
=========================================*/

const clickSound = document.getElementById("clickSound");

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", () => {

        if (!soundEnabled) return;

        clickSound.currentTime = 0;

        clickSound.play();

    });

});

/*=========================================
            HOVER SOUND
=========================================*/

const hoverSound = document.getElementById("hoverSound");

document.querySelectorAll("a,button").forEach(item => {

    item.addEventListener("mouseenter", () => {

        if (!soundEnabled) return;

        hoverSound.volume = .2;

        hoverSound.currentTime = 0;

        hoverSound.play();

    });

});

/*=========================================
            COUNTUP
=========================================*/

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const el = entry.target;

        const target = Number(el.dataset.target);

        const counter = new countUp.CountUp(el, target, {

            duration: 2.5,

            separator: " "

        });

        if (!counter.error) {

            counter.start();

        }

        observer.unobserve(el);

    });

}, {

    threshold: .5

});

counters.forEach(counter => observer.observe(counter));

/*=========================================
            COUNTDOWN
=========================================*/

const eventDate = new Date("2026-12-31 20:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);

}

setInterval(updateCountdown, 1000);

updateCountdown();

/*=========================================
            SEARCH MEMBER
=========================================*/

const search = document.getElementById("searchMember");

const cards = document.querySelectorAll(".member-card");

search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    cards.forEach(card => {

        const nick = card.querySelector("h3")
            .textContent
            .toLowerCase();

        card.style.display =

            nick.includes(value)

                ? "block"

                : "none";

    });

});

/*=========================================
            FILTER
=========================================*/

const sort = document.getElementById("sortMembers");

sort.addEventListener("change", () => {

    cards.forEach(card => {

        const role = card.dataset.role;

        if (sort.value === "all") {

            card.style.display = "block";

        }

        else if (role === sort.value) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

});

/*=========================================
            ACCORDION
=========================================*/

document.querySelectorAll(".accordion-header")

    .forEach(item => {

        item.onclick = () => {

            const content = item.nextElementSibling;

            const open =

                content.style.maxHeight;

            document

                .querySelectorAll(".accordion-content")

                .forEach(el => el.style.maxHeight = null);

            if (!open) {

                content.style.maxHeight =

                    content.scrollHeight + "px";

            }

        }

    });

/*=========================================
            MODAL
=========================================*/

const modal = document.getElementById("memberModal");

document

    .querySelectorAll(".info-btn")

    .forEach(btn => {

        btn.onclick = () => {

            modal.classList.add("active");

        }

    });

document

    .querySelector(".closeModal")

    .onclick = () => {

        modal.classList.remove("active");

    };

window.onclick = e => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

};

/*=========================================
            TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    topBtn.style.display =

        window.scrollY > 500

            ? "flex"

            : "none";

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/*=========================================
            TOAST
=========================================*/

function toast(text, type = "success") {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = `

        <i class="fa-solid ${type === "success"
            ? "fa-circle-check"
            : "fa-circle-xmark"
        }"></i>

        <span>${text}</span>

    `;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 3000);

}

/*=========================================
            RIPPLE
=========================================*/

document.querySelectorAll("button")

    .forEach(button => {

        button.addEventListener("click", e => {

            const circle = document.createElement("span");

            const size = Math.max(

                button.clientWidth,

                button.clientHeight

            );

            circle.style.width = size + "px";

            circle.style.height = size + "px";

            circle.style.left =

                e.offsetX - size / 2 + "px";

            circle.style.top =

                e.offsetY - size / 2 + "px";

            circle.classList.add("ripple");

            button.appendChild(circle);

            setTimeout(() => {

                circle.remove();

            }, 700);

        });

    });

/*=========================================
        MAGNET BUTTON
=========================================*/

document

    .querySelectorAll(".magnet")

    .forEach(btn => {

        btn.addEventListener("mousemove", e => {

            const rect = btn.getBoundingClientRect();

            const x = e.clientX -

                (rect.left + rect.width / 2);

            const y = e.clientY -

                (rect.top + rect.height / 2);

            btn.style.transform =

                `translate(${x * .2}px,${y * .2}px)`;

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translate(0,0)";

        });

    });

/*=========================================
            FORM
=========================================*/

const form = document

    .getElementById("joinForm");

form.addEventListener("submit", e => {

    e.preventDefault();

    const name = form.name.value.trim();

    const nick = form.nick.value.trim();

    if (name.length < 3) {

        toast(

            "Введіть ім'я",

            "error"

        );

        return;

    }

    if (nick.length < 3) {

        toast(

            "Введіть Nick",

            "error"

        );

        return;

    }

    localStorage.setItem(

        "join-name",

        name

    );

    localStorage.setItem(

        "join-nick",

        nick

    );

    confetti({

        particleCount: 180,

        spread: 100,

        origin: { y: .7 }

    });

    toast(

        "Заявку успішно надіслано!"

    );

    form.reset();

});

/*=========================================
        RESTORE FORM
=========================================*/

window.addEventListener("load", () => {

    const name =

        localStorage.getItem(

            "join-name"

        );

    const nick =

        localStorage.getItem(

            "join-nick"

        );

    if (name)

        form.name.value = name;

    if (nick)

        form.nick.value = nick;

});

/*=========================================
        KEYBOARD
=========================================*/

document.addEventListener(

    "keydown",

    e => {

        if (e.key === "Escape") {

            modal.classList.remove(

                "active"

            );

        }

    }
);

//
 const discord = document

    .getElementById("copyDiscord");

if (discord) {

    discord.onclick = () => {

        navigator.clipboard.writeText(

            "StaleveBratstvo"

        );

        toast(

            "Discord скопійовано"

        );

    };

}

/*=========================================
        RANDOM QUOTE
=========================================*/

const quotes = [

    "Сила у єдності.",

    "Разом до перемоги!",

    "Сталь не іржавіє.",

    "Честь понад усе.",

    "Один за всіх!",

    "Сталеве Братство назавжди."

];

const quote = document

    .getElementById("quote");

if (quote) {

    setInterval(() => {

        quote.innerHTML =

            quotes[

            Math.floor(

                Math.random()

                * quotes.length)

            ];

    }, 6000);

}

/*=========================================
            EASTER EGG
=========================================*/

let clicks = 0;

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {

    clicks++;

    if (clicks >= 7) {

        confetti({

            particleCount: 350,

            spread: 180,

            origin: { y: .6 }

        });

        toast("🥚 Easter Egg знайдено!");

        clicks = 0;

    }

});

/*=========================================
        KONAMI CODE
=========================================*/

const konami = [

    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"

];

let code = [];

document.addEventListener("keydown", e => {

    code.push(e.key);

    code = code.slice(-konami.length);

    if (JSON.stringify(code) == JSON.stringify(konami)) {

        document.body.classList.add("party-mode");

        confetti({

            particleCount: 500,

            spread: 220

        });

        toast("🎉 PARTY MODE");

    }

});

/*=========================================
            STARFALL
=========================================*/

function star() {

    const s = document.createElement("span");

    s.className = "star";

    s.style.left = Math.random() * 100 + "vw";

    s.style.animationDuration =

        2 + Math.random() * 4 + "s";

    document.body.appendChild(s);

    setTimeout(() => {

        s.remove();

    }, 6000);

}

setInterval(star, 450);

/*=========================================
            LIGHTNING
=========================================*/

function lightning() {

    if (Math.random() < 0.02) {

        document.body.classList.add("flash");

        setTimeout(() => {

            document.body.classList.remove("flash");

        }, 150);

    }

}

setInterval(lightning, 1500);

/*=========================================
        RANDOM BACKGROUND
=========================================*/

const backgrounds = [

    "linear-gradient(180deg,#090909,#111)",

    "linear-gradient(180deg,#111,#1b1300)",

    "linear-gradient(180deg,#050505,#171717)",

    "linear-gradient(180deg,#111,#090909)"

];

setInterval(() => {

    document.body.style.background =

        backgrounds[

        Math.floor(

            Math.random()

            * backgrounds.length)

        ];

}, 90000);

/*=========================================
        PARALLAX
=========================================*/

window.addEventListener("mousemove", e => {

    const x = (

        window.innerWidth / 2 - e.clientX

    ) / 40;

    const y = (

        window.innerHeight / 2 - e.clientY

    ) / 40;

    document.querySelector(".hero-image")

        .style.transform =

        `translate(${x}px,${y}px)`;

});

/*=========================================
        GSAP SCROLL
=========================================*/

gsap.utils.toArray("section")

    .forEach(section => {

        gsap.from(section, {

            scrollTrigger: {

                trigger: section,

                start: "top 80%"

            },

            opacity: 0,

            y: 100,

            duration: 1

        });

    });

/*=========================================
        IMAGE HOVER
=========================================*/

document

    .querySelectorAll("img")

    .forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.filter =

                "brightness(1.15)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.filter = "";

        });

    });

/*=========================================
        SHAKE BUTTON
=========================================*/

document

    .querySelectorAll(".shake")

    .forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.classList.add("animate__animated");

            btn.classList.add("animate__headShake");

            setTimeout(() => {

                btn.classList.remove(

                    "animate__animated",

                    "animate__headShake"

                );

            }, 1000);

        });

    });

/*=========================================
        EASTER EGG
=========================================*/

let clicks = 0;

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {

    clicks++;

    if (clicks >= 7) {

        confetti({

            particleCount: 350,

            spread: 180,

            origin: { y: .6 }

        });

        toast("🥚 Easter Egg знайдено!");

        clicks = 0;

    }

});

/*=========================================
        KONAMI CODE
=========================================*/

const konami = [

    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"

];

let code = [];

document.addEventListener("keydown", e => {

    code.push(e.key);

    code = code.slice(-konami.length);

    if (JSON.stringify(code) == JSON.stringify(konami)) {

        document.body.classList.add("party-mode");

        confetti({

            particleCount: 500,

            spread: 220

        });

        toast("🎉 PARTY MODE");

    }

});

/*=========================================
            STARFALL
=========================================*/

function star() {

    const s = document.createElement("span");

    s.className = "star";

    s.style.left = Math.random() * 100 + "vw";

    s.style.animationDuration =

        2 + Math.random() * 4 + "s";

    document.body.appendChild(s);

    setTimeout(() => {

        s.remove();

    }, 6000);

}

setInterval(star, 450);

/*=========================================
            LIGHTNING
=========================================*/

function lightning() {

    if (Math.random() < 0.02) {

        document.body.classList.add("flash");

        setTimeout(() => {

            document.body.classList.remove("flash");

        }, 150);

    }

}

setInterval(lightning, 1500);

/*=========================================
        RANDOM BACKGROUND
=========================================*/

const backgrounds = [

    "linear-gradient(180deg,#090909,#111)",

    "linear-gradient(180deg,#111,#1b1300)",

    "linear-gradient(180deg,#050505,#171717)",

    "linear-gradient(180deg,#111,#090909)"

];

setInterval(() => {

    document.body.style.background =

        backgrounds[

        Math.floor(

            Math.random()

            * backgrounds.length)

        ];

}, 90000);

/*=========================================
        PARALLAX
=========================================*/

window.addEventListener("mousemove", e => {

    const x = (

        window.innerWidth / 2 - e.clientX

    ) / 40;

    const y = (

        window.innerHeight / 2 - e.clientY

    ) / 40;

    document.querySelector(".hero-image")

        .style.transform =

        `translate(${x}px,${y}px)`;

});

/*=========================================
        GSAP SCROLL
=========================================*/

gsap.utils.toArray("section")

    .forEach(section => {

        gsap.from(section, {

            scrollTrigger: {

                trigger: section,

                start: "top 80%"

            },

            opacity: 0,

            y: 100,

            duration: 1

        });

    });

/*=========================================
        IMAGE HOVER
=========================================*/

document

    .querySelectorAll("img")

    .forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.filter =

                "brightness(1.15)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.filter = "";

        });

    });

/*=========================================
        SHAKE BUTTON
=========================================*/

document

    .querySelectorAll(".shake")

    .forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.classList.add("animate__animated");

            btn.classList.add("animate__headShake");

            setTimeout(() => {

                btn.classList.remove(

                    "animate__animated",

                    "animate__headShake"

                );

            }, 1000);

        });

    });

/*=========================================
        ACHIEVEMENTS
=========================================*/

const achievements = {

    visitor: false,

    explorer: false,

    supporter: false,

    veteran: false,

    collector: false

};

if (localStorage.getItem("achievements")) {

    Object.assign(

        achievements,

        JSON.parse(

            localStorage.getItem("achievements")

        )

    );

}

function saveAchievements() {

    localStorage.setItem(

        "achievements",

        JSON.stringify(achievements)

    );

}

function unlock(name, title) {

    if (achievements[name]) return;

    achievements[name] = true;

    saveAchievements();

    confetti({

        particleCount: 150,

        spread: 90

    });

    toast("🏆 Досягнення: " + title);

}

/*=========================================
            VISITOR
=========================================*/

setTimeout(() => {

    unlock(

        "visitor",

        "Перший візит"

    );

}, 8000);

/*=========================================
            SCROLL MASTER
=========================================*/

window.addEventListener("scroll", () => {

    const percent =

        window.scrollY /

        (

            document.body.scrollHeight -

            window.innerHeight

        ) * 100;

    if (percent > 90) {

        unlock(

            "explorer",

            "Дослідник"

        );

    }

});

/*=========================================
        SUPPORTER
=========================================*/

form.addEventListener(

    "submit",

    () => {

        unlock(

            "supporter",

            "Новобранець"

        );

    }

);

/*=========================================
            DAILY BONUS
=========================================*/

const bonusBtn = document.getElementById(

        "dailyBonus"

    );

const today =

    new Date()

        .toLocaleDateString();

if (bonusBtn) {

    bonusBtn.onclick = () => {

        const last =

            localStorage.getItem(

                "daily"

            );

        if (last === today) {

            toast(

                "Бонус вже отримано",

                "error"

            );

            return;

        }

        localStorage.setItem(

            "daily",

            today

        );

        confetti({

            particleCount: 220,

            spread: 120

        });

        toast(

            "+500 XP отримано!"

        );

        xp += 500;

        saveXP();

    };

}

/*=========================================
            XP
=========================================*/

let xp =

    Number(

        localStorage.getItem(

            "xp"

        )

    ) || 0;

function saveXP() {

    localStorage.setItem(

        "xp",

        xp

    );

    updateXP();

}

function updateXP() {

    const level =

        Math.floor(

            xp / 1000

        ) + 1;

    const bar =

        document.getElementById(

            "xpBar"

        );

    const text =

        document.getElementById(

            "xpText"

        );

    if (bar) {

        bar.style.width =

            (xp % 1000) / 10 + "%";

    }

    if (text) {

        text.innerHTML =

            `Рівень ${level} | XP ${xp}`;

    }

}

updateXP();

/*=========================================
        RANDOM XP
=========================================*/

setInterval(() => {

    xp += 5;

    saveXP();

}, 30000);

/*=========================================
            BADGES
=========================================*/

function checkBadges() {

    if (xp >= 1000) {

        unlock(

            "veteran",

            "Ветеран"

        );

    }

    if (xp >= 5000) {

        unlock(

            "collector",

            "Легенда"

        );

    }

}

setInterval(

    checkBadges,

    2000

);

/*=========================================
        RANDOM EVENT
=========================================*/

const events = [

    "🚔 Поліція проводить рейд!",

    "💰 Подвійна зарплата!",

    "🎉 Святковий івент!",

    "⚔️ Почався турнір!",

    "🚗 Автопробіг сім'ї!",

    "🔥 Збір біля бази!"

];

setInterval(() => {

    toast(

        events[

        Math.floor(

            Math.random()

            * events.length

        )

        ]

    );

}, 180000);

/*=========================================
            PLAYTIME
=========================================*/

let playTime = 0;

setInterval(() => {

    playTime++;

    localStorage.setItem(

        "playTime",

        playTime

    );

}, 60000);


/*=========================================
            WEATHER
=========================================*/

const weather = document.getElementById("weather");

async function loadWeather() {

    try {

        const res = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true"
        );

        const data = await res.json();

        weather.innerHTML = `
            🌡 ${data.current_weather.temperature}°C
            | 💨 ${data.current_weather.windspeed} км/год
        `;

    } catch {

        weather.innerHTML = "Погода недоступна";

    }

}

loadWeather();

/*=========================================
            DAY / NIGHT
=========================================*/

const hour = new Date().getHours();

if (hour >= 20 || hour <= 6) {

    document.body.classList.add("night");

} else {

    document.body.classList.add("day");

}

/*=========================================
            FPS
=========================================*/

const fpsBox = document.getElementById("fps");

let last = performance.now();

let frames = 0;

function fpsCounter() {

    frames++;

    const now = performance.now();

    if (now - last >= 1000) {

        fpsBox.innerHTML =

            frames + " FPS";

        frames = 0;

        last = now;

    }

    requestAnimationFrame(fpsCounter);

}

fpsCounter();

/*=========================================
            SERVER STATUS
=========================================*/

const server = document.getElementById("serverStatus");

const states = [

    "🟢 Онлайн",

    "🟢 Онлайн",

    "🟢 Онлайн",

    "🟡 Перезапуск",

    "🟢 Онлайн"

];

setInterval(() => {

    server.innerHTML =

        states[

        Math.floor(

            Math.random()

            * states.length

        )

        ];

}, 25000);

/*=========================================
            KEYS
=========================================*/

document.addEventListener("keydown", e => {

    if (e.key === "F1") {

        e.preventDefault();

        toast(

            "📜 Відкрито довідку"

        );

    }

    if (e.key === "F2") {

        e.preventDefault();

        settings.classList.toggle("active");

    }

    if (e.key === "F3") {

        e.preventDefault();

        musicBtn.click();

    }

});

/*=========================================
            NOTIFICATION
=========================================*/

function notify(title, text) {

    if (Notification.permission === "granted") {

        new Notification(title, {

            body: text,

            icon: "img/logo.png"

        });

    }

}

if (Notification.permission !== "granted") {

    Notification.requestPermission();

}

setTimeout(() => {

    notify(

        "Сталеве Братство",

        "Ласкаво просимо!"

    );

}, 4000);

/*=========================================
            CHART.JS
=========================================*/

const ctx = document

    .getElementById("onlineChart");

if (ctx) {

    new Chart(ctx, {

        type: "line",

        data: {

            labels: [

                "12",

                "13",

                "14",

                "15",

                "16",

                "17",

                "18"

            ],

            datasets: [{

                label: "Онлайн",

                data: [

                    24,

                    28,

                    31,

                    26,

                    35,

                    42,

                    38

                ],

                borderWidth: 3,

                fill: true,

                tension: .4

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            }

        }

    });

}

/*=========================================
        SCREEN SIZE
=========================================*/

const screenBox =

    document.getElementById(

        "screen"

    );

if (screenBox) {

    screenBox.innerHTML =

        window.innerWidth +

        "x" +

        window.innerHeight;

}

window.addEventListener(

    "resize",

    () => {

        screenBox.innerHTML =

            window.innerWidth +

            "x" +

            window.innerHeight;

    });

/*=========================================
        AUDIO VISUALIZER
=========================================*/

const audio = document.getElementById("bgMusic");
const canvas = document.getElementById("visualizer");

if (audio && canvas) {

    const ctx = canvas.getContext("2d");

    const audioCtx = new AudioContext();

    const src = audioCtx.createMediaElementSource(audio);

    const analyser = audioCtx.createAnalyser();

    src.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;

    const dataArray = new Uint8Array(bufferLength);

    function drawVisualizer() {

        requestAnimationFrame(drawVisualizer);

        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 2.5;

        let x = 0;

        for (let i = 0; i < bufferLength; i++) {

            const h = dataArray[i];

            ctx.fillStyle = `rgb(${h + 100},180,70)`;

            ctx.fillRect(

                x,

                canvas.height - h,

                barWidth,

                h

            );

            x += barWidth + 1;

        }

    }

    audio.addEventListener("play", () => {

        audioCtx.resume();

        drawVisualizer();

    });

}

/*=========================================
            FIREWORK
=========================================*/

function firework() {

    confetti({

        particleCount: 400,

        spread: 360,

        startVelocity: 55,

        origin: {

            x: Math.random(),

            y: Math.random() * .5

        }

    });

}

document

    .getElementById("firework")

    ?.addEventListener(

        "click",

        firework

    );

/*=========================================
            RGB MODE
=========================================*/

const rgb = document

    .getElementById("rgbMode");

let rgbInterval;

rgb?.addEventListener("change", () => {

    if (rgb.checked) {

        rgbInterval = setInterval(() => {

            document.documentElement.style

                .setProperty(

                    "--gold",

                    `hsl(${Math.random() * 360},100%,60%)`

                );

        }, 500);

    } else {

        clearInterval(rgbInterval);

        document.documentElement.style

            .setProperty(

                "--gold",

                "#f3c64b"

            );

    }

});

/*=========================================
            MATRIX MODE
=========================================*/

document.addEventListener(

    "keydown",

    e => {

        if (e.key === "m") {

            document.body.classList

                .toggle("matrix");

            toast("🟢 Matrix Mode");

        }

    });

/*=========================================
            RANDOM GIFT
=========================================*/

const gifts = [

    "💰 +1000 XP",

    "🎁 Рідкісний кейс",

    "🚗 Автомобіль",

    "💎 VIP на день",

    "🏆 Медаль",

    "🎉 Святковий бонус"

];

document

    .getElementById("giftBtn")

    ?.addEventListener("click", () => {

        const gift =

            gifts[

            Math.floor(

                Math.random()

                * gifts.length

            )

            ];

        confetti({

            particleCount: 180,

            spread: 90

        });

        toast(gift);

    });

/*=========================================
            MINI GAME
=========================================*/

const gameBtn =

    document.getElementById(

        "miniGame"

    );

gameBtn?.addEventListener(

    "click",

    () => {

        const num =

            Math.floor(

                Math.random() * 10

            ) + 1;

        const guess =

            prompt(

                "Вгадайте число від 1 до 10"

            );

        if (Number(guess) === num) {

            confetti({

                particleCount: 250,

                spread: 100

            });

            toast(

                "🎉 Ви перемогли!"

            );

        } else {

            toast(

                `😄 Було число ${num}`,

                "error"

            );

        }

    });

/*=========================================
            LUCKY WHEEL
=========================================*/

const wheel = [

    "XP",

    "VIP",

    "10000$",

    "Авто",

    "Нічого",

    "Бонус"

];

document

    .getElementById("wheel")

    ?.addEventListener("click", () => {

        const prize =

            wheel[

            Math.floor(

                Math.random()

                * wheel.length

            )

            ];

        toast(

            "🎰 Випало: " + prize

        );

    });

/*=========================================
        RANDOM CONFETTI
=========================================*/

setInterval(() => {

    if (Math.random() < 0.03) {

        confetti({

            particleCount: 120,

            spread: 70

        });

    }

}, 60000);

/*=========================================
        SECRET MESSAGE
=========================================*/

document.addEventListener(

    "keydown",

    e => {

        if (e.ctrlKey && e.key === "b") {

            toast(

                "⚔️ Сталеве Братство"

            );

        }

    });

/*=========================================
    LAZY IMAGES
=========================================*/

const lazyImages = document.querySelectorAll("img[data-src]");

const lazyObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const img = entry.target;

        img.src = img.dataset.src;

        img.onload = () => {

            img.classList.add("loaded");

        };

        lazyObserver.unobserve(img);

    });

}, {

    threshold: .15

});

lazyImages.forEach(img => lazyObserver.observe(img));

/*=========================================
        REVEAL ON SCROLL
=========================================*/

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-in");

        }

    });

}, {

    threshold: .2

});

revealItems.forEach(item => revealObserver.observe(item));

/*=========================================
        AUTO YEAR
=========================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*=========================================
        ONLINE TIMER
=========================================*/

const onlineTime = document.getElementById("onlineTime");

let seconds = 0;

setInterval(() => {

    seconds++;

    const h = Math.floor(seconds / 3600);

    const m = Math.floor((seconds % 3600) / 60);

    const s = seconds % 60;

    if (onlineTime) {

        onlineTime.innerHTML =

            `${String(h).padStart(2, "0")}:` +

            `${String(m).padStart(2, "0")}:` +

            `${String(s).padStart(2, "0")}`;

    }

}, 1000);

/*=========================================
        RANDOM LOADING TEXT
=========================================*/

const tips = [

    "⚔️ Честь понад усе",

    "🛡️ Допомагай своїм",

    "🚗 Дотримуйся правил",

    "💰 Заробляй чесно",

    "🏆 Будь найкращим",

    "🔥 Сталеве Братство назавжди"

];

const loadingText = document.getElementById("loadingText");

if (loadingText) {

    setInterval(() => {

        loadingText.innerHTML =

            tips[Math.floor(Math.random() * tips.length)];

    }, 5000);

}

/*=========================================
        DOUBLE CLICK HERO
=========================================*/

const hero = document.querySelector(".hero");

hero?.addEventListener("dblclick", () => {

    confetti({

        particleCount: 300,

        spread: 140

    });

    toast("🔥 Сталеве Братство");

});

/*=========================================
        PERFORMANCE INFO
=========================================*/

window.addEventListener("load", () => {

    const loadTime = performance.now();

    console.log(

        "Site loaded:",

        loadTime.toFixed(0),

        "ms"

    );

});

/*=========================================
        MEMORY CLEAN
=========================================*/

window.addEventListener("beforeunload", () => {

    clearInterval(rgbInterval);

});

/*=========================================
        MOBILE TOUCH
=========================================*/

document.querySelectorAll(".card")

    .forEach(card => {

        card.addEventListener(

            "touchstart",

            () => {

                card.classList.add("active");

            });

        card.addEventListener(

            "touchend",

            () => {

                card.classList.remove("active");

            });

    });

/*=========================================
        WELCOME
=========================================*/

setTimeout(() => {

    toast(

        "⚔️ Ласкаво просимо до Сталевого Братства!"

    );

}, 2500);

/*=========================================
        VERSION
=========================================*/

console.log(

    "%cSTALEVE BRATSTVO",

    "color:#f3c64b;font-size:26px;font-weight:bold;"

);

console.log(

    "Version 2.0 Premium"

);

/*=========================================
        END
=========================================*/

console.log(

    "All systems loaded successfully."

);