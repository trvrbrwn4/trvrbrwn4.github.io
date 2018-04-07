var crew, crewCount,
	man, manCount,
	asm, asmCount,

	songTitle = ["Differences", "Payphone", "Memory","Harder Better Faster Stronger"],
	shortSong = ["differences","payphoneRemix", "memory", "hbfs"],
	songText = ["Solo release. 3:15 minutes long. 86 tracks. 28 hours of work.", "Remix of Maroon 5. 4:34 minutes long. 92 tracks. Over 80 hours of work. Most popular song.", "Solo release. 3:00 minutes long. 32 Tracks. 4 hours of work.", "Remix of Daft Punk. 3:16 minutes long. 44 tracks. Over 40 hours of work."],
	songCount = (songTitle.length*10000);

function loadPage() {
	var links = document.getElementsByTagName('a');
	for (var i = 0, length = links.length; i < length; i++) {
		links[i].addEventListener("mouseover", function() {
			playSound("sounds/iconHover.mp3");
			playSound("../sounds/iconHover.mp3");
		});
	}
}
function playSound(src) {
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("src", src);
	audioElement.play();
}

function loadWork() {
	crew = ["Frontline of customer relations", "Responsible for my position, sometimes even multiple ones", "Training fellow crew", "Taking, assembling, and serving various orders under a time constraint"];
	crewCount = (crew.length*10000), crewBox = document.getElementById("crewScroll");
	man = ["Positioning a group of crew", "Managing the workers to maintain speed, accuracy, cleanliness and friendliness", "Caring for the entire stores operation, rather than just one position", "Maintaining labor percentages", "Placing change orders"];
	manCount = (man.length*10000), manBox = document.getElementById("manScroll");
	asm = ["Covered the store manager December 16, 2017 to January 26, 2018", "Assisted with placing truck orders for the entire store", "Hiring and following up on new employees and training", "Focusing on improving sales", "Developing new policies and procedures, as well as following current ones", "Following up with customers to improve the quality of our store"];
	asmCount = (asm.length*10000), asmBox = document.getElementById("asmScroll");
	changeCrew(0);
	changeMan(0);
	changeAsm(0);
}
function changeCrew(count) {
	crewCount+=count;
	crewBox.innerHTML = (crewCount%crew.length)+": "+crew[(crewCount%crew.length)];
}
function changeMan(count) {
	manCount+=count;
	manBox.innerHTML = (manCount%man.length)+": "+man[(manCount%man.length)];
}
function changeAsm(count) {
	asmCount+=count;
	asmBox.innerHTML = (asmCount%asm.length)+": "+asm[(asmCount%asm.length)];
}

function showArt(piece) {
	document.getElementById("example").src = "../art/art"+piece+".png";
}

function loadSong() {
	changeSong(0);	
}
function changeSong(count) {
	songCount+=count;
	document.getElementById("songTitle").innerHTML = songTitle[(songCount%songTitle.length)];
	document.getElementById("songText").innerHTML = songText[(songCount%songTitle.length)];
	document.getElementById("songLink").href = "../sites/redirect/"+shortSong[(songCount%songTitle.length)]+".html";
	document.getElementById("songPic").src = "../Music/"+shortSong[(songCount%songTitle.length)]+"Pic.png";
}