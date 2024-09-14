var img = window.document.getElementById('img');
var title = window.document.getElementById('title');
var clicks = 0;
var timer;

document.getElementById("img").addEventListener("click", function() {
    clicks++;
    if (clicks == 3) {
        img.innerHTML = `<img src="lampada-quebrada.png">`;
        title.innerHTML = "<h1>Parabéns, você quebrou, seu imbecil!</h1>";
    };
    clearTimeout(timer);
    timer = setTimeout(resetclicks, 500);
});

function resetclicks() {
    clicks = 0;
    clearTimeout(timer);
};

function on() {
    img.innerHTML = `<img src="lampada-acesa.png" onclick="off()">`;
};

function off() {
    img.innerHTML = `<img src="lampada-apagada.png" onclick="on()">`;
};