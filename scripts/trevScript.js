//		 hNs:                    .omN       
//		 dMMMNy/`             `/hMMMM/      
//		 dMMMMMMMh/`        :yMMMMMMMh      
//		 mMMMMMMMMMMh+    sNMMMMMMMMMM`     
//		 mMMMMMNmmdhhyy  syyhhhdddmmNN:     
//										      
//		  `yMMMMMMMMMMMMMMMMMMMMMMMMs`      
//		    :mMMMMMMMMMMMMMMMMMMMMh.        
//		     `sMMMMMMMMMMMMMMMMMm:          
//		       -mMMMMMMMMMMMMMN+            
//		         oMMMMMMMMMMMs`             
//      		  -dMMMMMMMh-               
//		            oMMMMm/                 
//		             .dNo                   
//		               W
// Hello there.
//										
//           -Trevor






var crew, crewCount,
	man, manCount,
	asm, asmCount,

	originalTitle,
	isBlurred = false,

	songTitle = ["Memory", "Let Go", "Payphone","Differences", "Harder Better Faster Stronger"],
	songText = ["Solo release. 3:00 minutes. Chillstep. 6 hours of work.", "Deadmau5 & Grabbitz remix. 6:53 minutes. Trance. 36 hours of work.", "Maroon 5 remix. 4:34 minutes. Indie Dance. Over 80 hours of work.", "Solo release. 3:15 minutes. Progressive House. 28 hours of work.", "Daft Punk remix. 3:16 minutes. Progressive House. 40 hours of work."],
	songLink = ["memory","letgo","payphone","differences","hbfs"],
	songDate = ["February 5, 2018", "February 16, 2017", "December 21, 2015", "October 4, 2015", "April 28, 2015"];

function loadArt() {
	for (var i = 0; i < 18; i++) {
		var preload = new createjs.LoadQueue();
		//preload.addEventListener("fileload", handleFileComplete);
		preload.loadFile("../media/images/art/art"+i+".png");
	}
}
function loadPage() {
	var links = document.getElementsByTagName('a');
	for (var i = 0, length = links.length; i < length; i++) {
		links[i].addEventListener("mouseover", function() {
			playSound("sounds/iconHover.mp3");
			playSound("../sounds/iconHover.mp3");
		});
	}

	console.log("A sneaky little bugger. I like you. ;)")

	// easter egg for on blur/focus effects
	originalTitle = document.title;
	window.onblur = function() {
		isBlurred = true;
		setTimeout(function() {
			if (isBlurred) {
				document.title = "Come back. :(";
				setTimeout(function() {
					if (isBlurred) {
						document.title = "Come back, I miss you. :(";
						setTimeout(function() {
							if (isBlurred) {
								document.title = "Fine be that way.";
							}
						}, 80000);
					}
				}, 80000);
			}
		}, 20000);
	};
	window.onfocus = function() {
		if (isBlurred) {
			document.title = "Welcome back! :)";
			setTimeout(function() {
				document.title = originalTitle;
			}, 2000)
		}
		isBlurred = false;
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
	document.getElementsByClassName("example")[0].src = "../media/images/art/art"+piece+".png";
}

function loadSong() {
	$('.carousel').slick({
		slidesToShow: 3,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 8000
	});
	$('.carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSlide = $('.carousel').slick('slickCurrentSlide');
		changeSong(currentSlide);
	});
		var preload = new createjs.LoadQueue();
		preload.loadFile("../media/images/music/diffArt.png");
		preload.loadFile("../media/images/music/hbfsArt.png");
		preload.loadFile("../media/images/music/letgoArt.png");
		preload.loadFile("../media/images/music/memArt.png");
		preload.loadFile("../media/images/music/payArt.png");
	changeSong(0);
}
function changeSong(index) {
	document.getElementById("songTitle").innerHTML = songTitle[index];
	document.getElementById("songText").innerHTML = songText[index];
	document.getElementById("songDate").innerHTML = songDate[index];
	document.getElementById("songLink").href = "../sites/redirect/music/"+songLink[index]+".html";
}