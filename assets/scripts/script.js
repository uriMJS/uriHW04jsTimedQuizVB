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
currentChoice.setAttribute("class", "btn");  // must use setAttribute, not elem.class 
// See https://www.xjavascript.com/blog/how-to-set-onclick-with-javascript/ for event handling tutorial.
// 3 Ways to add event handler. 
// 1. In-line => in html (likley not possible here), 2. Property assignment => elem.onclick, 3. addEventListener.
// event automatically passed to elem.onclick and addEventListener.
// parenthesis - for in-line only. For elem.onclick and addEventListener using parenthesis will execute immediately.
// quotes - for in-line only.  Reference used for elem.onclick and addEventListener 
// currentChoice.onclick = checkAnswer;  // This works
currentChoice.addEventListener("click", checkAnswer);  // Also works
// setAtrribute parenthesis + quotes executes checkAnswer method, but event null
// currentChoice.setAttribute("onclick", "checkAnswer()");  // NOT onClick no capital C 
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
	console.log("Event is " + event); 
	// this seems to be "[object HTMLbuttonElement]" 
	console.log("Checking Answer: this.value = " + this.value); 
	let val = event.target.value;
	console.log("Event.target.value = " + val);
	alert("Checking answer. Val is " + val); 
	let correctEl = document.createElement("p");
	correctEl.innerText = "Incorrect"; 
	document.getElementById("main").appendChild(correctEl); 
} 