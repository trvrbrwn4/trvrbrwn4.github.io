function explore() {
	switch (randNum(1, 4)) {
		case 1:
			playMove("You explore a "+locations[randNum(0, (locations.length-1))]+".", "");
			setTimeout(function() {
				foundItem(1,4);
				setTimeout(function() {
					progressGame();
				}, 1500);
			}, 1000);
		break;
		case 2:
			var rand = 1;
			if (debuff > 0) {
				rand = Math.ceil(rand*debuff);
			}
			playMove("You trip on  "+trip[randNum(0, (trip.length-1))]+".", "Lose "+rand+" health.");
			blood(rand, false);
			setTimeout(function() {
				progressGame();
			}, (rand*1000));
		break;
		case 3:
			playMove("Attacked by a horde of zombies!", "");
			setTimeout(function () {
				switch(randNum(1, 3)) {
					case 1:
						var rand = randNum(5,7);
						if (debuff > 0) {
							rand = Math.ceil(rand*debuff);
						}
						playMove("Attacked by a horde of zombies!", "You were "+zombieActionStart[randNum(0, (zombieActionStart.length-1))]+"!<br>Lose "+rand+" health.");
						blood(rand, false);
						setTimeout(function() {
							playMove("Attacked by a horde of zombies!", "You run away.");
							setTimeout(function() {
								player.thirst--;
								progressGame();
							}, 2000);
							}, (rand*1000));
					break;
					default:
						playMove("Attacked by a horde of zombies!", "You run away.");
						setTimeout(function() {
							player.thirst--;
							progressGame();
						}, 2000);
					break;
				}
			}, 2000);
		break;
		default:
			playMove("Attacked by a zombie!", "");
			setTimeout(function () {
				switch(randNum(1, 4)) {
					case 1:
						var rand = randNum(4,6);
						if (debuff > 0) {
							rand = Math.ceil(rand*debuff);
						}
						playMove("Attacked by a zombie!", "You were "+zombieActionStart[randNum(0, (zombieActionStart.length-1))]+"!<br>Lose "+rand+" health.");
						blood(rand, false);
						setTimeout(function() {
							playMove("Attacked by a zombie!", "You run away.");
							setTimeout(function() {
								player.thirst--;
								progressGame();
							}, 2000);
						}, (rand*1000));
					break;
					case 2:
						var rand = randNum(4,6);
						if (debuff > 0) {
							rand = Math.ceil(rand*debuff);
						}
						playMove("Attacked by a zombie!", "You were "+zombieActionStart[randNum(0, (zombieActionStart.length-1))]+"!<br>Lose "+rand+" health.");
						blood(rand, false);
						setTimeout(function() {
							playMove("Attacked by a zombie!", "You "+actionStart[randNum(0, (actionStart.length-1))]+" it"+zombieAction[randNum(0, (zombieAction.length-1))]+"!<br>Scavenge for supplies.");
							setTimeout(function() {
								foundItem(1,2);
								setTimeout(function() {
									player.hunger--;
									player.thirst--;
									progressGame();
								}, 1500);
							}, 2000);
						}, (rand*1000));
					break;
					default:
						playMove("Attacked by a zombie!", "You "+actionStart[randNum(0, (actionStart.length-1))]+" it"+zombieAction[randNum(0, (zombieAction.length-1))]+"!<br>Scavenge for supplies.");
						setTimeout(function() {
							foundItem(1,2);
							setTimeout(function() {
								player.hunger--;
								player.thirst--;
								progressGame();
							}, 1500);
						}, 2000);
					break;
				}
			}, 1000);
		break;
	}
}

previous layout
{
		when running, lose thirst
		when hurt, lose hunger
			every two turns, lose both
		when killing, lose thirst

		when finding an item, 20% chance to find multiple items (2,3)




		ideally
		40-50% item
		30-40 of hurt

		current
		65% item
		42% thirst
		42% hunger
		42% health



		1 zombie 4/16
			run 2/16
				thirst
			hurt & run 4/16
				hunger
				thirst
				heatlh
			hurt & kill 5/16
				hunger
				thirst
				heatlh
					item
			kill 5/16
				thirst
					item

		2 location 3/16
			item

		3 small location 1/16
			item

		4 survivor 3/16
			trade 10/16
				item
			hurt & kill 5/16
				hunger
				thirst
				heatlh
					item
			kill 1/16
				thirst
					item

		5 horde 2/16
			run 8/32
				thirst
			hurt & run 23/32
				hunger
				heatlh
			hurt & kill 1/32
				hunger
				thirst
				health
					4-6 items

		6 animal 1/16
			hurt & run 4/16
				hunger
				thirst
				heatlh
			hurt & kill 12/16
				hunger
				thirst
				heatlh
					item

		7 waste 1/16

		8 trip 1/16
			hunger
			heatlh
}

test
{
		when running, lose thirst
		when hurt, lose hunger
			every two turns, lose both
		when killing, lose thirst

		when finding an item, 20% chance to find multiple items (2,3)




		ideally
		40-50% item
		30-40 of hurt

		current
		65% item
		42% thirst
		42% hunger
		42% health



		1 zombie 4/16
			run 2/16
				thirst
			hurt & run 4/16
				hunger
				thirst
				heatlh
			hurt & kill 5/16
				hunger
				thirst
				heatlh
					item
			kill 5/16
				thirst
					item

		2 location 3/16
			item

		3 small location 1/16
			item

		4 survivor 3/16
			trade 10/16
				item
			hurt & kill 5/16
				hunger
				thirst
				heatlh
					item
			kill 1/16
				thirst
					item

		5 horde 2/16
			run 8/32
				thirst
			hurt & run 23/32
				hunger
				heatlh
			hurt & kill 1/32
				hunger
				thirst
				health
					4-6 items

		6 animal 1/16
			hurt & run 4/16
				hunger
				thirst
				heatlh
			hurt & kill 12/16
				hunger
				thirst
				heatlh
					item

		7 waste 1/16

		8 trip 1/16
			hunger
			heatlh
}