export function hasLength(pw) {
  return pw.length >= 8;
}

export function hasUpper(pw) {
  return /[A-Z]/.test(pw);
}

export function hasLower(pw) {
  return /[a-z]/.test(pw);
}

export function hasNumber(pw) {
  return /[0-9]/.test(pw);
}

export function hasSymbol(pw) {
  return /[^A-Za-z0-9]/.test(pw);
}