const numberOfVowels = function(data) {
  let num=0;
  for(let letter of data){
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ){
      num+=1;
    }
  }
  return num;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));