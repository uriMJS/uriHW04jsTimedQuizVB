/* Script.js file for dynamic js Timed Quiz */ 
alert("Starting script.js");
var mainEl = document.getElementById("main"); 
var promptEl = document.createElement("section");
promptEl.id = "Prompt";  // about 60% of screen 
mainEl.appendChild(promptEl); 
var promptTextEl = document.createElement("p");
promptTextEl.innerText = "Prompt"; 
promptEl.appendChild(promptTextEl);
 