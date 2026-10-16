/* Script.js file for dynamic js Timed Quiz */ 
console.log("Starting script.js for Timed Quiz.");
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
currentChoice.onclick = checkAnswer;  // must use setAttribute
// currentChoice.setAttribute("onclick", "checkAnswer()");  // NOT onClick no capital C, function needs parenthesis
currentChoice.value = "a choice value";  // submission value
currentChoice.textContent = "a choice textContent"; 
choicesEl.appendChild(divEl); 
divEl.appendChild(currentChoice);  

divEl = document.createElement("div"); 
currentChoice = document.createElement("button");
currentChoice.setAttribute("class", "btn");  // .class doesnt seem to work here 
currentChoice.value = "a choice2 value";  // submission value
currentChoice.textContent = "a choice2 textContent";  // displays on screen
choicesEl.appendChild(divEl); 
divEl.appendChild(currentChoice); 

divEl = document.createElement("div"); 
currentChoice = document.createElement("button");
currentChoice.setAttribute("class", "btn");  // .class doesnt seem to work here 
currentChoice.value = "a choice3 value";  // submission value
currentChoice.textContent = "a choice3 textContent";  // displays on screen
choicesEl.appendChild(divEl); 
divEl.appendChild(currentChoice); 
// --------------------------------------

function checkAnswer(event) { 
	event.preventDefault();
	console.log(event); 
	// this seems to be "Object Window" 
	console.log("Checking Answer: event = " + this.value); 
	let val = ev.target.value;
	console.log(val);
	alert("Checking answer. Val is " + val); 
	let correctEl = document.createElement("p");
	correctEl.innerText = "Incorrect"; 
	document.getElementById("main").appendChild(correctEl); 
} 