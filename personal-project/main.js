const input = document.getElementById("passwordInput");
const strengthText = document.getElementById("strengthText");

const checks = [
  hasLength,
  hasUpper,
  hasLower,
  hasNumber,
  hasSymbol
];

input.addEventListener("input", () => {
  const password = input.value;
  const score = evaluatePassword(password);
  updateUI(score);
});

function evaluatePassword(password) {
  let score = 0;

  checks.forEach(check => {
    if (check(password)) {
      score++;
    }
  });

  return score;
}

function hasLength(pw) {
  return pw.length >= 8;
}

function hasUpper(pw) {
  return /[A-Z]/.test(pw);
}

function hasLower(pw) {
  return /[a-z]/.test(pw);
}

function hasNumber(pw) {
  return /[0-9]/.test(pw);
}

function hasSymbol(pw) {
  return /[^A-Za-z0-9]/.test(pw);
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