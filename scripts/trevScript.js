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
	// ABOUT
	// the next section adds event listeners for expanding / collapsing button
    var sections = document.querySelectorAll(".contentBlock");
    sections.forEach(el => {

        el.children[0].addEventListener("click", function() {
            displayAbout(el.children[0]);
        });
    });

	console.log("A curious fella. I like you. ;)")

	// TITLE EFFECTS
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

var currentDisplay = null;
function displayAbout(element) {
	if (!currentDisplay & currentDisplay != element) {
		currentDisplay = element;
	} else if (currentDisplay == element) {
		currentDisplay = null;
	} else {
		changeBGColor(currentDisplay, "#000000");
		currentDisplay.children[0].className = "expandButton";
		currentDisplay = element;
	}
	if (element.children[0].className != "expandButton") {
		element.children[0].className = "expandButton";
		changeBGColor(element, "#000000");
	} else {
		element.children[0].className = "closeButton";
		changeBGColor(element);
	}
	if (currentDisplay) {
		document.getElementById("displayBoard").style.display = "flex";
		display(element.children[0].id);
	} else {
		document.getElementById("displayBoard").style.display = "none";
		display(null);
	}
}

function changeBGColor(element, color) {
	var colors = ["#fb0102", "#01ff00", "#0301fc"];
	if (color == null) {
		element.style.color = colors[randNum(0, colors.length - 1)];
	} else {
		element.style.color = color;
	}
}

function randNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var displayBoard = document.querySelectorAll("#displayBoard");
var aboutData = {future: {text: "I am studying my B.S. in Digital Audio at UVU while pursuing my music production and design dreams on the side. I hope to work in the audio field one day, sustained by my music project and other creative endeavors.", 
							img: "../media/images/about/look ahead.jpeg" },
				education: {text: "I am majoring in Digital Audio with a minor in Computer Science at UVU in Orem, Utah.", 
				 			img: "../media/images/about/education.jpg" }, 
				work: {text: "My first (and only) job has been at McDonald's. I started as crew in early 2016, was a manager by mid 2017, and became an assistant store manager in late 2017. I continue to serve thousands of customers daily while furthering my education.", 
				img: "../media/images/about/work.jpg" }};
function display(elid) {
	if (elid) {
		document.querySelector("#aboutText").innerHTML = aboutData[elid]["text"];
		document.querySelector("#aboutImg").src = aboutData[elid]["img"];
	} else {
		document.querySelector("#aboutText").innerHTML = "";
		document.querySelector("#aboutImg").src = "";
	}
}

function playSound(src) {
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("src", src);
	audioElement.play();
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