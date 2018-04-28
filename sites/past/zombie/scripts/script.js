var player = {
    health: 25,
    hunger: 10,
    thirst: 10,
    drowsy: 10,
    inventory: [],
};

var	maxHealth = player.health,
	maxStat = player.hunger,
	day = 1, maxDays, daytime =["Morning", "Mid day", "Evening", "Night"], daytimeCount = 0, daytimeTracker = 0, sleepCooldown = 0,
	damageTaken = 0, healthGained = 0, thingsKilled = 0,
	debuff = 0,
	gameover = false,

	gameVolume;

var preload = new createjs.LoadQueue();

soda = new Array("Cola soda", "Diet Cola soda", "Cola Zero soda", "Mister Cola soda", "Fizzy Apple soda", "Fizzy Orange Soda", "Fizzy Lemon Lime soda");
smallFood = new Array("potato", "banana", "apple", "orange", "chocolate bar", "crackers", "popcorn", "cookie", "muffin", "grapes", "can of spaghetti rings", "can of ravioli", "can of soup");
chipFlavor = new Array("sea salt", "cheddar and sour & cream", "bbq", "sweet and spicy", "french onion", "garden salsa", "nacho cheese", "jalapeno", "salt & vinegar", "sour cream", "sour cream & onion", "chili cheese", "cheddar");
medicine = new Array("medicinal liquid", "tablet of medicine", "medicinal capsule", "drop of medicine", "medicine injector", "syringe", "bandage roll");

actionStart = new Array("blow", "cut", "slice", "chop", "whack", "hack", "slash", "split", "splatter", "mash");
zombieAction = new Array("hit", "cut", "scratched", "bitten", "gashed", "grazed", "gnawed", "mangled", "hurt", "clawed");
zombieActionEnd = new Array(" open", "s guts out", "s brains out", " in half", "s intestines out", " apart");
survivorAction = new Array("punched", "shot", "cut", "whacked", "hurt", "hit", "sliced", "chopped", "slashed");
survivorActionEnd = new Array("them open", "their guts out", "their brains out", "them in half", "their intestines out", "them apart");
hordeAction = new Array("hit", "cut", "scratched", "bitten", "gashed", "grazed", "gnawed", "mangled", "hurt", "clawed", "mauled");
hordeActionEnd = new Array("them all open", "all their guts out", "all their brains out", "them all in half", "all of their intestines out", "them all apart");
locations = new Array("gas station", "corner store", "market", "grocery store", "retail store", "pharmacy", "drug store", "shop", "corner shop", "corner stand", "supermarket", "super store");
smalllocations = new Array("trash can", "mailbox", "old car", "bench", "abandoned truck", "park", "motor home");
animal = new Array("badger", "bat" ,"bear", "bird", "bobcat", "bull dog", "coyote", "deer", "falcon", "fox", "german shepherd", "greyhound", "ocelot", "snake", "wolf", "wolverine");
animalAction = new Array("bitten", "ambushed", "clawed", "scratched", "attacked", "grazed", "cut");
timeWaste = new Array("wander around", "watch the clouds", "walk through the streets", "think about old times", "read a book", "sit on a bench");
trip = new Array("some trash", "a curb", "a corpse", "a pothole", "a fallen sign", "your shoelace", "some rubble");

