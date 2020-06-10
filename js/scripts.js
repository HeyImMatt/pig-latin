// Business Logic
function translate(startingSentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
  let translatedSentence = startingSentence;
  if (vowels.includes(startingSentence.charAt(0).toLowerCase())) {
    translatedSentence = startingSentence + "way"
  } else if (consonants.includes(startingSentence.charAt(0).toLowerCase())) {
    for (let i = 0; i < startingSentence.length; i++) {
      if (vowels.includes(startingSentence.charAt(i))) {
        break;
      } else if ((translatedSentence.charAt(0) === 'q'|| translatedSentence.charAt(0) === 'Q') && (translatedSentence.charAt(1) === 'u'|| translatedSentence.charAt(1) === 'U')) {
        translatedSentence = translatedSentence.substring(2, translatedSentence.length) + translatedSentence.slice(0,2);
      }
      else {
        const letter = startingSentence.charAt(i)
        translatedSentence = translatedSentence.substring(1, translatedSentence.length) + letter;
      }
    }
    translatedSentence += "ay";
  }
  return translatedSentence
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