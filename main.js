
function tocar(idAudio) {
    document.querySelector(idAudio).play();
}

const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < lista.length) {
    const tecla = lista[contador];
    const classe = tecla.classList[1];

    const idSom = `#som_${classe}`;
    tecla.onclick = function () {
        tocar(idSom);
    }

    contador = contador + 1;

    tecla.onkedown = function (evento) {
        tecla.classList.add('ativa')
        console.log(evento.code === 'space' || evento.code === 'Enter');
    
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}