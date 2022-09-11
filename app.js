var input = document.querySelector(".input");
var button = document.querySelector(".translate-button");
var output = document.querySelector(".output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function clickHandler() {
  console.log("Inside Click Handler")
  var userInput = input.value;
  fetch(constructUrl(userInput))
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        output.classList.remove('output-error');
        var outputResponse = data.contents.translated;
        output.innerText = outputResponse;
      }
      if(data.error) {
        var outputResponse = data.error.message;
        output.innerText = outputResponse;
        output.classList.add('output-error');
      }
    })
}
console.log('before click handler')
button.addEventListener('click', clickHandler);
