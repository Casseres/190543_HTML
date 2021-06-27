
var cont = 0;

function trataDigito(digito){
    var v = document.getElementById("visor");
    v.value += digito; // += concatena. Mantém o que já estava (exemplo: se digitar numero 1 e depois numero 4, o visor vai ficar com 14)
  }

  function limpar(){
    document.getElementById("visor").value = "";
  }

  function igual(){
    var v = document.getElementById("visor");
      v.value = eval(v.value); // eval resolve a expressao que está no visor (ele cálcula o que tem dentro do visor)
  }

  function liga(digito) {
    var btn = document.getElementById('ligar');
    var aux = document.getElementById('visor');
    
    if(cont%2==0){
      document.getElementById('ce').disabled = true;
      document.getElementById('c').disabled = true;
      document.getElementById('apaga').disabled = true;
      document.getElementById('/').disabled = true;
      document.getElementById('7').disabled = true;
      document.getElementById('8').disabled = true;
      document.getElementById('9').disabled = true;
      document.getElementById('x').disabled = true;
      document.getElementById('6').disabled = true;
      document.getElementById('5').disabled = true;
      document.getElementById('4').disabled = true;
      document.getElementById('-').disabled = true;
      document.getElementById('3').disabled = true;
      document.getElementById('2').disabled = true;
      document.getElementById('1').disabled = true;
      document.getElementById('+').disabled = true;
      document.getElementById('0').disabled = true;
      document.getElementById('.').disabled = true;
      document.getElementById('=').disabled = true;
      aux.value = "";
      btn.innerHTML = 'OFF'
    }
    if(cont%2==1){
      document.getElementById('ce').disabled = false;
      document.getElementById('c').disabled = false;
      document.getElementById('apaga').disabled = false;
      document.getElementById('/').disabled = false;
      document.getElementById('7').disabled = false;
      document.getElementById('8').disabled = false;
      document.getElementById('9').disabled = false;
      document.getElementById('x').disabled = false;
      document.getElementById('6').disabled = false;
      document.getElementById('5').disabled = false;
      document.getElementById('4').disabled = false;
      document.getElementById('-').disabled = false;
      document.getElementById('3').disabled = false;
      document.getElementById('2').disabled = false;
      document.getElementById('1').disabled = false;
      document.getElementById('+').disabled = false;
      document.getElementById('0').disabled = false;
      document.getElementById('.').disabled = false;
      document.getElementById('=').disabled = false;
      btn.innerHTML = 'ON'
    }
    cont += 1;
  }

function apagar(){
  var aux = document.getElementById('visor');

  if(aux.value.length){
    aux.value = aux.value.substr(0, aux.value.length -1);
    aux.focus();
 }
}
