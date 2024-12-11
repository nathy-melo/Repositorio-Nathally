let imagens = ["urso-1.png", "urso-2.png", "urso-3.png"];
let contadorPASSOS = 30;
let contador = 0;

function move(event){
    if(event.key == 'd'){
        moveRight();
    } else if(event.key == 'a'){
        moveLeft();
    }
};
function moveRight(){
    let urso = document.getElementById("urso");
    urso.classList.removeddddddd("flip-image");
    contadorPASSOS += 5
    urso.style.left = (contadorPASSOS + "px");
    urso.src = imagens[contador % 3];

    contador += 1;
};
function moveLeft(){
    let urso = document.getElementById("urso");
    urso.classList.add("flip-image");
    contadorPASSOS -= 5
    urso.style.left = (contadorPASSOS + "px");
    urso.src = imagens[contador % 3];

    contador += 1;
};
window.addEventListener('keydown', move);