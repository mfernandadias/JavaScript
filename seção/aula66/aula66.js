/*/criando um timer com setInterval

//new Date(0);
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'UTC'
    });
}
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0; 
let timer;

function inciarRelogio() {
    const timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

<document.addEventListener('click', function(e) {
    console.log(e.target);

    /*if(el.classList.contains('zerar') {
        clearInterval(timer);
        relogio.ineerHTML = '00:00:00';
        segundos = 0;
    } 

}); 

iniciar.addEventListener('click', function(event){
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
});
*/

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0; 
let timer;

function iniciarRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

function pausarRelogio() {
    clearInterval(timer);
}

function zerarRelogio() {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
}

iniciar.addEventListener('click', function(event){
    iniciarRelogio();
});

pausar.addEventListener('click', function(event){
    pausarRelogio();
});

zerar.addEventListener('click', function(event){
    zerarRelogio();
});
