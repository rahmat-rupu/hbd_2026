/* Midnight Glow */
const h = new Date().getHours();
if (h >= 0 && h <= 2) {
  document.body.style.filter = "brightness(1.15)";
}

/* Subtitle typing effect */
const subtitles = [
  "You make my world shine every day ✨",
  "Forever my happiness 💖",
  "My heart beats for you ❤️",
  "You are my sunshine 🌞",
  "Lucky to have you 💕",
];

const subtitleEl = document.getElementById("subtitle");
let index = 0;

function typeSubtitle(text, callback) {
  subtitleEl.innerText = "";
  let i = 0;
  const typing = setInterval(() => {
    subtitleEl.innerText += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(typing);
      setTimeout(callback, 2000); // wait 2s then next
    }
  }, 80);
}

function showNextSubtitle() {
  typeSubtitle(subtitles[index], () => {
    index = (index + 1) % subtitles.length;
    showNextSubtitle();
  });
}

// Start subtitle animation
showNextSubtitle();

/* Memories image click - optional popup */
const galleryImages = document.querySelectorAll(".memories-grid img");
galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    alert("Memory captured 💖"); // Customize secret message if needed
  });
});
