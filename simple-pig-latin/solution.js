function pigIt(str){
  return str.split(' ')
    .map(word => {
      if(word.match(/[a-z]/i)){
        let wordArray = word.split('');
        wordArray.push(wordArray.shift());
        wordArray.push('ay');
        return wordArray.join('');
      }
      return word;
    })
    .join(" ")
}