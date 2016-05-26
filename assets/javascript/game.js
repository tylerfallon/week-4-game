$(document).ready(function() { 

newGame();

var counter = 0;
var wins = 0;
var losses = 0;
var randomNumber ;


function newGame() {
	counter = 0;
	$('#thetotalscore').text(counter);
  randomNumber =  Math.floor(Math.random() * (121 - 19) + 19);

	$('#randomnumber').text(randomNumber);
};

	var gem1 = {
		value: Math.floor(Math.random() * (13 - 1) + 1),
	};

	var gem2 = {
		value: Math.floor(Math.random() * (13 - 1) + 1),
	};

	var gem3 = {
		value: Math.floor(Math.random() * (13 - 1) + 1),
	};

	var gem4 = {
		value: Math.floor(Math.random() * (13 - 1) + 1),
	};

$("#gem1").click(function() {
		counter = counter + parseInt(gem1.value);
		$('#thetotalscore').text(counter);
		endTheGame();
	});

	$("#gem2").click(function() {
		counter = counter + parseInt(gem2.value);
		$('#thetotalscore').text(counter);
		endTheGame();
	});

	$("#gem3").click(function() {
		counter = counter + parseInt(gem3.value);
		$('#thetotalscore').text(counter);
		endTheGame();
	});

	$("#gem4").click(function() {
		counter = counter + parseInt(gem4.value);
		$('#thetotalscore').text(counter);
		endTheGame();
	});

 function endTheGame() {
	var currentscore = document.getElementById('thetotalscore').innerHTML;
	console.log('counter', counter);
	console.log('randomNumber', randomNumber);
	if (counter == randomNumber) {
		console.log("Win!")
		wins ++;
		$('#wins').text(wins);

		newGame();

	} else if (counter > randomNumber) {
		console.log('u lose');
		losses ++;
		$('#losses').text(losses);
		newGame();
	}
};
	



});
