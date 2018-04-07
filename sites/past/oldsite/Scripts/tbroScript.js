// Global variables
var winWidth = window.innerWidth,
	winHeight = window.innerHeight,
	
	// 'Animal Hunter' variables
	weaselX, weaselY, mwX, mwY, score = 0,
	
	// 'Counter' Variables
	count = 0,
	
	// 'Colored' variables
	colors = [], colAdd = [],
	
	// 'RPS' variables
	compScore = 0, userScore = 0,
	
	// 'Advertiser' variables
	compName, compLoc, compDes, compSpec, compWords, name,
	
	// 'Life Counter variable
	looper;

// Gets window size constantly for use
function windowResized() {
	winWidth = window.innerWidth,
	winHeight = window.innerHeight;
}

// Plays a sound, reusable everywhere
function playSound(src) {
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("src", src);
	audioElement.play();
}
function playDemo(song) {
	document.getElementById("demo").src = song;
	document.getElementById("demo").play();
}

// Random number generator, reusable everywhere
function randNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// For 'Animal Hunter' game, creates animals and gunshots
function animalMaker(animals) {
	for(var i = 0; i < animals; i++) {
		weaselX = randNum(80, (winWidth - 80));
		weaselY = randNum(80, (winHeight - 80));
		var animal = randNum(1, 4);
		weasel = document.createElement("IMG");
		w = weasel;
		w.className = "prey"
		ws = w.style;
		w.src= "Images/site1/Animals/" + animal + ".png";
		ws.width = "80px";
		ws.height = "80px";
		ws.position = "absolute";
		ws.left = weaselX + "px";
		ws.top = weaselY + "px";
		document.querySelector("html").appendChild(w);
	}
}
function gunshot(x, y) {
	// Play gunshot
	playSound("Images/site1/gunshot.mp3");
	
// Size of bullet fire
	var size = 160;
	
	// Makes bullet fire
	setTimeout(function() {
		var g = document.createElement("IMG");
		gs = g.style;
		g.src="Images/site1/click.png";
		gs.opacity = ".6";
		gs.width = size + "px";
		gs.height = size + "px";
		gs.position = "absolute";
		gs.left = (x - size/2) + "px";
		gs.top = (y - size/2) + "px";
		
		// Hides the image after .1 second
		setTimeout(function() {
			document.querySelector("html").appendChild(g);
			setTimeout(function() {
				g.parentNode.removeChild(g);
			}, 100);
		}, 0);
	}, 0);
}
function animalClick(event) {
    // Create bullet fire
    gunshot(event.clientX, event.clientY);
		
	// See if you hit an animal
	if(event.target.className == "prey") {
		score++;
		event.target.style.visibility = "hidden";
		var sound = randNum(1, 7);
		var name = sound + ".mp3";
		playSound("Images/site1/animalSounds/"+name);
		document.getElementById("score").innerHTML = score;
		setTimeout( function() {
			animalMaker(1);
		}, 1200);
	}    
}

// For 'Icon City' page, creates icons
function iconMaker(items) {
	// Splits words apart by commas
	items = items.split(",");
	
	// New array for lowercased names for file searches
	var itemsLower = [];
	
	// Goes through all the items sent and makes icons
	for(var i = 0; i < items.length; i++) {
	
		// Lower cases words sent
		itemsLower[i] = items[i].toLowerCase();
		
		// Deletes space in every word
		itemsLower[i] = itemsLower[i].replace(/\s/g, '');
		
		// Creates new li
		var listItem = document.createElement("li");
		
		var listLink = document.createElement("a");
		listLink.href = "https://trevorbrown64.github.io/Images/site2/"+itemsLower[i]+".png";
		listLink.download = itemsLower[i];
		listLink.innerHTML = "";
		
		var listWord = document.createElement("p");
		listWord.innerHTML = items[i];
		
		var icon = document.createElement("img");
		icon.className = "image";
		icon.src = "Images/site2/" + itemsLower[i] + ".png";
		icon.style.draggable = "false";
		document.querySelector("ul").appendChild(listItem);
		listItem.appendChild(listLink);
		listLink.appendChild(icon);
		listItem.appendChild(listWord);
		
		document.getElementsByTagName("li")[i].addEventListener("mouseenter", function(event) {
			playSound("Images/site2/iconHover.mp3");
		});
		}
}

// For 'Counter' site
function countAdd() {
	count++;
	document.getElementById("count").innerHTML = count;
}

// For 'Colored' site
function rainbowGo() {
	for(var i = 0; i < 3; i++) {
		colors[i] = randNum(0, 255);
		colAdd[i] = randNum(1, 4);
	}
	rainbowColors();
}
function rainbowColors() {
	document.querySelector("body").style.backgroundColor = "rgba("+colors[0]+", "+colors[1]+", "+colors[2]+", 1)";
	for(var i = 0; i < 3; i++) {
		if (colors[i] >= 255 || colors[i] <= 0) {
			colAdd[i] = randNum(1, 4);
			if (colors[i] >= 255) {
				colAdd[i] *= -1;
			}
		}
		colors[i] += colAdd[i];
	}
	document.querySelector("#text").innerHTML = "The color is <br>Red:     <redCol>"+colors[0]+"</redCol><br>Green:     <greCol>"+colors[1]+"</greCol><br>Blue:     <blueCol>"+colors[2]+"</blueCol>";
	setTimeout(rainbowColors, 500 - document.getElementById("speed").value);
}

