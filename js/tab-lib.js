// a function for me to create constant width comments :)
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