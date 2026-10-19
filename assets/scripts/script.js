/* Script.js file for dynamic js Timed Quiz */ 
console.log("Starting script.js for Timed Quiz.");
const promptIndex = 0;
const choicesIndex = 1;
const correctIndex = 2;

const maxTime = 10;       // in seconds
const wrongPenalty = 5;   // Penalty for wrong answers 

var questions = createQuestions();
// renderQuestion(questions[0]);  /* put question to screen */
// init(); 
renderMain(); 


function init() {
	globalEl = document.getElementById('DOM-global'); 
}


// Create questions (prompts, choices and correct answer).
function createQuestions() {
	let questionsArray = [];
	let question = []; 
	let prompt;
	let choices;
	let correct; 
    prompt = "Commonly used data types do NOT include: ";
    choices = ["strings", "booleans", "alerts", "numbers"];
    correct = "alerts";
    question = [prompt, choices, correct];  // cant reassign to a constant.
	// console.log("First question=" + question); 
    questionsArray.push(question);
    prompt = "Arrays in javascript can be used to store: ";
    choices = ["numbers and strings", "other arrays", "booleans", "all of the above"];
    correct = "all of the above";
    question = [prompt, choices, correct];
    questionsArray.push(question);
    prompt = "String values must be enclosed in _________ when being assigned to variables";
    choices = ["commas", "curley brackets", "quotes", "parenthesis", "slashes"];
    correct = "quotes";
    question = [prompt, choices, correct];
    questionsArray.push(question);    
    prompt = "A very useful tool during development and debugging for printing values is";
    choices = ["JavaScript", "terminal/bash", "for loops", "console.log"];
    correct = "console.log";
    question = [prompt, choices, correct];
    // questionsArray.push(question);    
	// console.log("questions length " + questionsArray.length + " Questions=" + questionsArray); 
	return questionsArray; 
} // end funct createQuestions

// Remove the wrapper div under main, and then recreate it with no content. 
// This does NOT change the Time Left
function removeMainWrapperContent( ) {
	const wrapperEl = document.getElementById('removable-main-wrapper');
	wrapperEl.remove();  // remove wrapper and all elements in it.
	
	const mainEl = document.getElementById("main");  // recreate and insert mainWrapper element
	const newWrapperEl = document.createElement("section");
	newWrapperEl.id = 'removable-main-wrapper'; 
	mainEl.appendChild(newWrapperEl); 
} // end removeMainWrapperContent

// Remove the QA section under the main wrapper div (but NOT the timer), and then recreate it with no content. 
// This does NOT change the Time Left
function removeQASectionContent( ) {
	const QASectionEl = document.getElementById('QA-section');
	if (QASectionEl != null) {  /* null or undefined. QA section not created until renderQuestion */
		console.log("Removing QA Section content."); 
		QASectionEl.remove();  // remove QA section and all elements in it.
	}
	// recreate and insert QASection element
	const wrapperEl = document.getElementById("removable-main-wrapper");  
	const newQASectionEl = document.createElement("section");
	newQASectionEl.id = "QA-section"; 
	wrapperEl.appendChild(newQASectionEl); 
} // end removeQASectionContent

// display the main screen - topScores and Take Quiz buttons. 
function renderMain( ) {
	removeMainWrapperContent(); 
	wrapperEl = document.getElementById("removable-main-wrapper"); 
	wrapperEl.setAttribute("class", "flex-column"); 
	
	const hiScoreSectionEl= document.createElement("section");  // ----- hi score button -----
	hiScoreSectionEl.id = "high-score-section";
	wrapperEl.appendChild(hiScoreSectionEl); 
	
	const hiScoreButtonEl = document.createElement("button"); 
	hiScoreButtonEl.id = "high-score-button"; 	
	hiScoreButtonEl.innerText = "View High Scores"; 
	hiScoreButtonEl.addEventListener("click", renderScores); 
	hiScoreSectionEl.appendChild(hiScoreButtonEl); 
	
	const takeQuizSectionEl = document.createElement("section"); // Text n take quiz button 
	takeQuizSectionEl.id = "take-quiz-section"; 
	wrapperEl.appendChild(takeQuizSectionEl); 
	
	const codingQuizChallengeEl = document.createElement("h2");
	codingQuizChallengeEl.innerText = "Coding Quiz Challenge";
	takeQuizSectionEl.appendChild(codingQuizChallengeEl); 
	
	const TryEl = document.createElement("h4");
	TryEl.innerText = "Try to answer the following code related questions within the time limit."
	takeQuizSectionEl.appendChild(TryEl); 

	const penalizeEl = document.createElement("h4");
	penalizeEl.innerText = "Incorrect answers will penalize your score by 10 seconds."
	takeQuizSectionEl.appendChild(penalizeEl); 	
	
	const takeQuizEl = document.createElement("button");
	takeQuizEl.innerText = "Take Quiz";
	takeQuizEl.addEventListener("click", takeQuiz);
	takeQuizSectionEl.appendChild(takeQuizEl); 	
	
} // end funct renderMain 

