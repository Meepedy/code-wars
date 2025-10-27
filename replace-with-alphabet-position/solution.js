function alphabetPosition(text) {
  return text.replace(/[^A-Za-z]/g, '')
    .toLowerCase()
    .split('')
    .map(char => char.charCodeAt() - 96)
    .join(" ");
}