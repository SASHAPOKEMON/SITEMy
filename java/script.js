document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector(".animation-background");
    const dotCount = 15; // Количество точек

    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 5}s`;
        background.appendChild(dot);
    }
});
