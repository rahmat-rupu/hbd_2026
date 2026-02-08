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
/* 🎧 Force autoplay on all devices */
const bgMusic = document.getElementById("bgMusic");

// Try autoplay immediately
bgMusic.play().catch(() => {
  // If blocked, wait for any user interaction
  document.addEventListener(
    "click",
    () => {
      bgMusic.muted = false;
      bgMusic.play();
    },
    { once: true },
  );
});

// Unmute after load (desktop works instantly)
window.addEventListener("load", () => {
  setTimeout(() => {
    bgMusic.muted = false;
  }, 800);
});

/* ===== Scroll Reveal Animation ===== */
const revealElements = document.querySelectorAll(".reveal");
const letterReveal = document.querySelector(".letter-reveal");
const memoryImages = document.querySelectorAll(".memories-grid img");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("active");
    }
  });

  if (letterReveal) {
    const letterTop = letterReveal.getBoundingClientRect().top;
    if (letterTop < triggerBottom) {
      letterReveal.classList.add("active");
    }
  }

  memoryImages.forEach((img, index) => {
    const imgTop = img.getBoundingClientRect().top;
    if (imgTop < triggerBottom) {
      setTimeout(() => {
        img.classList.add("show");
      }, index * 120);
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* 💌 Letter Handwritten Reveal */
const letterBox = document.querySelector(".letter-box");
const letterLines = document.querySelectorAll(".letter-text span");

let letterPlayed = false;

const revealLetterLines = () => {
  const triggerPoint = window.innerHeight * 0.75;
  const boxTop = letterBox.getBoundingClientRect().top;

  if (boxTop < triggerPoint && !letterPlayed) {
    letterPlayed = true;
    letterBox.classList.add("emotion-active");

    letterLines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("show-line");
      }, index * 500);
    });
  }
};

window.addEventListener("scroll", revealLetterLines);
window.addEventListener("load", revealLetterLines);
/* 📸 Memories Image Focus */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".memories-grid img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
/* 🦋 Footer Secret Love */
const footer = document.querySelector("footer");
const secretPopup = document.getElementById("secretPopup");
const closeSecret = document.querySelector(".close-secret");

footer.style.cursor = "pointer";

footer.addEventListener("click", () => {
  secretPopup.classList.add("active");
});

closeSecret.addEventListener("click", () => {
  secretPopup.classList.remove("active");
});

secretPopup.addEventListener("click", (e) => {
  if (e.target === secretPopup) {
    secretPopup.classList.remove("active");
  }
});
