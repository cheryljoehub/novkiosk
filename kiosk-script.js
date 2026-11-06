/* =========================================================
   EDIT THIS SECTION to point each tile at your real page/URL.
   Keys must match the data-key attributes in kiosk.html
   ========================================================= */
const LINKS = {
  faculty:      "https://cheryljoehub.github.io/fac_2/",
  careerFinder: "career.html",       // the career finder quiz page
  jobs:         "https://cheryljoehub.github.io/job_2/",
  wouldYouRather: "wyr.html",
  programs:     "degree.html"
};

/* ========================================================= */

function goBack() {
  window.history.back();
}

const kiosk = document.querySelector(".kiosk");
const bookingScreen = document.getElementById("booking-screen");
const homeSections = document.querySelectorAll(".kiosk-header, #tiles, .kiosk-footer");
const bookingForm = document.getElementById("booking-form");
const googleSubmitForm = document.getElementById("google-submit");
const keyboard = document.getElementById("screen-keyboard");
const keyboardKeys = document.getElementById("keyboard-keys");
const keyboardLabel = document.getElementById("keyboard-label");
const bookingError = document.getElementById("booking-error");
const bookingSuccess = document.getElementById("booking-success");
let activeInput = null;
let shiftEnabled = false;
let isSubmitting = false;

const FULL_KEYBOARD_ROWS = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["shift", "z", "x", "c", "v", "b", "n", "m"],
  ["@", ".", ",", "?", "!", "'", "/", "(", ")", ":"],
  ["-", "_", "&", "space", "backspace", "clear"]
];
const KEYBOARD_LAYOUTS = {
  full: FULL_KEYBOARD_ROWS,
  letters: [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["shift", "z", "x", "c", "v", "b", "n", "m", "backspace"],
    ["space", "clear"]
  ],
  email: [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["shift", "z", "x", "c", "v", "b", "n", "m", "backspace"],
    ["@", ".", "_", "-", "+", "space", "clear"]
  ],
  numeric: [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["clear", "0", "backspace"]
  ]
};
let keyboardMode = "full";

function renderKeyboard() {
  keyboardKeys.replaceChildren();
  const rows = KEYBOARD_LAYOUTS[keyboardMode];
  keyboard.style.setProperty("--keyboard-row-count", rows.length);
  rows.forEach(row => {
    const rowElement = document.createElement("div");
    rowElement.className = "keyboard-row";
    rowElement.style.gridTemplateColumns = `repeat(${row.length}, minmax(0, 1fr))`;
    row.forEach(key => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.key = key;
      button.className = `keyboard-key${["space", "backspace", "shift", "clear"].includes(key) ? " keyboard-key-wide" : ""}`;
      button.textContent = ({
        backspace: "⌫",
        shift: "⇧",
        space: "Space",
        clear: "Clear"
      })[key] || (shiftEnabled ? key.toUpperCase() : key);
      button.setAttribute("aria-label", ({
        backspace: "Backspace",
        shift: "Shift",
        space: "Space",
        clear: "Clear"
      })[key] || key);
      rowElement.append(button);
    });
    keyboardKeys.append(rowElement);
  });
}

function showKeyboard(input) {
  activeInput = input;
  keyboardMode = input.dataset.keyboardMode || "full";
  keyboard.classList.toggle("keyboard-numeric", keyboardMode === "numeric");
  const fieldLabel = input.closest(".booking-question, label");
  keyboardLabel.textContent = fieldLabel?.querySelector("legend")?.textContent.trim()
    || fieldLabel?.childNodes[0]?.textContent.trim()
    || "Enter your answer";
  keyboard.hidden = false;
  keyboard.setAttribute("aria-hidden", "false");
  renderKeyboard();
}

function hideKeyboard() {
  keyboard.hidden = true;
  keyboard.setAttribute("aria-hidden", "true");
  activeInput = null;
}

function handleKeyboardInput(key) {
  if (!activeInput) return;
  if (key === "shift") {
    shiftEnabled = !shiftEnabled;
    renderKeyboard();
    return;
  }
  if (key === "clear") {
    activeInput.value = "";
    return;
  }
  if (key === "backspace") {
    activeInput.value = activeInput.value.slice(0, -1);
    return;
  }
  activeInput.value += key === "space" ? " " : (shiftEnabled ? key.toUpperCase() : key);
  if (shiftEnabled) {
    shiftEnabled = false;
    renderKeyboard();
  }
}

