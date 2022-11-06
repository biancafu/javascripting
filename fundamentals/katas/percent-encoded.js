const urlEncode = function(text) {
  let output="";
  text=text.trim();
  for (let letter of text){
    if (letter === " "){
      output+="%20";
    }
    else{
      output+=letter;
    }
  }
  return output;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));