/* ============================================================
   IDLE SCREENSAVER SETTINGS
   Tweak these two numbers to change behavior.
   ============================================================ */

const IDLE_TIMEOUT_MS = 25000;   // how long with no touch before it appears (25s)
const SLIDE_INTERVAL_MS = 15000;  // how long each slide stays up (15s)

/* ============================================================
   CONTENT BANK
   Mix of quotes, fun facts, and calls-to-action. Add, remove, or
   edit freely — the rotation adjusts automatically.
   Each item is one of:
     { type: "quote", text, author }
     { type: "fact",  text }
     { type: "cta",   title, sub }
   ============================================================ */

const SLIDES = [

  { type: "image", src: "images/logos/23.png", alt: "College of Business logo" },
  { type: "image", src: "images/logos/1.png", alt: "College of Business logo" },
  { type: "image", src: "images/logos/21.jpg", alt: "College of Business logo" },
  { type: "cta", title: "Tap a Tile to Get Started", sub: "Career Finder, Job Postings, Faculty, and more" }];

/* ============================================================
   RENDER + IDLE-DETECTION LOGIC — no need to touch below this line
   ============================================================ */

let idleTimer = null;
let slideTimer = null;
let currentSlide = 0;
let overlay, contentEl, dotsEl, actionEl;
function buildSlideHTML(slide) {
  if (slide.type === "image") {
    return `<img class="ss-image" src="${slide.src}" alt="${slide.alt}">`;
  }
  if (slide.type === "quote") {
    return `
      <p class="ss-quote">&ldquo;${slide.text}&rdquo;</p>
      <p class="ss-author">&mdash; ${slide.author}</p>
    `;
  }
  if (slide.type === "fact") {
    return `
      <p class="ss-fact-label">Did You Know</p>
      <p class="ss-quote">${slide.text}</p>
    `;
  }
  // cta
  return `
    <p class="ss-cta-title">${slide.title}</p>
    <p class="ss-cta-sub">${slide.sub}</p>
  `;
}

function buildDots() {
  dotsEl.innerHTML = SLIDES.map((_, i) =>
    `<span class="ss-dot${i === currentSlide ? " active" : ""}"></span>`
  ).join("");
}
// function to handle idle screensaver logic

function showSlide(index) {
  currentSlide = index;
  contentEl.classList.remove("in");
  overlay.classList.toggle("image-slide", SLIDES[currentSlide].type === "image");
  setTimeout(() => {
    contentEl.innerHTML = buildSlideHTML(SLIDES[currentSlide]);
    buildDots();
    // force reflow so the transition replays
    void contentEl.offsetWidth;
    contentEl.classList.add("in");
  }, 250);
}

function shuffleSlides() {
  for (let index = SLIDES.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [SLIDES[index], SLIDES[randomIndex]] = [SLIDES[randomIndex], SLIDES[index]];
  }
}

function startSlideshow() {
  shuffleSlides();
  showSlide(0);
  slideTimer = setInterval(() => {
    const next = (currentSlide + 1) % SLIDES.length;
    showSlide(next);
  }, SLIDE_INTERVAL_MS);
}

function stopSlideshow() {
  clearInterval(slideTimer);
  slideTimer = null;
}

function showScreensaver() {
  overlay.classList.add("visible");
  overlay.setAttribute("aria-hidden", "false");
  startSlideshow();
}

function hideScreensaver() {
  overlay.classList.remove("visible");
  overlay.setAttribute("aria-hidden", "true");
  stopSlideshow();
}

function resetIdleTimer() {
  clearTimeout(idleTimer);
  if (document.querySelector(".kiosk.booking-open")) return;
  if (overlay.classList.contains("visible")) {
    hideScreensaver();
  }
  idleTimer = setTimeout(showScreensaver, IDLE_TIMEOUT_MS);
}

function init() {
  overlay = document.getElementById("screensaver");
  contentEl = document.getElementById("ss-content");
  dotsEl = document.getElementById("ss-dots");
  actionEl = document.getElementById("ss-action");

  // any interaction resets the idle clock and dismisses the screensaver
  ["touchstart", "mousedown", "mousemove", "keydown", "click"].forEach(evt => {
    document.addEventListener(evt, resetIdleTimer, { passive: true });
  });

  actionEl.addEventListener("click", resetIdleTimer);
  
  resetIdleTimer();
}

init();
