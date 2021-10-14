var body = document.querySelector("body");
var text = document.getElementsByClassName('green-background-text');

for (let i = 0; i < text.length; i++){ 
    document.addEventListener("scroll", typeWrite(text[i]));
}

function textAnimate() {
    body.className += " animate";
}

function typeWrite(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 50 * i);
    })
}

window.onload = function() {
    textAnimate();
};