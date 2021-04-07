const caesar = (word, shit = 0) => {
    let result = ""
    let num = (shit%26 + 26) % 26;
    for (let i = 0; i < word.length ; i++) {
      let alphaCha = word[i].charCodeAt();
      if ((alphaCha >= 65 && alphaCha <= 90)) {
        result += String.fromCharCode((alphaCha - 'A'.charCodeAt(0) + num)%26 
          + 'A'.charCodeAt(0)) ;
      } else if(alphaCha >= 97 && alphaCha <= 122){
        result += String.fromCharCode((alphaCha-'a'.charCodeAt(0) + num) % 26 
         + 'a'.charCodeAt(0));
      } else {
        result += word[i]
      }
   }
   return result;
  }
  
export default caesar;