//instructions examples have puncuation seperated by a space but since that isn't typically how sentences are written this should work with or without a space before.
function pigIt(str){
  return str.split(' ')
    .map(word => {
        let puncuation = ''
        //do we have puncuation
        if(word.match(/[.,:!?]/)) {
          puncuation = word.charAt(word.length - 1);
          //is the word only puncuation, if so just return it
          if(puncuation == word.charAt(0)) return puncuation;
          //remove puncuation to be added later after pig latin-ifying
          word = word.replace(/[.,:!?]/g, '')
        }
        return word.slice(1) + word.charAt(0) + 'ay' + puncuation;
    })
    .join(" ")
}