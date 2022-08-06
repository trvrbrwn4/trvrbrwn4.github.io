function loader() {
    
}
function updateTimer() {
    var formattedTime = secondsToTimestamp(wavesurfer.getCurrentTime());
    document.querySelector("#waveform-time .time").innerHTML = formattedTime;
}

function secondsToTimestamp(seconds) {
    seconds = Math.floor(seconds);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds - (h * 3600)) / 60);
    var s = seconds - (h * 3600) - (m * 60);

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s;
}
function featured() {
    if (!localStorage.getItem("vol")) {
        localStorage.setItem("vol", 50);
    } else {
        localStorage.setItem("vol", localStorage.getItem("vol"));
    }
    try {
        document.querySelector('#volumeSlider').value = localStorage.getItem("vol");
    } catch(error) {

    }
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            wavesurfer.playPause();
        }
    }

    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#ffffff',
        progressColor: '#222222',
        fillParent: true,
        barWidth: 2,
    });

    let playPause = document.querySelector('#playPause');
    playPause.addEventListener('click', function() {
        wavesurfer.playPause();
    });

    // Toggle play/pause text
    wavesurfer.on('play', function() {
        document.querySelector('#play').style.display = 'none';
        document.querySelector('#pause').style.display = '';
    });
    wavesurfer.on('pause', function() {
        document.querySelector('#play').style.display = '';
        document.querySelector('#pause').style.display = 'none';
    });

    // The playlist links
    let links = document.querySelectorAll('#playlist a');
    let currentTrack = 0;

    // Load a track by index and highlight the corresponding link
    let setCurrentSong = function(index) {
        links[currentTrack].classList.remove('active');
        currentTrack = index;
        links[currentTrack].classList.add('active');
        wavesurfer.load(links[currentTrack].href);
    };

    // Load the track on click
    Array.prototype.forEach.call(links, function(link, index) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            setCurrentSong(index);
        });
    });

    // Play on audio load
    wavesurfer.on('click', function() {
        wavesurfer.play();
    })

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

    wavesurfer.on('ready', function(e) {
        wavesurfer.play();
    });

    // Go to the next track on finish
    wavesurfer.on('finish', function() {
        if (currentTrack == links.length - 1) {
            setCurrentSong(0);
        } else {
            setCurrentSong((currentTrack + 1) % links.length);
        }
    });

    // Keeps time display updated
    wavesurfer.on('ready', updateTimer)
    wavesurfer.on('audioprocess', updateTimer)
    wavesurfer.on('seek', updateTimer)

    // Load the first track
    setCurrentSong(currentTrack);
    wavesurfer.setVolume(localStorage.getItem("vol")/100);



    let volumeSlider = document.querySelector('#volumeSlider');
    volumeSlider.addEventListener('input', function(e) {
        wavesurfer.setVolume(volumeSlider.value/100);
        localStorage.setItem("vol", document.querySelector('#volumeSlider').value);
    });

    let reverseButton = document.querySelector('#reverse');
    reverseButton.addEventListener('click', function(e) {
        // see if skip is pressed early on in waveform, to skip back to previous song
         if ((wavesurfer.getDuration() - wavesurfer.getCurrentTime()) > wavesurfer.getDuration() - 1) {
            if (currentTrack == 0) {
                console.log("on first track");
                setCurrentSong(links.length - 1);
            } else {
                setCurrentSong((currentTrack - 1) % links.length);
            }
         } else {
            wavesurfer.skipBackward(wavesurfer.getDuration());
         }
    });

    let skipButton = document.querySelector('#skip');
    skipButton.addEventListener('click', function(e) {
        if (currentTrack == links.length - 1) {
            setCurrentSong(0);
        } else {
            setCurrentSong((currentTrack + 1) % links.length);
        }
    });
}

var family,
    aboutData = {
        "About": {"content": "Hello there!<br><br>I'm Trevor. I'm a creative guy that loves using technology to express myself. Whether it's electronic music, digital art, or anything else tech; <strong>I am always creating.</strong> I also love getting out into nature to camp, hike, ski, and explore.<br><br>My purpose is to spread positivity, creativity, love, and open mindedness throughout the world.",
                    "picture": "media/images/about/me.jpeg"},
        "Education": {"content": "I attend Utah Valley University in Orem, Utah. I am currently working towards my Bachelors in Digital Audio with a minor in Computer Science.",
                    "picture": "media/images/about/school.jpg"},
        "Work": {"content": "My first and only job has been at McDonald's. I serve thousands of customers daily while furthering my education.",
                    "picture": "media/images/about/work.jpg"}
    };
function about() {
    // The playlist links
    let aboutNav = document.querySelectorAll('.aboutNav a');

    // Load the track on click
    Array.prototype.forEach.call(aboutNav, function(link, index) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(".picture a").href = aboutData[e.target.innerHTML]["picture"];
            document.querySelector(".picture img").src = aboutData[e.target.innerHTML]["picture"];
            document.querySelector(".content").innerHTML = aboutData[e.target.innerHTML]["content"];

            var parent = e.target.parentElement.parentElement;
            if (!parent.classList.contains("active")) {
                Array.prototype.forEach.call(aboutNav, function(sibling, index) {
                    sibling.classList.remove("active");
                });
                parent.classList.add("active");
            }
        });
    });
    aboutNav[0].classList.add("active");
    document.querySelector(".picture a").href = aboutData["About"]["picture"];
    document.querySelector(".picture img").src = aboutData["About"]["picture"];
    document.querySelector(".content").innerHTML = aboutData["About"]["content"];
}

