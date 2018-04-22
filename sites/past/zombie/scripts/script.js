var username, documentVolume, 
	mute, currentSong,
	day = 1, dayCount = 0, days,
	health = 20, maxHealth = 20, damageTaken = 0;

	soda = new Array("Cola soda", "Diet Cola soda", "Cola Zero soda", "Mister Cola soda", "Fizzy Apple soda", "Fizzy Orange Soda", "Fizzy Lemon Lime soda");
	smallFood = new Array("a potato", "a banana", "an apple", "an orange", "a chocolate bar", "some crackers", "some popcorn", "a cookie", "a muffin", "some grapes", "a can of spaghetti rings", "a can of ravioli", "a can of soup");
	chipFlavor = new Array("sea salt", "cheddar and sour & cream", "bbq", "sweet and spicy", "french onion", "garden salsa", "nacho cheese", "jalapeno", "salt & vinegar", "sour cream", "sour cream & onion", "chili cheese", "cheddar");
	medicine = new Array("medicinal liquid", "a tablet of medicine", "a medicinal capsule", "a drop of medicine", "a medicine injector", "a syringe", "bandages");
	actionStart = new Array("blow", "cut", "slice", "chop", "whack", "hack", "slash", "split", "splatter", "mash");
	zombieActionStart = new Array("hit", "cut", "scratched", "bitten", "gashed", "grazed", "gnawed", "mangled");
	zombieAction = new Array(" open", "s guts out", "s brains out", " in half", "s intestines out", " apart");
	survivorAction = new Array("them open", "their guts out", "their brains out", "them in half", "their intestines out", "them apart");
	locations = new Array("gas station", "corner store", "market", "grocery store", "retail store", "pharmacy", "drug store");
	trip = new Array("some trash", "a curb", "a corpse", "a pothole", "a fallen sign");
	animal = new Array("badger", "bat" ,"bear", "bird", "bobcat", "bull dog", "cheetah", "cougar", "coyote", "deer", "falcon", "fox", "german shepherd", "greyhound", "jaguar", "leopard", "lion", "ocelot", "panther", "snake", "sabre toothed tiger", "siberian tiger", "tiger", "wolf", "wolverine");
	timeWaste = new Array("wander around", "watch the clouds", "walk through the streets", "think about old times", "read a book", "sit on a bench");

$(document).ready(function() {
	for (var i = 0, length = $(".gamepad")[0].children.length; i < length; i++) {
		$(".gamepad")[0].children[i].addEventListener("mouseenter", function() {
			playSound("media/sounds/buttonHover.mp3");
		});
		$(".gamepad")[0].children[i].addEventListener("click", function() {
			game();
		});
	}
	volume($("#vol")[0].value);
	$("#daySlider")[0].value = 30;
	changeDay($("#daySlider")[0].value);
	mute = $("#mute")[0].checked;
	if (!mute) {
		$("#menuMusic")[0].play();
	}
	currentSong = "menu";
	$("form")[0].reset();
	$(".game").fadeOut(100);
	$(".gamepad").fadeOut(100);
	$(".stats").fadeOut(100);
});

// gets day count of slider
function changeDay(value) {
	var dayCount = value;
	$("#dayText")[0].innerHTML = dayCount;
}
// Gets volume of slider
function volume(volume) {
	documentVolume = volume;
	$("#volText")[0].innerHTML = documentVolume;
	$("#menuMusic")[0].volume = documentVolume/100;
	$("#gameMusic")[0].volume = documentVolume/100;
}
// Plays sent files
function playSound(file) {
	var sound = document.createElement("audio");
	sound.src = file;
	sound.volume = documentVolume/100;
	sound.play();
}
function muteMusic(mode) {
	if (mode) {
		if (currentSong == "menu") {
			$("#menuMusic")[0].pause();
		} else {
			$("#gameMusic")[0].pause();
		}
	} else {
		if (currentSong == "menu") {
			$("#menuMusic")[0].play();
		} else {
			$("#gameMusic")[0].play();
		}
	}
}
function randNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function startGame(name) {
	username = $("#name")[0].value;
	days = parseInt($("#daySlider")[0].value);
	$(".startMenu").fadeOut(100);
	$("#bigText")[0].innerHTML = "Welcome to the apocolypse "+username+".";
	$(".game").fadeIn(500);
	setTimeout(function(){
		$("#litText")[0].innerHTML = "Get ready for whatever may come your way.";
		setTimeout(function(){
			$("#menuMusic")[0].pause();
			if (!mute) {
				$("#gameMusic")[0].play();
			}
			currentSong = "game";
			resetMenu();
			$(".gamepad").fadeIn(1000);
			$(".stats").fadeIn(1000);
		}, 4000);
	}, 4000);
}

