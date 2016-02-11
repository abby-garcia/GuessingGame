/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

$( document ).ready(function() {

var winningNumber = generateWinningNumber();
var numberOfGuesses  = 0;



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	var answer = Math.floor(Math.random() * 100) + 1;
	return answer;  
	
	

}

// Click Central

$('#submit-button').on('click',playersGuessSubmission);

$('#hint-button').on('click',function(){
	$('#hint-answer').text("The answer is " + winningNumber);

	});




// Fetch the Players Guess

function playersGuessSubmission(){
	var playersGuess = $('input#input-box').val(); // this saves the number person puts
	$('#input-box').val(""); // replace the inputbox with an empty string
	checkGuess(parseInt(playersGuess));
}


// Determine if the next guess should be a lower or higher number

function lowerOrHigher(playersGuess){

	if(playersGuess > winningNumber){
		return "HIGHER";
	}
	else{
		return "LOWER";
	}

}

function distance(playersGuess){

	if(playersGuess > winningNumber){
		return (playersGuess - winningNumber).toString();
	}
	else{
		return (winningNumber - playersGuess).toString();
	}

}


//GUESS MESSAGE FUNCTION

function guessMessage(playersGuess){


 var lowHighMessage = lowerOrHigher(playersGuess); //higer 

 var distanceNumber =  distance(playersGuess);// 10  

 return "Your message is " + lowHighMessage + " and it is " + distanceNumber + " away from the winning number.";

}


// Check if the Player's Guess is the winning number 
var allGuesses = [];

function checkGuess(playersGuess) {
	
	
	//for everytime the person puts in a number, we save it to the array

	if(playersGuess === winningNumber){
		$('#notification').text("You won!"); //line 55 on HTML
		$('#hint').text('');

	}
	else if( allGuesses.indexOf(playersGuess) !== -1  ){ //if the number exists in the array, it's a duplicate

			$('#notification').text("Duplicate!!");

	}
	else{
		numberOfGuesses += 1;
		if (numberOfGuesses > 3 ){
			$('#loser').text("You lose! Read your history books!");
			$('#loser').css('color','purple');
		}
		else{
			$('#notification').text("Try again!");
			allGuesses.push(playersGuess);
			$('#guesses-left').text($('#guesses-left').text()-1);
			var message = guessMessage(playersGuess);
			$('#hint').text(message);

		}
	}

		
	console.log(allGuesses)
}

//RESET SECTION

$('#reset').on('click',function(){
	$('#notification, #hint, #hint-answer,#loser ').text("");
	$('#guesses-left').text("3");


	winningNumber = generateWinningNumber();
	//reset winningNumber

	});

//Enter 
	
$(document).keypress(function(e) {
	if(e.which === 13) { 
		playersGuessSubmission(); //on enter I want you to WERKKKKKK.
	} 
})










}); // ready from line 4