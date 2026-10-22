// MJS - hiScores pseudo-class. 
// get hiScores from local storage ... update 
function updateHiScores(ev) {
	hiScoresLog("Entering updateHiScores ... "); 
	let nameInput = document.getElementById("nameInput").value; 
	if (nameInput.length == 0) {  // unique error checking soln 
		nameInput = "PersonWithNoName"; 
	}
	if (nameInput == "reset") {
		hiScoresLog("Resetting local storage "); 
		localStorage.removeItem("hiScores"); 
	}
	
	let globalEl = document.getElementById("DOM-globals"); 
	let score = globalEl.getAttribute("timeLeft"); 
	
	hiScoresLog("Updating hi scores for " + nameInput + " Score: " + score); 
	const newEntry = {nameInput: nameInput, score: score};  // object much better than array
	let scoreArray = new Array();
	scoreArray.push(newEntry); 
	// scoreArray.push(newEntry);  // twice for now for debugging
	logArray(scoreArray); 
	
	// If hiScores isnt JSON, this will fail. No easySoln => delete localStorage hiScores. 
	let hiScores = JSON.parse(localStorage.getItem("hiScores"));
	hiScoresLog("HiScores from localStorage is " + hiScores); 
	if (!hiScores) {
		hiScoresLog("Adding first hiScore "); 
		localStorage.setItem("hiScores", JSON.stringify(scoreArray));
	} else {
		insertHiScore(hiScores, newEntry);
		// hiScores.push(newEntry);
		localStorage.setItem("hiScores", JSON.stringify(hiScores));
	} 
	hiScoresLog("Done updating HiScores in local Storage ... ");  
	renderHiScores(); 
} // end funct updateHiScores

// insertHiScore - insert into ordered array using splice
function insertHiScore(hiScoreArray, newEntry) { 
	hiScoresLog("Inserting high score " + newEntry); 
	let insertAt = 0; 
	let newScore = newEntry.score; 
	for (let i=0; i < hiScoreArray.length; i++) {
		let currentScore = hiScoreArray[i].score;
		hiScoresLog("NewScore: " + newScore + " Current " + currentScore); 
		if (newScore <= currentScore) {
			insertAt++; 
		} 
	}
	hiScoreArray.splice(insertAt, 0, newEntry); 
} // end funct insertHiScore

// display hiScores from localStorage on the screen 
function renderHiScores( ) {
	hiScoresLog("rendering HiScores from local Storage ... ");  
	removeMainWrapperContent();  // call here as it is DOM dependent, but well live with it.  
	let wrapperEl = document.getElementById("removable-main-wrapper"); 
	let scoreArray = JSON.parse(localStorage.getItem("hiScores"));  // can not exist 
	if (scoreArray == null) {  // null or undefined for == 
		scoreArray = new Array();  // avoid null ptr exceptions for .length and .forEach
	}
	let msgEl = document.createElement("h3");
	let msg = "No Hi Scores Yet";
	if (scoreArray && (scoreArray.length > 0)) {
		msg = "High Scores (" + scoreArray.length + ")"; 
	}
	msgEl.innerHTML = "<b>" + msg + "</b>";
	wrapperEl.appendChild(msgEl); 
	scoreArray.forEach((item) => {
		let scoreEl = document.createElement("p");
		let msg2 = "" + item.nameInput + " - " + item.score; 
		scoreEl.innerText = msg2;
		wrapperEl.appendChild(scoreEl); 
	}); 
	
	let clearBtnEl = document.createElement("button");
	clearBtnEl.setAttribute("class", "btn"); 
	clearBtnEl.innerText = "Clear Scores"; 
	clearBtnEl.addEventListener("click", removeHiScores); 
	wrapperEl.appendChild(clearBtnEl); 
	
	let welcomeBtnEl = document.createElement("button"); 
	welcomeBtnEl.setAttribute("class", "btn"); 
	welcomeBtnEl.innerText = "Welcome Screen";
	welcomeBtnEl.addEventListener("click", renderMain); 
	wrapperEl.appendChild(welcomeBtnEl); 	
} // end funct renderHiScores

function removeHiScores() { 
	localStorage.removeItem("hiScores"); 
	renderHiScores();  // re-render screen 
} // end funct removeHiScores 

function hiScoresLog(inString) {
	console.log(inString); 
} 