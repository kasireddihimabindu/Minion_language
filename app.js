var name= prompt("What's your name ?");
 var welcomeMessage= "Hello!! " + name;
 alert(welcomeMessage);  

var translate_button= document.querySelector(".translate")
var input_text = document.querySelector("#input_text")


function clickEventHandler(){
    console.log("Clicked")
    console.log("Input - ",input_text.value)
}
translate_button.addEventListener("click",clickEventHandler);