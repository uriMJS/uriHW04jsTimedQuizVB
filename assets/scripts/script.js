/* Script.js file for dynamic js Timed Quiz */ 
console.log("Starting script.js for Timed Quiz.");
const promptIndex = 0;
const choicesIndex = 1;
const correctIndex = 2;



var questions = createQuestions();
renderQuestion(questions[0]); /* put question to screen */


// Create questions (prompts, choices and correct answer).
function createQuestions() {
	let newQuestions = [];
	let question = []; 
	let prompt;
	let choices;
	let correct; 
	prompt = ["Please answer question1."];
	choices = ["Ans1", "Ans2", "Ans3", "Ans4"];
	correct = ["Ans1"]; 
	question.push(prompt, choices, correct);  // returns new array length
	console.log("First question=" + question); 
	newQuestions.push(question); 
	question = [];  // -----------------------------------------
	prompt = ["Please answer question2."];
	choices = ["Ans1", "Ans2", "Ans3", "Ans4"];
	correct = ["Ans2"]; 	
	question.push(prompt, choices, correct); 
	newQuestions.push(question);
	console.log("questions length " + newQuestions.length + " Questions=" + newQuestions); 
	return newQuestions; 
} // end funct createQuestions


// display a single question (prompt and choices)
function renderQuestion(question) {
var mainEl = document.getElementById("main"); 

var promptEl = document.createElement("section");
promptEl.id = "prompt";  // about 60% of screen 
mainEl.appendChild(promptEl); 

var promptTextEl = document.createElement("p");
promptTextEl.innerText = question[promptIndex]; 
promptEl.appendChild(promptTextEl);

// Now display the choices 
var choicesEl = document.createElement("section");
choicesEl.id = "choices";   // 3 or 4 possible answers to prompt 
mainEl.appendChild(choicesEl); 

var divEl = null;
var currentChoice = null; 
var choiceArray = question[choicesIndex];
var correctAnswer = question[correctIndex]; 
for (let choiceText of choiceArray) {
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
	// setAtrribute parenthesis + quotes executes checkAnswer method, also need event. (Its a hack, this.value undefined).
	// currentChoice.setAttribute("onclick", "checkAnswer(event)");  // This works. NOT onClick no capital C 
	currentChoice.addEventListener("click", checkAnswer);  // Also works
	currentChoice.value = correctAnswer;  // submission value (also correct ans).
	currentChoice.textContent = choiceText;  // display value 
	choicesEl.appendChild(divEl); 
	divEl.appendChild(currentChoice);  
} // end for-of choiceArray

var correctEl = document.createElement("section"); 
let correctTextEl = document.createElement("p");  // Correct or Incorrect goes here
correctTextEl.id = "correct-text-id";  
correctEl.innerText = " ";  // displays on screen
mainEl.appendChild(correctEl); 
correctEl.appendChild(correctTextEl); 

} // end funct renderQuestion
// --------------------------------------

function checkAnswer(event) { 
	event.preventDefault();
	console.log("Event is " + event); 
	// this seems to be "[object HTMLbuttonElement]" 
	console.log("Checking Answer: this.value = " + this.value); 
	let correctAns = event.target.value;
	let buttonTextContent = event.target.textContent;
	console.log("Event.target.value = " + correctAns);
	console.log("Event.target.textContent = " + buttonTextContent);
	alert("Checking answer. event.targer.value is " + correctAns); 
	let correctEl = document.getElementById("correct-text-id");
	correctEl.innerText = "Incorrect"; 
	if (correctAns.trim().toLowerCase() == buttonTextContent.trim().toLowerCase()) {
		correctEl.innerText = "Correct"; 
	}
} 