function showBookingScreen(isVisible) {
  kiosk.classList.toggle("booking-open", isVisible);
  bookingScreen.hidden = !isVisible;
  bookingScreen.setAttribute("aria-hidden", String(!isVisible));
  homeSections.forEach(section => section.setAttribute("aria-hidden", String(isVisible)));
  if (isVisible) {
    document.getElementById("booking-back").focus();
  } else {
    document.querySelector('[data-key="bookStudio"]').focus();
  }
}

document.querySelectorAll(".tile").forEach(tile => {
  tile.addEventListener("click", () => {
    const key = tile.dataset.key;
    if (key === "bookStudio") {
      showBookingScreen(true);
      return;
    }

    const url = LINKS[key];

    if (!url) {
      console.warn(`No link set for "${key}" yet. Edit LINKS in kiosk-script.js.`);
      return;
    }

    window.location.href = url;
  });
});

document.getElementById("booking-back").addEventListener("click", () => {
  hideKeyboard();
  showBookingScreen(false);
});

bookingForm.addEventListener("click", event => {
  const input = event.target.closest(".booking-text-input");
  if (input) showKeyboard(input);
});

keyboardKeys.addEventListener("click", event => {
  const button = event.target.closest("[data-key]");
  if (button) handleKeyboardInput(button.dataset.key);
});

document.getElementById("keyboard-done").addEventListener("click", hideKeyboard);

function getBookingEntryValues() {
  const values = [];
  bookingForm.querySelectorAll(".booking-text-input[data-entry]").forEach(input => {
    if (input.value.trim()) values.push([input.dataset.entry, input.value.trim()]);
  });

  bookingForm.querySelectorAll(".booking-choices[data-entry]").forEach(group => {
    const selected = [...group.querySelectorAll("input:checked")].map(input => input.value);
    const otherInput = group.querySelector(".booking-other-input");
    if (otherInput && selected.includes("Other") && otherInput.value.trim()) {
      selected[selected.indexOf("Other")] = `Other: ${otherInput.value.trim()}`;
    }
    selected.forEach(value => values.push([group.dataset.entry, value]));
  });

  return values;
}

function validateBookingForm() {
  const requiredTextInputs = [...bookingForm.querySelectorAll(".booking-text-input[data-required='true'][data-entry]")];
  const emptyInput = requiredTextInputs.find(input => !input.value.trim());
  const invalidEmail = bookingForm.querySelector("[data-input-type='email']");
  const invalidEmailValue = invalidEmail?.value.trim()
    && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(invalidEmail.value.trim());
  const emptyChoice = [...bookingForm.querySelectorAll(".booking-choices[data-required='true']")]
    .find(group => !group.querySelector("input:checked"));
  const incompleteOther = [...bookingForm.querySelectorAll(".booking-choices")]
    .find(group => group.querySelector("input[value='Other']:checked")
      && !group.querySelector(".booking-other-input")?.value.trim());

  if (emptyInput || invalidEmailValue || emptyChoice || incompleteOther) {
    bookingError.textContent = invalidEmailValue
      ? "Please enter a valid email address."
      : incompleteOther
        ? "Please fill in the selected Other option."
        : "Please complete all required fields before submitting.";
    bookingError.hidden = false;
    const invalidField = invalidEmailValue ? invalidEmail : emptyInput
      || incompleteOther || emptyChoice;
    invalidField?.scrollIntoView({ behavior: "smooth", block: "center" });
    return false;
  }

  bookingError.hidden = true;
  return true;
}

bookingForm.addEventListener("submit", event => {
  event.preventDefault();
  hideKeyboard();
  if (!validateBookingForm()) return;

  googleSubmitForm.querySelectorAll("[data-generated-entry]").forEach(input => input.remove());
  getBookingEntryValues().forEach(([entryId, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = `entry.${entryId}`;
    input.value = value;
    input.dataset.generatedEntry = "true";
    googleSubmitForm.append(input);
  });

  isSubmitting = true;
  bookingSuccess.hidden = true;
  googleSubmitForm.submit();
});

document.querySelector('iframe[name="studio-submit-frame"]').addEventListener("load", () => {
  if (!isSubmitting) return;
  isSubmitting = false;
  bookingSuccess.hidden = false;
  bookingSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("booking-clear").addEventListener("click", () => {
  bookingForm.reset();
  bookingError.hidden = true;
  bookingSuccess.hidden = true;
});

/* Simple live clock and date in the footer */
function updateClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
  el.textContent = `${time} • ${date}`;
}
updateClock();
setInterval(updateClock, 15000);