$(document).ready(function() {
	showLoader();
	hideInventory();
	$(".startMenu").slideUp(200);
	$(".game").fadeOut(200);
	$(".gamepad").slideUp(200);
	$(".stats").fadeOut(200);


	$("#volSlider").on("input", function(event) {
		$("#volText").html(event.target.value);
		gameVolume = $("#volSlider").val();
	});
	$("#daySlider").on("input", function(event) {
		$("#dayText").html(event.target.value);
	});

	gameVolume = $("#volSlider").val();
	$("#volText").html($("#volSlider").val());
	$("#dayText").html($("#daySlider").val());

	
	$("button").each(function() {
		$(this).hover(function() {
			playSound("media/sounds/hover.mp3");
		}, function(){});
	});
	$("ul.gamepad li").each(function() {
		$(this).hover(function() {
			playSound("media/sounds/hover.mp3");
		}, function(){});
	});
	$("#explore").on("click", function() {
		explore();
	});
	$("#eat").on("click", function() {
		displayInventory("food");
	});
	$("#drink").on("click", function() {
		displayInventory("drink");
	});
	$("#medicine").on("click", function() {
		displayInventory("medicine");
	});
	$("#sleep").on("click", function() {
		sleep();
	});
});
function showLoader() {
	preload.on("complete", fileComplete);
	$(".loader").html("<div></div>Loading assets...");


	preload.loadManifest([
		{
			id:   '1',
			src:  "media/images/heal.png"
		},
		{
			id: '2',
			src: 'http://static3.businessinsider.com/image/522746c56bb3f72e2a316155/photo-airbus-proves-its-huge-new-warplane-doesnt-need-a-paved-runway.jpg'
		},
		{
			id:   '3',
			src:  'https://www.chem.gla.ac.uk/staff/wynne/i/2005/TRVS/TRVS-group-photo-huge.jpg'
		},
		{
			id:   '4',
			src:  'http://upload.wikimedia.org/wikipedia/commons/c/cb/WA_-_Dry_Falls_-_Huge_Channel_v1.png'
		},
		{
			id: '5',
			src: 'media/images/blood/splat0.png'
		},
		{
			id: '6',
			src: 'media/images/blood/splat1.png'
		},
		{
			id: '7',
			src: 'media/images/blood/splat2.png'
		},
		{
			id: '8',
			src: 'media/images/blood/splat3.png'
		},
		{
			id: '9',
			src: 'media/images/blood/splat4.png'
		},
		{
			id: '10',
			src: 'media/images/blood/splat5.png'
		},
		{
			id: '11',
			src: 'media/images/blood/splat6.png'
		},
		{
			id: '12',
			src: 'media/images/blood/splat7.png'
		},
		{
			id: '13',
			src: 'media/images/blood/splat8.png'
		},
		{
			id: '14',
			src: 'media/images/blood/splat9.png'
		},
		{
			id: '15',
			src: 'media/images/blood/splat10.png'
		},
		{
			id: '16',
			src: 'media/images/blood/splat11.png'
		},
		{
			id: '17',
			src: 'media/images/blood/splat12.png'
		},
		{
			id: '18',
			src: 'media/images/blood/splat13.png'
		},
		{
			id: '19',
			src: 'media/images/blood/splat14.png'
		},
		{
			id: '20',
			src: 'media/images/blood/splat15.png'
		},
		{
			id: '21',
			src: 'media/images/blood/splat16.png'
		},
		{
			id: '22',
			src: 'media/sounds/pain/0.mp3'
		},
		{
			id: '23',
			src: 'media/sounds/pain/1.mp3'
		},
		{
			id: '24',
			src: 'media/sounds/pain/2.mp3'
		},
		{
			id: '25',
			src: 'media/sounds/pain/3.mp3'
		},
		{
			id: '26',
			src: 'media/sounds/pain/4.mp3'
		},
		{
			id: '27',
			src: 'media/sounds/pain/5.mp3'
		},
		{
			id: '28',
			src: 'media/sounds/pain/6.mp3'
		},
		{
			id: '29',
			src: 'media/sounds/pain/7.mp3'
		},
		{
			id: '30',
			src: 'media/sounds/pain/8.mp3'
		},
		{
			id: '31',
			src: 'media/sounds/pain/9.mp3'
		},
		{
			id: '32',
			src: 'media/sounds/pain/10.mp3'
		},
		{
			id: '33',
			src: 'media/sounds/relief/0.mp3'
		},
		{
			id: '34',
			src: 'media/sounds/relief/1.mp3'
		},
		{
			id: '35',
			src: 'media/sounds/relief/2.mp3'
		},
		{
			id: '36',
			src: 'media/sounds/zombies/horde0.mp3'
		},
		{
			id: '37',
			src: 'media/sounds/zombies/horde1.mp3'
		},
		{
			id: '38',
			src: 'media/sounds/zombies/horde2.mp3'
		},
		{
			id: '39',
			src: 'media/sounds/zombies/horde3.mp3'
		},
		{
			id: '40',
			src: 'media/sounds/zombies/horde4.mp3'
		},
		{
			id: '41',
			src: 'media/sounds/zombies/zombie0.mp3'
		},
		{
			id: '42',
			src: 'media/sounds/zombies/zombie1.mp3'
		},
		{
			id: '43',
			src: 'media/sounds/zombies/zombie2.mp3'
		},
		{
			id: '44',
			src: 'media/sounds/zombies/zombie3.mp3'
		},
		{
			id: '45',
			src: 'media/sounds/zombies/zombie4.mp3'
		},
		{
			id: '46',
			src: 'media/sounds/zombies/zombie5.mp3'
		},
		{
			id: '47',
			src: 'media/sounds/zombies/zombie6.mp3'
		},
		{
			id: '48',
			src: 'media/sounds/zombies/zombie7.mp3'
		},
		{
			id: '49',
			src: 'media/sounds/zombies/zombie8.mp3'
		},
		{
			id: '50',
			src: 'media/sounds/zombies/zombie9.mp3'
		},
		{
			id: '51',
			src: 'media/sounds/zombies/zombie10.mp3'
		},
		{
			id: '52',
			src: 'media/sounds/zombies/zombie11.mp3'
		},
		{
			id: '53',
			src: 'media/sounds/zombies/zombie12.mp3'
		},
		{
			id: '54',
			src: 'media/sounds/zombies/zombie13.mp3'
		},
		{
			id: '55',
			src: 'media/sounds/zombies/zombie14.mp3'
		},
		{
			id: '56',
			src: 'media/sounds/zombies/zombie15.mp3'
		},
		{
			id: '57',
			src: 'media/sounds/drink.mp3'
		},
		{
			id: '58',
			src: 'media/sounds/food.mp3'
		},
		{
			id: '59',
			src: 'media/sounds/footstep.mp3'
		},
		{
			id: '60',
			src: 'media/sounds/hover.mp3'
		},
		{
			id: '61',
			src: 'media/sounds/invHover.mp3'
		},
		{
			id: '62',
			src: 'media/sounds/medicine.mp3'
		},
		{
			id: '63',
			src: 'media/sounds/running.mp3'
		},
		{
			id: '64',
			src: 'media/sounds/sleep.mp3'
		},
		{
			id: '65',
			src: 'media/sounds/footstep.mp3'
		},
		{
			id: '66',
			src: 'media/sounds/walking.mp3'
		}
	]);
	$(".loader").html("<div></div>wrapping things up...");
	setTimeout(function() {
		$(".loader").slideUp(400, function() {
			$(".loader").remove();
		});
		$(".startMenu").slideDown(800);

	}, 1000);
}
function fileComplete(event) {
	console.log(event.target);
}

