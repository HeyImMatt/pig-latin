// Business Logic
function translate(param) {
  return param
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