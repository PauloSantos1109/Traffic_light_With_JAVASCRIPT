'use strict';

var sinal = document.getElementById('sinal');
var btnVerde = document.getElementById('verde');
var btnVermelho = document.getElementById('vermelho');
var btnAmarelo = document.getElementById('amarelo');
let restart = document.getElementById('reset');
/* sinal.src ='./img/sinalVermelho.png';
 */

function reiniciar(){
    sinal.src ='img/startSinal.png';
}
function podePassar(){
    sinal.src ='img/sinalVerde.png';
}
function atencao(){
     sinal.src ='img/sinalAmarelo.png';
}
function naoPodePassar(){
    sinal.src ='img/sinalVermelho.png';
}
function sinalIndefinido(){
    return lamp.src.indexOf('startSinal') > -1

}
console.log(btnVerde);
restart.addEventListener('click',reiniciar);
btnVerde.addEventListener('click',podePassar);
btnAmarelo.addEventListener('click',atencao);
btnVermelho.addEventListener('click',naoPodePassar);
