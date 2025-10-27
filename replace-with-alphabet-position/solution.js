//some regex to remove anything that isn't a letter from the string and then charCodeAt returns UTF-16. a = 97, b = 98, c = 99, etc... so subtracting 96 gets us the alphabet position 
function alphabetPosition(text) {
  return text.replace(/[^A-Za-z]/g, '')
    .toLowerCase()
    .split('')
    .map(char => char.charCodeAt() - 96)
    .join(" ");
}