// Plays sent files
function playSound(file) {
	var sound = document.createElement("audio");
	sound.src = file;
	sound.volume = gameVolume/100;
	sound.play();
}

function randNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
	$(".startMenu").slideUp(600);
	$(".game").fadeIn(200);
	player.name = $("#name").val();
	maxDays = $("#daySlider").val();
	$("#bigText").html("Welcome to the apocolypse "+player.name+".");
	$("#litText").html("The world has been torn apart by a dangerous disease.");
	setTimeout(function() {
		$("#litText").html("Get ready for whatever may come your way.");
		setTimeout(function() {
			$(".gamepad").slideDown(600);
			$(".stats").fadeIn(200);
			gameMenu();
		}, 4000);
	}, 4000);
}

function playMove(big, little) {
	$(".gamepad").slideUp(400);
	$("#bigText").html(big);
	$("#litText").html(little);
}
function progressGame() {
	console.clear();
	console.log("healthGained: "+healthGained+"\ndamageTaken: ", damageTaken);
	if (day > maxDays) {
		var score = day/damageTaken + Math.ceil((healthGained+thingsKilled) / 10);
		playMove("You survived a total of "+maxDays+" and were rescued. Good job "+player.name+"!", "<button onclick='location.reload(false);'>Play again</button>");
	} else if (!gameover) {
		moveDaytime();
		gameMenu();
	} else {
		$(".stats").fadeOut(200);
		var score = day/damageTaken + Math.ceil((healthGained+thingsKilled) / 10);
		playMove("You died.", "You died on day "+day+" of "+maxDays+".<br><button onclick='location.reload(false);'>Play again</button>");
	}
}
function gameMenu() {
	$("#bigText").html(daytime[daytimeCount]+" of day "+day);
	$("#litText").html("What would you like to do?");
	checkStats();
	statMenu();
	$(".gamepad").slideDown(400);
}
function checkStats() {
	debuff = 0;
	if (player.hunger < 0) {
		player.hunger = 0;
	} else if (player.hunger > maxStat) {
		player.hunger = maxStat;
	}
	if (player.hunger == 0) {
		debuff += .5;
		$("#hungerBox").css("color", "#900");
	} else {
		$("#hungerBox").css("color", "#000");
	}

	if (player.thirst < 0) {
		player.thirst = 0;
	} else if (player.thirst > maxStat) {
		player.thirst = maxStat;
	}
	if (player.thirst == 0) {
		debuff += 1;
		$("#thirstBox").css("color", "#900");
	} else {
		$("#thirstBox").css("color", "#000");
	}

	if (player.drowsy < 0) {
		player.drowsy = 0;
	} else if (player.drowsy > maxStat) {
		player.drowsy = maxStat;
	}
	if (player.drowsy == 0) {
		debuff += .5;
		$("#drowsyBox").css("color", "#900");
	} else {
		$("#drowsyBox").css("color", "#000");
	}
}
function statMenu() {
	$("#health").html(player.health);
	$("#hunger").html(player.hunger+"/10");
	$("#thirst").html(player.thirst+"/10");
	$("#drowsy").html(player.drowsy+"/10");
	$("#day").html(maxDays-day);
}


