const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("translate-x-full");
  mobileNav.classList.toggle("translate-x-0");
  hamburger.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
  
const input = document.getElementById("mobileInput");
const submitBtn = document.getElementById("submitBtn");
const formSection = document.getElementById("formSection");
const warning = document.getElementById("warning");
const processing = document.getElementById("processing");
const downloadLink = document.getElementById("downloadLink");

submitBtn.addEventListener("click", () => {
  const value = input.value.trim();

  // Reset states
  warning.classList.add("hidden");
  processing.classList.add("hidden");
  downloadLink.classList.add("hidden");

  // Validate input
  if (!/^\d{10}$/.test(value)) {
    warning.classList.remove("hidden");
    return;
  }

  // Hide input and button
  formSection.classList.add("hidden");

  // Show processing
  processing.classList.remove("hidden");

  // Simulate delay before showing download link
  setTimeout(() => {
    processing.classList.add("hidden");
    downloadLink.classList.remove("hidden");
  }, 2000);
});

});

