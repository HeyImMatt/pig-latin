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
  let translatedWord = startingWord;
  if (vowels.includes(startingWord.charAt(0).toLowerCase())) {
    translatedWord = startingWord + "way"
  } else if (consonants.includes(startingWord.charAt(0).toLowerCase())) {
    for (let i = 0; i < startingWord.length; i++) {
      if (vowels.includes(startingWord.charAt(i))) {
        break;
      } else if ((translatedWord.charAt(0) === 'q'|| translatedWord.charAt(0) === 'Q') && (translatedWord.charAt(1) === 'u'|| translatedWord.charAt(1) === 'U')) {
        translatedWord = translatedWord.substring(2, translatedWord.length) + translatedWord.slice(0,2);
      }
      else {
        const letter = startingWord.charAt(i)
        translatedWord = translatedWord.substring(1, translatedWord.length) + letter;
      }
    }
    translatedWord += "ay";
  }
  return translatedWord
}
//UI Logic
$(document).ready(function () {
  $("#input").submit(function (event) {
    event.preventDefault()
    const yourSentence = $("#your-sentence").val();
    const result = translate(yourSentence);

    $("#output").append(`<p>${result}</p>`);
  });
});