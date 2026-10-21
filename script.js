// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// CLOSE MOBILE MENU AFTER CLICK

const links = document.querySelectorAll("#navLinks a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// HERO TEXT ANIMATION

const typingText =
    document.getElementById("typing-text");

const words = [
    "digital experiences.",
    "useful products.",
    "real solutions.",
    "creative ideas."
];

let index = 0;

setInterval(function() {

    index++;

    if (index >= words.length) {
        index = 0;
    }

    typingText.style.opacity = "0";

    setTimeout(function() {

        typingText.textContent =
            words[index];

        typingText.style.opacity = "1";

    }, 200);

}, 2200);


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();