// For 'RPS' site
function rockPaperScissors(userMove) {	
	// Random Computer Move
	var compMove =  randNum(1, 243);
	if (compMove % 3 == 0) {
		compMove = 2;
	} else if (compMove % 2 == 0) {
		compMove = 1;
	} else {
		compMove = 0;
	}
	// To see if anyone gets the legendary gun
	var compGun =  randNum(0, 10000000), 
		userGun = randNum(0, 10000000);
		
	console.log(compGun + "\n" + userGun);
	// Defines possible moves
	var moves = ["Rock", "Paper", "Scissors"];
	
	// Changes display picture and text
	document.getElementById("compMove").innerHTML = "The Computer Played<br>" + moves[compMove];
	document.getElementById("compPic").src = "Images/site5/comp"+moves[compMove]+".png";
	document.getElementById("userMove").innerHTML = "You Played<br>" + moves[userMove];
	document.getElementById("userPic").src = "Images/site5/user"+moves[userMove]+".png";
	
	// Gun display
	if (compGun == "1") {
		document.getElementById("compMove").innerHTML = "The Computer got the legendary gun!<br> Thats 1 in 10 million!";
		document.getElementById("compPic").src = "Images/site5/compGun.png";
	}
	if (userGun == "1") {
		document.getElementById("userMove").innerHTML = "You got the legendary gun!<br> Thats 1 in 10 million!";
		document.getElementById("userPic").src = "Images/site5/userGun.png";
	}
	
	// Conditions
	if (userGun == 1 && compGun == 1) {
		alertAndScore("guntie");
	} else if (userGun == 1) {
		alertAndScore("usergun");
	} else if (compGun == 1) {
		alertAndScore("compgun");
	} else if (compMove == userMove) {
		alertAndScore("tie");
	} else if ((compMove == 0 && userMove == 1) || (compMove == 1 && userMove == 2) || (compMove == 2 && userMove == 0)) {
		alertAndScore("user");
	} else {
		alertAndScore("comp");
	}
}
function alertAndScore(cond) {
	var str;
	// Alerts what happened and changes score
	switch(cond) {
		case "guntie":
			str = "You both got the gun and tied!<br>Thats 1 in 100000000000000 chance!";
			break;
		case "usergun":
			str = "The gun!!";
			userScore += 5;
			break;
		case "compgun":
			str = "The gun!!";
			compScore += 5;
			break;
		case "comp":
			str = "The computer won!!";
			compScore++;
			break;
		case "user":
			str = "You won!!";
			userScore++;
			break;
		default:
			str = "Tie!!";
	}
	for(var i = 0; i < 3; i++) {
		colors[i] = randNum(20, 235);
	}
	document.getElementById("alertBox").style.textShadow = "0 0 40px rgba("+colors[0]+", "+colors[1]+", "+colors[2]+", 1)";
	document.getElementById("alertBox").innerHTML = str;
	document.getElementById("alertBox").style.visibility = "visible";
	document.getElementById("score").innerHTML = "Computer: " + compScore + "<br>User: " + userScore;
}

// For 'Life Counter' site
function getAge(userDate) {
	var terms = ["seconds",
					"minutes",
					"hours",
					"days",
					"weeks",
					"months",
					"years"];
	clearInterval(looper);
	looper = 0;
	for (var i = 0; i <= 6; i++) {
		document.getElementById(terms[i]).innerHTML = "";
	}
	if (userDate != "") {
		// Change display text to match input date
		var monthNames = ["January",
									"February",
									"March",
									"April",
									"May",
									"June",
									"July",
									"August",
									"September",
									"October",
									"November",
									"December"];
		userDate2 = userDate.split("-");
		
		// Rearranges input date from yyyy-mm-dd to mm-dd-yyyy
		userDate2.push(userDate2[1] - 1 + "");
		userDate2.push(userDate2[2]);
		userDate2.push(userDate2[0]);
		userDate2.splice(0, 3);
		document.querySelector("h5").innerHTML = monthNames[userDate2[0]] + " " + userDate2[1].replace(/^0+(?!\.|$)/, '') + ", " + userDate2[2];
		looper = setInterval(function() {
			var today = new Date(),
				birth = new Date(userDate + " 0:00"),
				diff = today.getTime() - birth.getTime(),
				seconds = Math.floor(diff / 1000),
				minutes = Math.floor(seconds / 60),
				hours = Math.floor(minutes / 60),
				days = Math.floor(hours / 24),
				weeks = Math.floor(days / 7),
				months = Math.floor(weeks / 4.35),
				years = Math.floor(weeks / 52),
				times = [seconds,
					minutes,
					hours,
					days,
					weeks,
					months,
					years];
				for (var i = 0; i <= 6; i++) {
					document.getElementById(terms[i]).innerHTML = "You've been alive for " + times[i] + " " + terms[i] + ".";
				}
		}, 1000);
	} else {
		// Date wasn't correct
		document.querySelector("h5").innerHTML = "Please enter a valid date.";
	}
}