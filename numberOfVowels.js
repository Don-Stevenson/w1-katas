function numberOfVowels(input){
  let vowelNum = 0;
  for (i = 0; i < input.length; i++){
     if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
       vowelNum ++;
    }
  }
 return vowelNum;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
