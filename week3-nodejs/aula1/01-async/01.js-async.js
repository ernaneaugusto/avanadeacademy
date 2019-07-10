/* 
Nosso objetivo é seguir os seguintes passos 
1 - Buscar clientes 
2 - Buscar endereços
3 - Buscar telefone

NomeCliente, Endereco, Telefone
*/


//Para rodar uma app node <NOME DO ARQUIVO> ou no VSCODE - F5
//Para sincronizar uma aplicação trabalhamos com uma convenção chamada CALLBACK (Atendente com o Ticket do fasstfood)
//Callback tem como objetivo, passar uma função e executar apos o agendamento 

/*


*/


function buscarClientes(id, callback){
   // para simular uma função assíncrona usamos o setTimeout

   setTimeout(function(){
       return callback(null, {
           id: id,
           nome: 'João da Silva',
           idade: 70,
       })
   }, 200);
}

function buscarEndereco(idCliente, callback){
   setTimeout(function(){
       return callback(null, {
           id: 1,
           rua: 'dos Bobos',
           numero: 0,
       }) 
   },200);
}

function obterTelefone(idCliente, callback){
   setTimeout(() => {
       return callback(null, {
           id: 0,
           ddd: 11,
           numero: '4002-8922',
       }) 
   },300);
}


function main(){
 buscarClientes('João', function(erro, sucesso){
       
       if(erro){
           console.error('DEU RUIM', erro);
           return;
       }

       buscarEndereco(sucesso.id, function (erro1, sucesso1){
           if(erro1){
               console.error('DEU RUIM', erro1)

               return;
           }
           console.log(sucesso1);
           obterTelefone(sucesso.id, function (erro2, sucesso2){
               if(erro2){
                   console.error('DEU RUIM', erro2)
   
                   return;
               }
               console.log(`
                   Nome: ${sucesso.nome}
                   Endereco: ${sucesso1.rua}
                   Telefone: (${sucesso2.ddd}) ${sucesso2.numero}
                `   
               )
           });
       });

   });

}

main();


