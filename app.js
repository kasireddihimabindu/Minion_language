var name= prompt("What's your name ?");
 var welcomeMessage= "Hello!! " + name;
 alert(welcomeMessage);  

var translate_button= document.querySelector(".translate");
var input_text = document.querySelector("#input_text");
var output_text = document.querySelector("#output");
 var serverURL ="https://api.funtranslations.com/translate/minion.json"

 function getTranslationURL(txt){
    return serverURL + "?" + "text=" +txt;
 }
function clickEventHandler(){
   // document.querySelector('#output').innerText = "agyudhkjdh" + input_text.value;
   var txtInput= input_text.value; //taking input
   //calling
   console.log('txtInput : ',txtInput);
   fetch(getTranslationURL(txtInput))
    .then(response => response.json())
   .then(res =>{
        //console.log(json.contents.translated)
        var translatedText = res.contents.translated;
        output_text.innerText = translatedText;
   })
   .catch(errorhandler)
};

function errorhandler(error){
    console.log("Error occured",error);
    //alert("Something went wrong with the server! Please try again after sometime")
}

translate_button.addEventListener("click",clickEventHandler);