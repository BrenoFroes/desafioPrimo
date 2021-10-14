function textAnimate(body) {
    body.className += " animate";
}

function imgAnimate(crease){
    let img = document.getElementsByClassName("img-eigth-section")[0];
    if(crease)
        img.style.maxWidth = '300px';
    else
        img.style.maxWidth = '150px';
}

function typeWrite(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 50 * i);
    })
}

window.onload = function() {
    var body = document.querySelector("body");
    var text = document.getElementsByClassName('green-background-text');
    
    textAnimate(body);
    for (let i = 0; i < text.length; i++){ 
        document.addEventListener("scroll", typeWrite(text[i]));
    }
};