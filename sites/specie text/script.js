var txt = document.getElementById("txt");
var rfrsh = document.getElementById("rfrsh");
var frme1 = document.getElementById("frme1");
var frme2 = document.getElementById("frme2");

rfrsh.addEventListener("click", function() {
    convert();
});
txt.addEventListener("change", function() {
    convert();
});


function convert() {
    var url1 = 'https://qaz.wtf/u/convert.cgi?text=' + txt.value;
    frme1.src = url1;

    var url2 = 'http://qaz.wtf/u/combining.cgi?mode=both&count=1&&use=' + txt.value;
    frme2.src = url2;
}