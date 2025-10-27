function pigIt(str){
  return str.split(' ')
    .map(word => {
        let puncuation = ''
        if(word.match(/[.,:!?]/)) {
          puncuation = word.charAt(word.length - 1);
          if(puncuation == word.charAt(0)) return puncuation;
          word = word.replace(/[.,:!?]/g, '')
        }
        return word.slice(1) + word.charAt(0) + 'ay' + puncuation;
    })
    .join(" ")
}