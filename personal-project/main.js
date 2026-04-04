import { hasLength, hasUpper, hasLower, hasNumber, hasSymbol } from "./checks.js";

const input = document.getElementById("passwordInput");
const strengthText = document.getElementById("strengthText");

const checks = [hasLength, hasUpper, hasLower, hasNumber, hasSymbol];

input.addEventListener("input", () => {
  const password = input.value;
  const score = evaluatePassword(password);
  updateUI(score);
});

function evaluatePassword(password) {
  let score = 0;
  checks.forEach(check => {
    if (check(password)) score++;
  });
  return score;
}

function updateUI(score) {
  let message = "";

  if (score <= 2) {
    message = "Weak";
    strengthText.style.color = "red";
  } else if (score === 3 || score === 4) {
    message = "Medium";
    strengthText.style.color = "orange";
  } else {
    message = "Strong";
    strengthText.style.color = "green";
  }

  strengthText.textContent = "Strength: " + message;
}