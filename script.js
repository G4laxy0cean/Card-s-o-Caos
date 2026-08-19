const cartas = document.querySelectorAll(".carta");

cartas.forEach(function(carta) {

    carta.addEventListener("click", function() {

        carta.classList.toggle("seleccionada");

    });

});


const botonSuerte = document.getElementById("botonSuerte");
const suerte = document.getElementById("suerte");

if (botonSuerte) {

    botonSuerte.addEventListener("click", function() {

        let numero = Math.floor(Math.random() * 100) + 1;

        suerte.textContent = numero;

    });

}

let enemigos = document.querySelectorAll(".card");

let contador = document.getElementById("contador");

if (contador) {
    contador.textContent =
        "Enemigos registrados: " + enemigos.length;
}

const imagenes = document.querySelectorAll(".foto-caja");

imagenes.forEach(function(imagen) {

    imagen.addEventListener("click", function() {
        imagen.classList.toggle("seleccionada");
    });

});