// Damage taken
function blood(repeat, callback) {
	// Make BG color red for blood
	$("#flash").css("background-color", "#900");

	// 'Count' variable for usability
	var count = repeat;
	
	// Checks to see whether to run code
	if (count > 0) {
		if (player.health > 1) {
			setTimeout(function() {
				// Play a random sound
				playSound("media/sounds/pain/"+randNum(0, 10)+".mp3");
				
				// Show the flash
				$("#flash").css("visibility", "visible");

				// blood splat
				splat();
				
				// To update the health as the aniamtion plays
				player.health--;
				damageTaken++;
				statMenu();

				setTimeout(function() {
					// Hide the flash
					$("#flash").css("visibility", "hidden");
					
					// Decrement the counter
					count--;
					
					// Call blood again with the decreased count
					blood(count, callback);
					
				// Duration of flash
				}, 250);
			// Time in between flashes
			}, 250);
		} else {
			gameover = true;
		}
	} else {
		if (callback == null) {
			setTimeout(function() {
				gameMenu();
			}, 1000);
		}
	}
}
// blood splat icon
function splat() {
	// Random numbers for marker position
	var splatX = Math.floor(Math.random() * (window.innerWidth - 160)),
		splatY = Math.floor(Math.random() * (window.innerHeight - 160)),
		size = randNum(-50,50),
		rotate = randNum(0, 360);
	// Creates image with all requirements
	var splat = $("<img>");
	splat.attr('src', "media/images/blood/splat"+randNum(1,16)+".png");
	splat.addClass("blood");
	splat.css({
		"width": (122+size)+"px",
		"height": (134+size)+"px",
		"position": "absolute",
		"left": splatX+"px",
		"top": splatY+"px",
		"transform": "rotate("+rotate+"deg)"
	});
	splat.appendTo("body");
	setTimeout(function() {
		splat.remove();
	}, 250);
}
// Regained health
function heal(repeat) {
	// Make BG color red for blood
	$("#flash").css("background-color", "#090");

	// 'Count' variable for usability
	var count = repeat;
	
	// Checks to see whether to run code
	if (count > 0) {
		setTimeout(function() {
			// Play a random sound
			playSound("media/sounds/relief/"+randNum(0, 2)+".mp3");
			
			// Show the flash
			$("#flash").css("visibility", "visible");

			// blood splat
			plus();
			
			// To update the health as the aniamtion plays
			if (player.health < maxHealth) {
				player.health++;
				healthGained++;
			}
			statMenu();

			setTimeout(function() {
				// Hide the flash
				$("#flash").css("visibility", "hidden");
				
				// Decrement the counter
				count--;
				
				// Call blood again with the decreased count
				heal(count);
				
			// Duration of flash
			}, 250);
		// Time in between flashes
		}, 250);
	} else {
		setTimeout(function() {
			gameMenu();
		}, 1000);
	}
}
// heal plus icon
function plus() {
	// Random numbers for marker position
	var plusX = Math.floor(Math.random() * (window.innerWidth - 160)),
		plusY = Math.floor(Math.random() * (window.innerHeight - 160)),
		size = randNum(-50,50);
	// Creates image with all requirements
	var plus = $("<img>");
	plus.attr('src', "media/images/heal.png");
	plus.addClass("plus");
	plus.css({
		"width": (122+size)+"px",
		"height": (134+size)+"px",
		"position": "absolute",
		"left": plusX+"px",
		"top": plusY+"px",
	});
	plus.appendTo("body");
	setTimeout(function() {
		plus.remove();
	}, 500);
}


