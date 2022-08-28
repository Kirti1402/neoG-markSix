var input = document.querySelector("#input");
var button = document.querySelector("#translate-button");
var output = document.querySelector(".output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function clickHandler() {
  var userInput = input.value;
  // output.innerText="hey you are playing the fun game banana translation . We are using api to translate the english language to gibbrish"+
  // "Are you a fan of minions? Did you know that the gibberish they say is an actual language. Use the translator to convert your text from English to Minion speak or Banana language.";

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
button.addEventListener("click", clickHandler);