// standard function for the game to progress
function playMove(big, little, health, pause) {
	$("#bigText")[0].innerHTML = big;
	$("#litText")[0].innerHTML = little;
	if (health > 0) {
		heal(Math.abs(health));
	} else if (health < 0) {
		blood(Math.abs(health));
	} else if (health == 0) {
		setTimeout(function() {
			endOfDay(pause);
		}, 3000);
	}
}
function resetMenu() {
	$("#health")[0].innerHTML = health;
	$("#day")[0].innerHTML = days-day;

	var daytime;
	if (dayCount == 0) {
		daytime = "Morning";
	} else if (dayCount == 1) {
		daytime = "Mid day";
	} else if (dayCount == 2) {
		daytime = "Evening";
	} else if (dayCount == 3) {
		daytime = "Night";
	}
	$("#bigText")[0].innerHTML = daytime+" of day "+day;
	$("#litText")[0].innerHTML = "Choose a direction below.";
}
function game() {
	$(".gamepad").fadeOut(100);
	switch (randNum(1, 16)) {
		case 1:
			playMove("You found a survivor!", "", null);
			setTimeout(function() {
				switch(randNum(1, 4)) {
					case 1: 
						playMove("You found a survivor!", "You "+actionStart[randNum(0, (actionStart.length-1))]+zombieAction[randNum(0, (zombieAction.length-1))]+"!<br>Scavenge for supplies.", null);
						setTimeout(function() {	
							supplies(4);
						}, 2000);
					break;
					case 2:
						playMove("You found a survivor!", "You run away.", 0);
					break;
					case 3:
						var rand = randNum(2,3);
						playMove("You found a survivor!", "They "+actionStart[randNum(0, (actionStart.length-1))]+" you! You run away.<br>Lose "+rand+" health.", rand*=-1);
					break;
					case 4:
						var rand = randNum(1,2);
						playMove("You found a survivor!", "You trade supplies and get a "+soda[randNum(0, (soda.length-1))]+"!<br>Gain "+rand+" health!", rand);
					break;
				}
			}, 2000);
		break;
		case 2:
			var rand = randNum(2, 4);
			playMove("You take a nap for "+rand+" hours.", "Gain "+rand+" health!", rand);
		break;
		case 3:
			playMove("You enter a "+locations[randNum(0, (locations.length-1))]+".", "", null);
			setTimeout(function() {	
				supplies(4);
			}, 2000);
		break;
		case 4:
			playMove("Attacked by a horde of zombies!", "", null);
			setTimeout(function() {
				switch(randNum(1, 3)) {
					case 1:
						playMove("Attacked by a horde of zombies!", "You run away.", 0);
					break;
					default:
						var rand = randNum(3, 6);
						playMove("Attacked by a horde of zombies!", "You were "+zombieActionStart[randNum(0, (zombieActionStart.length-1))]+"!<br>Lose "+rand+" health.", rand*=-1);
					break;
				}
			}, 2000);
		break;
		case 5:
			var rand = randNum(1, 2);
			playMove("Tripped on "+trip[randNum(0, (trip.length-1))]+"!","Lose "+rand+" health.", rand*=-1);
		break;
		case 6:
			playMove("You dig through a trash can!","", null);
			setTimeout(function() {	
				supplies(2);
			}, 2000);
		break;
		case 7:
			var rand = randNum(3, 5);
			playMove("Attacked by a "+animal[randNum(0, (animal.length-1))]+"!","Lose "+rand+" health.", rand*=-1);
		break;
		case 8:
			playMove("You "+timeWaste[randNum(0, (timeWaste.length-1))]+".", "", 0);
		break;
		default:
			playMove("Attacked by a zombie!", "", null);
			setTimeout(function() {
				switch(randNum(1, 5)) {
					case 1: 
						playMove("Attacked by a zombie!", "You "+actionStart[randNum(0, (actionStart.length-1))]+" it"+zombieAction[randNum(0, (zombieAction.length-1))]+"!<br>Scavenge for supplies.", null);
						setTimeout(function() {	
							supplies(2);
						}, 2000);
					break;
					case 2:
						playMove("Attacked by a zombie!", "You run away.", 0);
					break;
					default:
						var rand = randNum(2,3);
						playMove("Attacked by a zombie!", "You were "+zombieActionStart[randNum(0, (zombieActionStart.length-1))]+"!<br>Lose "+rand+" health.", rand*=-1);
					break;
				}
			}, 2000);
		break;
	}
}
function supplies(max) {
	switch (randNum(1, max)) {
		case 1:
			var rand = randNum(1,2);
			playMove("You found a "+soda[randNum(0, (soda.length-1))]+"!", "Gain "+rand+" health!", rand);
		break;
		case 2:
			var rand = randNum(1, 2);
			playMove("You found a bag of "+chipFlavor[randNum(0,(chipFlavor.length-1))]+" chips!", "Gain "+rand+" health!", rand);
		break;
		case 3:
			var rand = randNum(2, 3);
			playMove("You found "+smallFood[randNum(0,(smallFood.length-1))]+"!", "Gain "+rand+" health!", rand);
		break;
		case 4:
			var rand = randNum(3, 4);
			playMove("You found "+medicine[randNum(0,(medicine.length-1))]+"!", "Gain "+rand+" health!", rand);
		break;
	}
}
function endOfDay(pause) {
	var wait = pause || 2000;
	setTimeout(function() {
		if (dayCount < 3) {
			dayCount++;
		} else {
			dayCount = 0;
			day++;
		}
		if (day == (days+1)) {
			var finalScore = health/damageTaken;
			alert(finalScore);
			playMove("You won!", "Good job, "+username, null)
		} else if (health <= 0) {
			playMove("You died!", "Refresh to try again "+username+".", null)
		} else {
			resetMenu();
			$(".gamepad").fadeIn(500);
		}
	}, wait);
}

