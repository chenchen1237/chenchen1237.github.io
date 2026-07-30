/* ======================================
   Shooting Stars Animation
====================================== */

const shootingContainer = document.getElementById("shooting-stars");

function createStar() {

    const star = document.createElement("div");
    star.className = "shooting-star";

    // Random starting position
    const startX = Math.random() * window.innerWidth + 200;
    const startY = Math.random() * (window.innerHeight / 2);

    star.style.left = startX + "px";
    star.style.top = startY + "px";

    // Random size
    const size = Math.random() * 120 + 120;
    star.style.width = size + "px";

    // Random animation duration
    const duration = Math.random() * 1.5 + 1.5;
    star.style.animationDuration = duration + "s";

    shootingContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, duration * 1000);

}

// Create a shooting star every 1–3 seconds
setInterval(() => {

    createStar();

}, Math.random() * 2000 + 1000);

// Initial stars
for (let i = 0; i < 3; i++) {

    setTimeout(createStar, i * 700);

}