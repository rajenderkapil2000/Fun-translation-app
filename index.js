var textArea = document.querySelector("#textarea");
var button = document.querySelector("#button");
var output = document.querySelector("#output");

var serevrUrl = "https://api.funtranslations.com/translate/hodor.json"

function getTranslationURL(input){
    return serevrUrl + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured ", error)
  }

function clickHandler(){
    var inputText = textArea.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json=> {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
   .catch(errorHandler)
}


button.addEventListener('click', clickHandler)