function foundItem(min ,max, callback) {
	var item = getItem(min,max);
	player.inventory.push(item);
	playMove("You found a "+item.name+".", "");
	if (callback) {
		setTimeout(function() {
			callback--;
			foundItem(min, max, callback);
		}, 1000);
	}
}
function getItem(min, max) {
	var item, health, division;
	switch (randNum(min, max)) {
		case 1:
			item = soda[randNum(0, (soda.length-1))];
			health = randNum(1,2);
			division = "drink";
		break;
		case 2:
			item = chipFlavor[randNum(0,(chipFlavor.length-1))]+" chips";
			health = randNum(1, 2);
			division = "food";
		break;
		case 3:
			item = smallFood[randNum(0,(smallFood.length-1))];
			health = randNum(1, 2);
			division = "food";
		break;
		case 4:
			item = medicine[randNum(0,(medicine.length-1))];
			health = randNum(2, 3);
			division = "medicine";
		break;
	}
	var final = new MakeItem(item, health, division);
	return final;
}
function MakeItem(item, health, division) {
	this.name = item;
	this.health = health;
	this.division = division;
}
function FoodItem(item, health) {
	this.name = item;
	this.health = health;
}
function moveDaytime() {
	daytimeCount++;
	daytimeTracker++;
	player.drowsy--;
	if (sleepCooldown > 0) {
		sleepCooldown--;
	}
	if (daytimeTracker%2 == 0) {
		player.hunger--;
		player.thirst--;
	}
	if (daytimeCount > 3) {
		daytimeCount = 0;
		day++;
	}
}
function explore() {
	playSound("media/sounds/footstep.mp3");
	playMove("", "");
	setTimeout(function() {
		switch (randNum(1,16)) {
			//zombie
			case 1: case 2: case 3: case 4:
				//playsound zombie;
				playSound("media/sounds/zombies/zombie"+randNum(0,15)+".mp3");
				playMove("Attacked by a zombie!", "");
				setTimeout(function() {
					switch(randNum(1, 16)) {
						case 1: case 2:
							//run
							//thirst
							//playsound running
							playSound("media/sounds/running.mp3");
							playMove("Attacked by a zombie!", "You run away.");
							setTimeout(function() {
								player.thirst--;
								progressGame();
							}, 2000);
						break;
						case 3: case 4: case 5: case 6:
							//hurt&run
							//hunger, thirst, heatlh
							var rand = randNum(4,6);
							if (debuff > 0) {
								rand = Math.ceil(rand*debuff);
							}
							playMove("Attacked by a zombie!", "You were "+zombieAction[randNum(0, (zombieAction.length-1))]+"!<br>Lose "+rand+" health.");
							blood(rand, false);
							setTimeout(function() {
								//playmove running
								playSound("media/sounds/running.mp3");
								playMove("Attacked by a zombie!", "You run away.");
								setTimeout(function() {
									player.hunger--;
									player.thirst--;
									progressGame();
								}, 2000);
							}, (rand*1000));
						break;
						case 7: case 8: case 9: case 10: case 11:
							//hurt&kill
							//hunger, thirst, heatlh, item
							var rand = randNum(4,6);
							if (debuff > 0) {
								rand = Math.ceil(rand*debuff);
							}
							playMove("Attacked by a zombie!", "You were "+zombieAction[randNum(0, (zombieAction.length-1))]+"!<br>Lose "+rand+" health.");
							blood(rand, false);
							setTimeout(function() {
								//playsound zombie death
								playSound("media/sounds/pain/"+randNum(0, 10)+".mp3");
								playSound("media/sounds/zombies/zombie"+randNum(0,15)+".mp3");
								playMove("Attacked by a zombie!", "You "+actionStart[randNum(0, (actionStart.length-1))]+" it"+zombieActionEnd[randNum(0, (zombieActionEnd.length-1))]+"!<br>Scavenge for supplies.");
								setTimeout(function() {
									var rand2 = randNum(1,2);
									foundItem(1,2, rand2);
									setTimeout(function() {
										player.hunger--;
										player.thirst--;
										thingsKilled++;
										progressGame();
									}, (rand2*2000));
								}, 2000);
							}, (rand*1000));
						break;
						case 12: case 13: case 14: case 15: case 16:
							//kill
							//thirst, item
							//playsound zombie death
							playSound("media/sounds/pain/"+randNum(0, 10)+".mp3");
							playSound("media/sounds/zombies/zombie"+randNum(0,15)+".mp3");
							playMove("Attacked by a zombie!", "You "+actionStart[randNum(0, (actionStart.length-1))]+" it"+zombieActionEnd[randNum(0, (zombieActionEnd.length-1))]+"!<br>Scavenge for supplies.");
							setTimeout(function() {
								var rand2 = randNum(1,2);
								foundItem(1,2, rand2);
								setTimeout(function() {
									player.thirst--;
									thingsKilled++;
									progressGame();
								}, (rand2*2000));
							}, 2000);
						break;
					}
				}, 2000);
			break;

			//locations
			case 5: case 6: case 7:
				//item
				//playsound big empty footsteps
				playSound("media/sounds/walking.mp3");
				playMove("You explore a "+locations[randNum(0, (locations.length-1))]+".", "");
				setTimeout(function() {
					var rand = randNum(1,4);
					foundItem(1,4,rand);
					setTimeout(function() {
						progressGame();
					}, (rand*2000));
				}, 1500);
			break;

			//small locations
			case 8:
				//item
				//playsound big footsteps
				playSound("media/sounds/walking.mp3");
				playMove("You explore a "+smalllocations[randNum(0, (smalllocations.length-1))]+".", "");
				setTimeout(function() {
					foundItem(1,3);
					setTimeout(function() {
						progressGame();
					}, 1500);
				}, 3000);
			break;

			//survivor
			case 9: case 10: case 11:
				switch(randNum(1, 16)) {
					case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
						//trade
						//item
						//playsound survivor
						playMove("Found a survivor!", "You trade some items.");
						setTimeout(function() {
							var rand = randNum(1,3);
							foundItem(1,4, rand);
							setTimeout(function() {
								progressGame();
							}, (rand*2000));
						}, 1500);
					break;
					case 11: case 12: case 13: case 14: case 15:
						//hurt&kill
						//hunger, thirst, heatlh, item
						var rand = randNum(4,6);
							if (debuff > 0) {
								rand = Math.ceil(rand*debuff);
							}
							playMove("Found a survivor!", "You were "+survivorAction[randNum(0, (survivorAction.length-1))]+"!<br>Lose "+rand+" health.");
							blood(rand, false);
							setTimeout(function() {
								//playsound survivor death
								playMove("Found a survivor!", "You "+actionStart[randNum(0, (actionStart.length-1))]+" "+survivorActionEnd[randNum(0, (survivorActionEnd.length-1))]+"!<br>Scavenge for supplies.");
								setTimeout(function() {
									var rand2 = randNum(1,3);
									foundItem(1,2, rand2);
									setTimeout(function() {
										player.hunger--;
										player.thirst--;
										thingsKilled++;
										progressGame();
									}, (rand2*2000));
								}, 2000);
							}, (rand*1000));
					break;
					case 16:
						//kill
						//thirst, item
						//playsound survivor death
						playMove("Found a survivor!", "You "+actionStart[randNum(0, (actionStart.length-1))]+" "+survivorActionEnd[randNum(0, (survivorActionEnd.length-1))]+"!<br>Scavenge for supplies.");
						setTimeout(function() {
							var rand2 = randNum(1,2);
							foundItem(1,2, rand2);
							setTimeout(function() {
								player.thirst--;
								thingsKilled++;
								progressGame();
							}, (rand2*2000));
						}, 2000);
					break;
				}
			break;

			//horde
			case 12: case 13:
				//playsound zombie horde
				playSound("media/sounds/zombies/horde"+randNum(0,4)+".mp3");
				playMove("Attacked by a horde of zombies!", "");
				setTimeout(function() {
					switch(randNum(1, 32)) {
						case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8:
							//run
							//thirst
							//playsound running
							playSound("media/sounds/running.mp3");
							playMove("Attacked by a horde of zombies!", "You run away.");
							setTimeout(function() {
								player.thirst--;
								progressGame();
							}, 2000);
						break;
						case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31:
							//hurt&run
							//hunger, heatlh
							var rand = randNum(6,8);
							if (debuff > 0) {
								rand = Math.ceil(rand*debuff);
							}
							playMove("Attacked by a horde of zombies!", "You were "+hordeAction[randNum(0, (hordeAction.length-1))]+"!<br>Lose "+rand+" health.");
							blood(rand, false);
							setTimeout(function() {
								//playsound running
								playSound("media/sounds/running.mp3");
								playMove("Attacked by a horde of zombies!", "You run away.");
								setTimeout(function() {
									player.hunger--;
									progressGame();
								}, 2000);
							}, (rand*1000));
						break;
						case 32:
							//hurt&kill
							//hunger, thirst, health, 4-6 items
							var rand = randNum(4,6);
							if (debuff > 0) {
								rand = Math.ceil(rand*debuff);
							}
							playMove("Attacked by a horde of zombies!", "You were "+hordeAction[randNum(0, (hordeAction.length-1))]+"!<br>Lose "+rand+" health.");
							blood(rand, false);
							setTimeout(function() {
								//playsound zombie deaths
								for (var i = 0; i < 5; i++) {
									playSound("media/sounds/zombies/zombie"+randNum(0,15)+".mp3");
								}
								playMove("Attacked by a horde of zombies!", "You "+actionStart[randNum(0, (actionStart.length-1))]+" "+hordeActionEnd[randNum(0, (hordeActionEnd.length-1))]+"!<br>Scavenge for supplies.");
								setTimeout(function() {
									var rand2 = randNum(4,6);
									foundItem(1,2, rand2);
									setTimeout(function() {
										player.hunger--;
										player.thirst--;
										thingsKilled+=rand2;
										progressGame();
									}, (rand2*2000));
								}, 2000);
							}, (rand*1000));
						break;
					}
				}, 2000);
			break;

			//animal
			case 14:
				switch(randNum(1, 16)) {
					case 1: case 2: case 3: case 4:
						//hurt&run
						//hunger, thirst, heatlh
						var rand = randNum(0, (animalAction.length-1));
						var rand2 = randNum(0, (animal.length-1));
						var rand3 = randNum(2,3);
						playMove("You were "+animalAction[rand]+" by a "+animal[rand2]+"!", "Lose "+rand3+" health.");
						blood(rand3, false);
						setTimeout(function() {
							//playsound running
							playSound("media/sounds/running.mp3");
							playMove("You were "+animalAction[rand]+" by a "+animal[rand2]+"!", "You ran away.");
							setTimeout(function() {
								player.hunger--;
								player.thirst--;
								progressGame();
							}, 2000);
						}, (rand3*1000));
					break;
					case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16:
						//hurt&kill
						//hunger, thirst, heatlh, item
						var rand = randNum(0, (animalAction.length-1));
						var rand2 = randNum(0, (animal.length-1));
						var rand3 = randNum(2,3);
						playMove("You were "+animalAction[rand]+" by a "+animal[rand2]+"!", "Lose "+rand3+" health.");
						blood(rand3, false);
						setTimeout(function() {
							playMove("You were "+animalAction[rand]+" by a "+animal[rand2]+"!", "You "+actionStart[randNum(0, (actionStart.length-1))]+" it"+zombieActionEnd[randNum(0, (zombieActionEnd.length-1))]+"!<br>Scavenge for supplies.");
							setTimeout(function() {
								foundItem(1,3);
								setTimeout(function() {
									player.hunger--;
									player.thirst--;
									thingsKilled++;
									progressGame();
								}, 2000);
							}, 2000);
						}, (rand3*1000));
					break;
				}
			break;

			//waste
			case 15:
				//playsound each index
				playMove("You "+timeWaste[randNum(0, (timeWaste.length-1))]+".", "");
				setTimeout(function() {
					progressGame();
				}, 2000)
			break;

			//trip
			case 16:
				//hunger, health
				var rand = randNum(1,2);
				//playsound trpping
				playMove("You tripped on "+trip[randNum(0, (trip.length-1))]+".", "Lose "+rand+" health.");
				blood(rand, false);
				setTimeout(function() {
					player.hunger--;
					progressGame();
				}, (rand*1000));
			break;
		}
	}, 2000);
}
function useItem(index) {
	var item = player.inventory[index].name,
		health = player.inventory[index].health,
		division = player.inventory[index].division;

	player.inventory.splice(index, 1);
	hideInventory();
	setTimeout(function() {
		if (division == "food") {
			player.hunger+=health;
			playSound("media/sounds/food.mp3");
		} else if (division == "drink") {
			player.thirst+=health;
			playSound("media/sounds/drink.mp3");
		}
		playMove("You used your "+item+"!", "Gain "+health+" health!");
		heal(health);
	}, 250);
}
function displayInventory(itemToDisplay) {
	$(".inventory").fadeIn(200);
	for (var i = 0, l = player.inventory.length; i < l; i ++) {
		if (player.inventory[i].division == itemToDisplay) {
			var text = $("<li id='"+i+"'></li>").text(player.inventory[i].name);
			text.id = i;
			$(text).click(function() {
				useItem(this.id);
			});
			$(text).hover(
		        function () {
		        	playSound("media/sounds/invHover.mp3");
		       		$(this).html(player.inventory[this.id].name+" (+"+player.inventory[this.id].health+"hp)");
		        },
		        function () { 
					$(this).html(player.inventory[this.id].name);
		        },
		    );
			$("#inventory").append(text);
		}
	}
}
function hideInventory() {
	$("#inventory").children().remove();
	$(".inventory").fadeOut(200);
}
function sleep() {
	if (sleepCooldown == 0) {
		$(".inventory").fadeIn(200);
		for (var i = 1; i <= 4; i ++) {
			var text = $("<li id='"+i+"'></li>").text("Sleep for "+i+" hours");
			text.id = i;
			$(text).click(function() {
				naptime(this.id);
			})
			$("#inventory").append(text);
		}
	} else {
		playMove("Not tired enough right now.", "Try again in "+sleepCooldown+" turns.")
		setTimeout(function() {
			gameMenu();
		}, 1000);
	}
}
function naptime(hoursToSleep) {
	sleepCooldown = hoursToSleep;
	hideInventory();
	moveDaytime();
	playSound("media/sounds/sleep.mp3");
	playMove("You napped for "+hoursToSleep+" hours!", "Gain "+hoursToSleep+" health!");
	setTimeout(function() {
		player.drowsy+=parseInt(hoursToSleep);
		heal(hoursToSleep);
	}, 1000);
}