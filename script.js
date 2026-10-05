const button = document.getElementById("messageBtn");
const surprise = document.getElementById("surprise");

button.addEventListener("click", () => {
  surprise.classList.toggle("show");

  if (surprise.classList.contains("show")) {
    button.textContent = "Thank You, Teacher! 💗";
    createConfetti();
  } else {
    button.textContent = "Open a Little Surprise ✨";
  }
});

function createConfetti() {
  const symbols = ["✦", "✧", "♡", "★", "•"];

  for (let i = 0; i < 25; i++) {
    const piece = document.createElement("span");
    piece.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-20px";
    piece.style.fontSize =
      (12 + Math.random() * 18) + "px";
    piece.style.zIndex = "9999";
    piece.style.pointerEvents = "none";
    piece.style.transition =
      "transform 2.2s ease-in, opacity 2.2s ease-in";

    document.body.appendChild(piece);

    requestAnimationFrame(() => {
      piece.style.transform =
        translate(${(Math.random() - .5) * 160}px, 105vh) rotate(${Math.random() * 720}deg);
      piece.style.opacity = "0";
    });

    setTimeout(() => piece.remove(), 2400);
  }
}