function audio() {
    if (!localStorage.getItem("vol")) {
        localStorage.setItem("vol", 50);
    } else {
        localStorage.setItem("vol", localStorage.getItem("vol"));
    }
    try {
        document.querySelector('#volumeSlider').value = localStorage.getItem("vol");
    } catch(error) {

    }
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            wavesurfer.playPause();
        }
    }

    window.addEventListener("resize", function(e) {
    });

    // The playlist links
    let audioNav = document.querySelectorAll('.audioNav a');

    // Load the track on click
    Array.prototype.forEach.call(audioNav, function(link, index) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var parent = e.target.parentElement.parentElement;
            if (!parent.classList.contains("active")) {
                Array.prototype.forEach.call(audioNav, function(sibling, index) {
                    sibling.classList.remove("active");
                });
                parent.classList.add("active");
                filterAudio(e.target.innerHTML);
            } else {
                parent.classList.remove("active");
                filterAudio("displayAll");
            }
        });
    });

    wavesurfer = WaveSurfer.create({
        container: '#waveform2',
        waveColor: '#ffffff',
        progressColor: '#222222',
        fillParent: false,
        barWidth: 2,
        minPxPerSec: 1
    });

    let playPause = document.querySelector('#playPause');
    playPause.addEventListener('click', function() {
        wavesurfer.playPause();
    });

    // Toggle play/pause text
    wavesurfer.on('play', function() {
        document.querySelector('#play').style.display = 'none';
        document.querySelector('#pause').style.display = '';
    });
    wavesurfer.on('pause', function() {
        document.querySelector('#play').style.display = '';
        document.querySelector('#pause').style.display = 'none';
    });

    // The playlist links
    let links = document.querySelectorAll('#playlist a');
    let currentTrack = 0;

    // Load a track by index and highlight the corresponding link
    let setCurrentSong = function(index) {
        links[currentTrack].classList.remove('active');
        currentTrack = index;
        links[currentTrack].classList.add('active');
        wavesurfer.load(links[currentTrack].href);
        document.querySelector("#songTitle").innerHTML = links[currentTrack].id;
    };

    // Load the track on click
    Array.prototype.forEach.call(links, function(link, index) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            wavesurfer.pause();
            setCurrentSong(index);
        });
    });

    // Play on audio load
    wavesurfer.on('click', function() {
        wavesurfer.play();
    })

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

    wavesurfer.on('ready', function(e) {
        wavesurfer.play();
    });

    // Go to the next track on finish
    wavesurfer.on('finish', function() {
        if (currentTrack == links.length - 1) {
            setCurrentSong(0);
        } else {
            setCurrentSong((currentTrack + 1) % links.length);
        }
    });

    // Keeps time display updated
    wavesurfer.on('ready', updateTimer)
    wavesurfer.on('audioprocess', updateTimer)
    wavesurfer.on('seek', updateTimer)

    // Load the first track
    setCurrentSong(currentTrack);
    wavesurfer.setVolume(localStorage.getItem("vol")/100);



    let volumeSlider = document.querySelector('#volumeSlider');
    volumeSlider.addEventListener('input', function(e) {
        wavesurfer.setVolume(volumeSlider.value/100);
        localStorage.setItem("vol", document.querySelector('#volumeSlider').value);
    });

    let reverseButton = document.querySelector('#reverse');
    reverseButton.addEventListener('click', function(e) {
        // see if skip is pressed early on in waveform, to skip back to previous song
         if ((wavesurfer.getDuration() - wavesurfer.getCurrentTime()) > wavesurfer.getDuration() - 1) {
            if (currentTrack == 0) {
                setCurrentSong(links.length - 1);
            } else {
                setCurrentSong((currentTrack - 1) % links.length);
            }
         } else {
            wavesurfer.skipBackward(wavesurfer.getDuration());
         }
    });

    let skipButton = document.querySelector('#skip');
    skipButton.addEventListener('click', function(e) {
        if (currentTrack == links.length - 1) {
            setCurrentSong(0);
        } else {
            setCurrentSong((currentTrack + 1) % links.length);
        }
    });
}

function filterAudio(year) {
    var songs = document.querySelectorAll('#playlist a');
    if (year == "displayAll") {
        // Show all songs again
        Array.prototype.forEach.call(songs, function(song, index) {
            song.hidden = false;
        });
    } else {
        if (year == "Pre 2015") {
            year = "Pre";
        }
        // Show all songs again
        Array.prototype.forEach.call(songs, function(song, index) {
            song.hidden = false;
        });
        // Show songs for selected year
        Array.prototype.forEach.call(songs, function(song, index) {
            if (!song.classList.contains(year)) {
                song.hidden = true;
            }
        });
    }
}