// render Scores 
function renderScores() {
	alert("Rendering Scores"); 
} // end funct renderScores 

function takeQuiz() {
	console.log("Beginning takeQuiz");
	
	let timeLeft = maxTime; 
	let DOMGlobalsEl = document.getElementById("DOM-globals");
	DOMGlobalsEl.setAttribute("timeLeft", maxTime); 
	
	removeMainWrapperContent(); 
	/* Put time left element into DOM */ 
	const wrapperEl = document.getElementById('removable-main-wrapper'); 
	const timeLeftEl = document.createElement("p");
	timeLeftEl.id = 'time-left'; 
	timeLeftEl.innerText = "Time Left: " + timeLeft; 
	wrapperEl.appendChild(timeLeftEl);

	renderQuestion(questions[0]); 

    const intervalId = setInterval(() => {
		DOMGlobalsEl.setAttribute("intervalId", intervalId);
		timeLeft = DOMGlobalsEl.getAttribute("timeLeft") - 1; 
		console.log("Time left = " + timeLeft); 
		DOMGlobalsEl.setAttribute("timeLeft", timeLeft); 
		timeLeftEl.innerText = "Time Left: " + timeLeft; 
		if (timeLeft <= 0) {
			console.log("Stopping timer");
			clearInterval(intervalId); 
			alert("Time is up. Your score will not be recorded.");
			renderMain(); 
		}
	}, 1000) // end setInterval 1000ms => 1 sec
} // end takeQuiz 

// display a single question (prompt, choices, msg)
function renderQuestion(question) {

/* Alternative would be to remove TimeLeft and then recreate it */  
removeQASectionContent();  /* but dont remove TimeLeft element */ 
const QASectionEl = document.getElementById('QA-section');  

// Display the question prompt -------------------
var promptEl = document.createElement("section");
promptEl.id = "prompt";  // about 60% of screen 
QASectionEl.appendChild(promptEl); 

var promptTextEl = document.createElement("p");
promptTextEl.innerText = question[promptIndex]; 
promptEl.appendChild(promptTextEl);

// Now display the choices -------------
var choicesEl = document.createElement("section");
choicesEl.id = "choices";   // 3 or 4 possible answers to prompt 
QASectionEl.appendChild(choicesEl); 

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

// Now display the msg (starting, correct, incorrect, done, etc.) ---------
var correctEl = document.createElement("section"); 
correctEl.id = "correct"; 
QASectionEl.appendChild(correctEl); 

let correctTextEl = document.createElement("p");  // Starting, Correct, Incorrect, Done, blank goes here
correctTextEl.id = "correct-text-id";  
let globalEl = document.getElementById("DOM-globals");
console.log("GlobalEl is " + globalEl.outerHTML); // VERY helpful 
var correctGlobal = globalEl.getAttribute("correct-indicator"); 
console.log("Global correct-indicator is " + correctGlobal); 
correctTextEl.innerText = correctGlobal;  // displays on screen
correctEl.appendChild(correctTextEl); 

} // end funct renderQuestion
// --------------------------------------

// When users clicks an answer, check if correct. If so check if done. If not display next question. 
function checkAnswer(event) { 
	event.preventDefault();
	console.log("Event is " + event); 
	// this seems to be "[object HTMLbuttonElement]" 
	console.log("Checking Answer: this.value = " + this.value); 
	let correctAns = event.target.value;
	let buttonTextContent = event.target.textContent;
	console.log("Event.target.value = " + correctAns);
	console.log("Event.target.textContent = " + buttonTextContent);
	// alert("Checking answer. event.targer.value is " + correctAns); 
	let globalEl = document.getElementById("DOM-globals");
	globalEl.setAttribute("correct-indicator", "Incorrect"); 
	let correctEl = document.getElementById("correct-text-id");
	correctEl.innerText = "Incorrect"; 
	if (correctAns.trim().toLowerCase() == buttonTextContent.trim().toLowerCase()) {
		console.log("Answer is correct!"); 
		correctEl.innerText = "Correct"; 
		globalEl.setAttribute("correct-indicator", "Correct"); 
		let currentQuestionIndex = Number(globalEl.getAttribute("question-index"));
		currentQuestionIndex++;  // only change question if answer correct (tweak from demo) 
		console.log("Next question index is " + currentQuestionIndex);
		globalEl.setAttribute("question-index", currentQuestionIndex);
		if (currentQuestionIndex >= questions.length) {
	        globalEl.setAttribute("correct-indicator", "Done"); 
			alert("Done with all questions");
			const intervalId = globalEl.getAttribute("intervalId");
			clearInterval(intervalId); 
		} else {
			renderQuestion(questions[currentQuestionIndex]); 
		} 
	} else {  // answer wrong 
		let timeLeft = globalEl.getAttribute("timeLeft"); 
		timeLeft = timeLeft - wrongPenalty; 
		globalEl.setAttribute("timeLeft", timeLeft); 
		let timeLeftEl = document.getElementById("time-left"); 
		timeLeftEl.innerText = "Time Left: " + timeLeft; 
	} // end if-else answerIsCorrect
} // end function checkAnswer

