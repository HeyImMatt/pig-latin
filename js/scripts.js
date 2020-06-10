//UI Logic
$(document).ready(function () {
  $("#input").submit(function (event) {
    event.preventDefault()
    const yourSentence = $("#your-sentence").val();
    const result = translate(yourSentence);
    $("#output").append(`<p>${result}</p>`);
  });
});

// Business Logic
function translate(startingSentence) {
  const wordArray = startingSentence.split(" ");
  const pigArray = wordArray.map(word => {
    return translateWord(word)
  });
  return pigArray.join(" ")
}

function translateWord(startingWord) {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
  const firstLetter = startingWord.charAt(0).toLowerCase();
  let translatedWord = startingWord;
  
  if (vowels.includes(firstLetter)) { 
    translatedWord = startingWord + "way"
  } else if (consonants.includes(firstLetter)) {
    for (let i = 0; i < startingWord.length; i++) { //starts loop to find consecutive consonants
      if (vowels.includes(startingWord.charAt(i))) {
        break;
      } else if (translatedWord.charAt(0).toLowerCase() === 'q' && translatedWord.charAt(1).toLowerCase() === 'u') { //tests for qu within the word to move them to end together
        translatedWord = translatedWord.substring(2, translatedWord.length) + translatedWord.slice(0, 2);
      }
      else {
        translatedWord = translatedWord.substring(1, translatedWord.length) + startingWord.charAt(i); // moves consonants to the end of the word
      }
    }
    translatedWord += "ay";
  }
  return punctuationCheck(translatedWord)
}

function punctuationCheck(word) {
  const punctuation = [ ",", "!", ".", "(", ")", "?", ":", ";" ]
  let punctuatedWord;

  for (i = 0; i < word.length; i++) {
    if (punctuation.includes(word.charAt(i))) {
      punctuatedWord = word.slice(0, i) + word.slice(i + 1, word.length) + word.slice(i, i + 1);
      return punctuatedWord;
    }
  }
  return word;
}