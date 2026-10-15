/* Script.js file for dynamic js Timed Quiz */ 
alert("Starting script.js");
var mainEl = document.getElementById("main"); 

var promptEl = document.createElement("section");
promptEl.id = "prompt";  // about 60% of screen 
mainEl.appendChild(promptEl); 

var promptTextEl = document.createElement("p");
promptTextEl.innerText = "Prompt"; 
promptEl.appendChild(promptTextEl);

var choicesEl = document.createElement("section");
choicesEl.id = "choices";   // 3 or 4 possible answers to prompt 
mainEl.appendChild(choicesEl); 

var divEl = null;
var currentChoice = null; 
// cant get up-down display without div - argggh. Same as prior effort.
divEl = document.createElement("div");   
currentChoice = document.createElement("button"); 
currentChoice.setAttribute("class", "btn"); 
currentChoice.value = "a choice value";  // submission value
currentChoice.textContent = "a choice textContent"; 
choicesEl.appendChild(divEl); 
divEl.appendChild(currentChoice);  
 
currentChoice = document.createElement("button");
currentChoice.setAttribute("class", "btn");  // .class doesnt seem to work here 
currentChoice.value = "a choice2 value";  // submission value
currentChoice.textContent = "a choice2 textContent";  // displays on screen
choicesEl.appendChild(currentChoice); 

currentChoice = document.createElement("div");
currentChoice.setAttribute("class", "btn");  // .class doesnt seem to work here 
currentChoice.value = "a choice3 value";  // submission value
currentChoice.textContent = "a choice3 textContent";  // displays on screen
choicesEl.appendChild(currentChoice); 