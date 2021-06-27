function acessar(){

  var aux1 = document.getElementById("cmp_email_login");
  var aux2 = document.getElementById('cmp_senha_login');

  var email = new String(aux1.value);
  var senha = new String(aux2.value);

  if(email != "190543@upf.br"){
      alert('E-mail invalido! verifique!'); 
      aux1.value = '';
    } 
    
  else if(senha != '123456'){
      alert('Senha invalida! verifique!'); 
      aux2.value = '';
    } 

  else if(email == "190543@upf.br" && senha == '123456'){
      acess = 1;
      /*window.location.href="https://www.upf.br/";*/
      window.location.href="ZOLIX/index.html";
      
    }

}