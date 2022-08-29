var name= prompt("What's your name ?");
 var welcomeMessage= "Hello!! " + name;
 alert(welcomeMessage);  

var translate_button= document.querySelector(".translate");
var input_text = document.querySelector("#input_text");
var output_text = document.querySelector("#output");

function clickEventHandler(){
    console.log(output_text);
    document.querySelector('#output').innerText = "agyudhkjdh" + input_text.value;
};

translate_button.addEventListener("click",clickEventHandler);