// Damage taken
function blood(repeat, pause) {
	// Make BG color red for blood
	$("#flash")[0].style.backgroundColor = "#900";

	// 'Count' variable for usability
	var count = repeat;
	
	// Checks to see whether to run code
	if (count > 0) {
		setTimeout(function() {
			// Play a random sound
			playSound("media/sounds/pain/"+randNum(0, 10)+".mp3");
			
			// Show the flash
			$("#flash")[0].style.visibility = "visible";

			// blood splat
			splat();
			
			// To update the health as the aniamtion plays
			health--;
			damageTaken++;
			$("#health")[0].innerHTML = health;

			setTimeout(function() {
				// Hide the flash
				$("#flash")[0].style.visibility = "hidden";
				
				// Decrement the counter
				count--;
				
				// Call blood again with the decreased count
				blood(count, pause);
				
			// Duration of flash
			}, 500);
		// Time in between flashes
		}, 250);
	// If the loop is finished, play a sighing sound
	} else {
		setTimeout(function() {				
			playSound("media/sounds/pain/sigh.mp3");
			endOfDay(pause);
		}, 500);
	}
}
// blood splat icon
function splat() {
	// Random numbers for marker position
	var markerX = Math.floor(Math.random() * (window.innerWidth - 160)),
		markerY = Math.floor(Math.random() * (window.innerHeight - 160));
	// Creates image with all requirements
	setTimeout(function() {
		var marker = document.createElement("IMG");
		m = marker;
		ms = m.style;
		m.src="media/images/blood/splat"+randNum(1,16)+".png";
		ms.width = "122px";
		ms.height = "134px"
		ms.position = "absolute";
		ms.left = markerX + "px";
		ms.top = markerY + "px";

		// Hides the image after .4 seconds
		setTimeout(function() {
			document.querySelector("html").appendChild(m);
			setTimeout(function() {
				try {
					marker.parentNode.removeChild(marker);
				}
				catch(err) {}
			}, 500);
		}, 0);
	}, 0);
}
// Regained health
function heal(repeat, pause) {
	// Make BG color red for blood
	$("#flash")[0].style.backgroundColor = "#090";
	// 'Count' variable for usability
	var count = repeat;
	
	// Checks to see whether to run code
	if (count > 0) {
		setTimeout(function() {
			// Play a random sound
			playSound("media/sounds/relief/"+randNum(0, 2)+".mp3");
			
			// Show the flash
			$("#flash")[0].style.visibility = "visible";

			// heal plus icon
			plus();

			// To update the health as the aniamtion plays
			if(health < maxHealth) {
				health++;
			}
			$("#health")[0].innerHTML = health;
			
			setTimeout(function() {
				// Hide the flash
				$("#flash")[0].style.visibility = "hidden";
				
				// Decrement the counter
				count--;
				
				// Call blood again with the decreased count
				heal(count, pause);
				
			// Duration of flash
			}, 500);
		// Time in between flashes
		}, 250);
	// If the loop is finished, play a sighing sound
	} else {
		setTimeout(function() {				
			playSound("media/sounds/relief/sigh.mp3");
			endOfDay(pause);
		}, 500);
	}
}
// heal plus icon
function plus() {
	// Random numbers for marker position
	var markerX = Math.floor(Math.random() * (window.innerWidth - 160)),
		markerY = Math.floor(Math.random() * (window.innerHeight - 160));
	// Creates image with all requirements
	setTimeout(function() {
		var marker = document.createElement("IMG");
		m = marker;
		ms = m.style;
		m.src="media/images/heal.png";
		ms.width = "122px";
		ms.height = "134px"
		ms.position = "absolute";
		ms.left = markerX + "px";
		ms.top = markerY + "px";

		// Hides the image after .4 seconds
		setTimeout(function() {
			document.querySelector("html").appendChild(m);
			setTimeout(function() {
				try {
					marker.parentNode.removeChild(marker);
				}
				catch(err) {}
			}, 500);
		}, 0);
	}, 0);
}