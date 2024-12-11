let imagens = ["urso-1.png", "urso-2.png", "urso-3.png"];
let contadorPASSOS = 30;
let contador = 0;

function Andar(){
    let URSOandando = document.getElementById("urso");
    let ursoIMAGEM = document.querySelector("#urso");

    let esquerda = parseInt(window.getComputedStyle(urso).left) ||0;

    URSOandando.style.left = (esquerda + contadorPASSOS + "px");
    ursoIMAGEM.src = imagens[contador % 3];

    contador += 1;
};
setInterval(Andar, 500);