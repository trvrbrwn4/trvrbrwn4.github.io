var game, inputCounter, inputMoves, points = 0,
	moves = [],
	green = document.getElementById("one"),
	red = document.getElementById("two"),
	yellow = document.getElementById("thr"),
	blue = document.getElementById("fr"),
	colors = [green, red, yellow, blue];

function loadPage() {
	for (var i = 0; i < colors.length; i++) {
		let j = i;
		colors[i].addEventListener("click", function(){
			if (game) {
				triggerColor(j, true)
				userMoves(j);
			}
		});
	}
}

function startGame() {
	document.getElementById("but").style.visibility = "hidden";
	addMove();
}

function addMove() {
	moves.push(randNum(0,3));
	playMoves(moves.length);
}

function playMoves(counter) {
	triggerColor(moves[(moves.length - counter)], true);
	if (counter > 1) {
		counter--;
		setTimeout(function() {
			playMoves(counter);
		}, 1000);
	} else {
		game = true;
		document.body.className += "gameActive";
		inputCounter = 0;
		inputMoves = [];
	}
}

function triggerColor(number, triggerLight) {
	switch(number) {
		case 0:
			colorWord = "green";
		break;
		case 1:
			colorWord = "red";
		break;
		case 2:
			colorWord = "yellow";
		break;
		case 3:
			colorWord = "blue";
		break;
	}
	playSound(colorWord+"Noise.mp3");
	if (triggerLight) {
		light(colorWord);
	}
}

function light(color) {
	setTimeout(function(){
		var originalColor = window[color].style.backgroundColor;
		window[color].style.backgroundColor = "white";
		setTimeout(function(){
			window[color].style.backgroundColor = originalColor;
		}, 150)
	}, 0);
}

function userMoves(number) {
	inputMoves.push(number);
	if (inputCounter < moves.length) {
		if (inputMoves[inputCounter] == moves[inputCounter]) {
			points++;
			document.getElementById("pointBoard").innerText = points;
		} else {
			game = false;
			document.body.className = "";
			inputCounter = null;
			if (confirm("You lost. Play again?")) {
				location.reload();
			}
		}
		inputCounter++;
	}
	if (inputCounter >= moves.length) {
		game = false;
		document.body.className = "";
		setTimeout(function() {
			addMove();
		}, 2000);
	}
}

function keyHit(event) {
	var key = event.which || event.key;
	if (key == 49 && game) {
		triggerColor(0, true)
		userMoves(0);
	}
	if (key == 50 && game) {
		triggerColor(1, true)
		userMoves(1);
	}
	if (key == 51 && game) {
		triggerColor(2, true)
		userMoves(2);
	}
	if (key == 52 && game) {
		triggerColor(3, true)
		userMoves(3);
	}
	if(key == 13 && !(moves.length)) {
		startGame();
	}
}

// Random number generator, reusable everywhere
function randNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Plays a sound, reusable everywhere
function playSound(src) {
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("src", src);
	audioElement.play();
}