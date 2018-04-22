function game() {
	$(".gamepad").fadeOut(100);
	var big, little;
	var rand = randNum(1, 4);
	switch (randNum(1, 3)) {
		case 1:
			playMove("Attacked by a zombie!", "", null, 1500)
			setTimeout(function() {
				switch(randNum(1, 5)) {
					case 1:
						playMove("Attacked by a zombie!", "You push it over and run, suffering just a scratch.<br>Lose 1 health.", -1);
					break;
					case 2: 
						playMove("Attacked by a zombie!", "You blow its brains out. Scavenge for some supplies.<br>Gain "+rand+" health.", rand);
					break;
					case 3:
						playMove("Attacked by a zombie!", "Slice it open with your knife. Scavenge for supplies.<br>Gain "+rand+" health.", rand, 750);
					break;
					case 4:
						playMove("Attacked by a zombie!", "You think fast and stab it with a butter knife, getting scratched on the arm.<br>Lose 3 health.", -3, 1250)
					break;
					case 5:
						playMove("Attacked by a zombie!", "You kick its knees in, killing it. Scavenge for supplies.<br>Gain "+rand+" health.", rand);
					break;
				}
			}, 1500);
		break;
		case 2:
			playMove("Found a survivor!", "", null);
			setTimeout(function() {
				switch(randNum(1, 7)) {
					case 1:
						playMove("He attacks you!", "<br>Lose "+rand+" health.", rand*=-1);
					break;
					case 2: 
						playMove("You kill him and take his supplies.", "<br>Gain "+rand+" health.", rand);
					break;
					case 3:
						playMove("You trade some supplies.", "<br>Gain "+rand+" health.", rand);
					break;
					case 4:
						playMove("", "You shoot him in the head by accident. Whoops. Scavenge for supplies.<br>Gain "+rand+" health.", rand, 3000);
					break;
					case 5:
						playMove("", "He gives you some water.<br>Gain "+rand+" health.", rand);
					break;
					case 6:
						playMove("", "You stab him in the neck. Scavenge for supplies.<br>Gain "+rand+" health.", rand);
					break;
					case 7:
						playMove("", "You two bunker up for the night.<br>Gain "+rand+" health.", rand);
					break;
				}
			}, 1500);
		break;
		case 3:
			playMove("Tripped on some trash!", "Lost 1 health.", -1, 500);
		break;
		case 4:
			playMove("Found some shelter for the night.", "Gained 2 health.", 2, 250);
		break;
		case 5:
			playMove("Found some supplies!", "Gain "+rand+" health.", rand, 100);
		break;
		case 6:
			playMove("Found some corpses to loot.", "", null);
			setTimeout(function() {
				switch(randNum(1, 3)) {
					case 1:
						playMove("You found nothing.", "", 0, 500);
					break;
					case 2: 
						playMove("You found some supplies.", "Gain "+rand+" health.", rand);
					break;
					case 3:
						playMove("You touched some nasty stuff.", "Lose "+rand+" health.", rand*=-1); 
					break;
				}
			}, 3000);
		break;
		case 7:
			playMove("You dig through some trash cans.", "", null);
			setTimeout(function() {
				switch(randNum(1, 3)) {
					case 1:
						playMove("You found nothing.", "", 0);
					break;
					case 2: 
						playMove("You found some supplies.", "Gain "+rand+" health.", rand);
					break;
					case 3:
						playMove("You hurt yourself.", "Lose "+rand+" health.", rand*=-1); 
					break;
				}
			}, 3000);
		break;
		case 8:
			playMove("Attacked by a bunch of zombies!", "", null);
			setTimeout(function() {
				switch(randNum(1, 6)) {
					case 1:
						rand+=3;
						playMove("They attack you!", "Lose "+rand+" health.", rand*=-1);
					break;
					case 2:
						playMove("You run away.", "", 0, 0);
					break;
					case 3:
						rand+=5;
						playMove("You get mauled.", "Lose "+rand+" health.", rand*=-1);
					break;
					case 4:
						playMove("You take a bunch out, only getting scratched a little. Run away before anything else.", "Lose "+rand+" health.", rand*=-1, 3000);
					break;
					case 5:
						playMove("You take a couple out, taking no damage.", "", 0);
					break;
					case 6:
						rand+=5;
						playMove("Guns are mans best friend. Kill them all, and take no damage. Scavenge time!", "Gain "+rand+" health.", rand, 4000);
					break;
				}
			}, 3000);
		break;
		case 9:
			playMove("Tripped on the curb!", "Lost 1 health.", -1, 500);
		break;
		case 10:
			playMove("Tripped on a corpse!", "Lost 1 health.", -1, 500);
		break;
		case 11:
			playMove("Napped under a tree.", "Gain 1 health.", 1, 500);
		break;
		case 12:
			playMove("You find an old vending machine and loot it.", "", null);
			setTimeout(function() {
				switch(randNum(1, 4)) {
					case 1:
						playMove("It's empty.", "", 0);
					break;
					case 2: 
						playMove("You spend some useless money you've been collecting for a soda.", "Gain 2 health.", 2);
					break;
					case 3:
						playMove("You hurt yourself trying to steal something from it.", "Lose 2 health.", -2); 
					break;
					case 4:
						rand+=3;
						playMove("You break the glass with your bat, and take everything.", "Gain "+rand+" health.", rand);
					break;
				}
			}, 3000);
		break;
		case 13:
			playMove("You look in a mail box.", "", null);
			setTimeout(function() {
				switch(randNum(1, 3)) {
					case 1:
						playMove("You found nothing.", "", 0, 250);
					break;
					case 2: 
						playMove("You found some supplies.", "Gain "+rand+" health.", rand);
					break;
					case 3:
						playMove("You found a soda.", "Gain 1 health.", 1, 750);
					break;
					case 4:
						playMove("You found a candy bar.", "Gain 1 health.", 1, 750);
					break;
				}
			}, 3000);
		break;
		default:
			playMove("You wander around looking for something, anything.", "", 0);
		break;
	}
}