function cadastrarUsuario(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // lógica para cadastrar usuario
      var erro = false;
      if(!erro){
        resolve("Usuário cadastrado com sucesso.");
         }else{
        reject("Erro ao cadastrar usuário.");
         }
        
    }, 2000)
  });
}
//////////// utilizar node promises.js no shell do console.
function novoUsuario(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // lógica para cadastrar usuario
      var log = true;
      if(!log){
        resolve("Usuário cadastrado com sucesso.");
         }else{
        reject("Erro ao cadastrar usuário.");
         }
        
    }, 3000)
  });
}



cadastrarUsuario()
.then((mensagem) => {
console.log(mensagem);  
})
.catch((mensagem) => {
  console.log(mensagem);
  
  

})
novoUsuario()
.then((mensagem) => {
console.log(mensagem);  
})
.catch((mensagem) => {
  console.log(mensagem);
  
  

})