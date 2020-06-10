// Business Logic
function translate(param) {
  const vowels = ["a", "e", "i", "o", "u"];
  let newParam = param;
  if (vowels.includes(param.charAt(0))) {
    newParam = param + "way"
  }
  return newParam
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