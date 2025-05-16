// a function to output consistent width comments for my codebase
function commentMaker(title) {
    const fixedWidth = 40;
    const sidewidth = (fixedWidth - title.split("").length) / 2;
    console.log("*".repeat(sidewidth) + " " + title + " " + "*".repeat(sidewidth));
}

// creates an HTML element, with innerHTML
function createElement(typeName, innerText = null) {
    var el = document.createElement(typeName);
    if (innerText) el.innerHTML = innerText;
    return el;
}

// a function to return a random number between a min and a max (inclusive)
function randomFrom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener('DOMContentLoaded', function () {
    setInterval(function() {
        for (let i = 0; i < 10; i++) {
            createStar();
        }
    }, 50);
});

// star animation
function createStar() {
    const star = createElement('div');
    star.classList.add('star');
    star.style.top = Math.floor(Math.random() * (window.innerHeight - 20)) + 10 + 'px';
    star.style.left = Math.floor(Math.random() * (window.innerWidth - 20)) + 10 + 'px';

    // document.body.appendChild(star);
    document.querySelector("main").insertBefore(star, document.querySelector("main").firstChild);

    setTimeout(() => {
        star.remove();
    }, 1000);
}