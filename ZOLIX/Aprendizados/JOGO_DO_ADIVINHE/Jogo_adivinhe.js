var aleatorio = 1 + Math.floor(Math.random() * 100);
console.log(aleatorio);
var cont = 0;
var nrotentativas = 10; 
"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 17;//Quantos milésimos valem 1 segundo?
var cron;

function JogarNovamente() {
  document.location.reload(true);
}

function RealizaTentativa() {
    var palpite = document.getElementById("cmpValorDigitado");
    var tentativa = document.getElementById('cmpTentativas');
    var numerosorteado = document.getElementById("cmpNumeroSorteado");
    var botao = document.getElementById("cmpBotaoValida");
    var fixo = document.getElementById("counter");
    
    var auxpalpite = new Number(palpite.value);

    function start() {
      if(cont == 0) {
      cron = setInterval(() => { timer(); }, tempo);
      cont = cont + 1;
    }
      
  }
   
    if(auxpalpite == aleatorio) {
        console.log('Tentativa Realizada ACERTOU');
        alert('Parabéns! Você acertou o número sorteado: ' + aleatorio);
        document.getElementById('cmpValorDigitado').disabled = true;
        numerosorteado.value = "Número Sorteado: " + aleatorio;
        document.getElementById('cmpBotaoValida').disabled = true; 
        
    
    }
      
      if(auxpalpite < aleatorio) {
        console.log('Tentativa Realizada MAIOR');
        alert('O número sorteado é maior!');
      }

      if(auxpalpite > aleatorio) {
        console.log('Tentativa Realizada MENOR');
        alert('O número sorteado é menor!');
      }

      if(nrotentativas == 1) {
        console.log('Fim de Jogo!');
        alert('Fim de Jogo! Suas tentativas acabaram!'); 
        document.getElementById('cmpValorDigitado').disabled = true;
        document.getElementById('cmpBotaoValida').disabled = true;
        numerosorteado.value = "Número Sorteado: " + aleatorio;

      }

    nrotentativas = nrotentativas - 1;    
    tentativa.value = "Tentativas Restantes: " + nrotentativas;
    palpite.value = "";
 
  }
  


//Para o temporizador mas não limpa as variáveis
function pause() {
  clearInterval(cron);
}




//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}


//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var formata = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = formata;
    document.getElementById('countera').innerText = "Tempo: " + formata;

      //Retorna o valor tratado
      return formata;
  }