// const Heroi = require("./src/heroiEntidade");
// const HeroiDbArquivo = require('./src/heroiDbArquivo');
// const HeroiMongoDB = require("./src/heroiEntidade");


// const Commander = require("commander");
// const commander = Commander
//    .version('v1.0')
//    .option('-c, --cadastrar', 'Deve cadastrar um Heroi')
//    .option('-i, --idade [value]', 'Idade do Heroi')
//    .option('-I, --id [value]', 'ID do Heroi')
//    .option('-p, --poder [value]', 'Poder do Heroi')
//    .option('-n, --nome [value]', 'Nome do Heroi')
//    .option('-a, --atualizar [value]', 'Atualiza o Heroi')
//    .option('-r, --remover', 'Remove os Herois')
//    .option('-l, --listar', 'Lista os Herois')
//    .parse(process.argv);

// async function main() {
//    const heroi = new Heroi(commander);

//    const heroiDbArquivo = new HeroiDbArquivo();
//    const dbMongo = new HeroiMongoDB();
//    await dbMongo.connect();
//    console.log("\n\nMongo conectado\n\n");

//    // node index.mongo.js --nome Flash --poder Velocidade --idade 30 --cadastrar   
//    if (commander.cadastrar) {
//       await dbMongo.cadastrar(heroi);
//       console.log("Heroi cadastrado com sucesso!");

//       // encerra mongo
//       process.exit(0);

//       return;
//    }

//    // node index.mongo.js --nome Fl --listar
//    if (commander.listar) {
//       let filtro = {};

//       if(heroi.nome){
//          filtro = { nome: heroi.nome }
//       }

//       const herois = await dbMongo.listar(filtro);
//       console.log("Herois encontrados:\n", JSON.stringify(herois));

//       // encerra mongo
//       process.exit(0);

//       return;
//    }

//    // node index.mongo.js --id 123456 --remover
//    if (commander.remover) {
//       const id = heroi.id;
//       if(!id) {
//          throw new Error("Voce deve informar um ID!");
//       }
//       await heroiDbArquivo.remover(id)
//       console.log("Heroi removido com sucesso!");
//       return;
//    }

//    if (commander.atualizar) {
//       const { id } = heroi;
//       // para nao alterar o id deleta o id do heroi
//       delete heroi.id;
//       await heroiDbArquivo.atualizar(id, heroi);
//       console.log("Heroi atualizado com sucesso!");
//       return;
//    }
// }

// main();






// #######

// para instalar pacotes externos usamos a ferramenta NPM (Node Package Manager) ou YARN (foi criado pelo FB para ser mais performatico)

// para iniciar um projeto node.js, precisamos de um arquivo que define os pacotes. Quando outra pessoa precisar acessar o seu codigo, este arquivo lhe ensina como instalar ou quais versoes sao suportadas. 
// para iniciar um projeto 
// npm init 
// -> -y => não precisa de wizard 

//para trabalhar com programas de linha de comando usaremos o Comander
// npm install commander
// --save (No PASSO)
// --save-dev -> Ferramentas como transpiladores, testes, ferramentas para diminuir o tamho do arquivo 
// importamos o heroi
const Heroi = require('./src/heroiEntidade')
// importamos o commander
// instalar o Path Intelisense no Code
const HeroiDbArquivo = require('./src/heroiDbArquivo')
const HeroiMongoDB = require('./src/heroiDb')


const Commander = require('commander')
const commander = Commander
   .version('v1.0')
   .option('-n, --nome [value]', 'O nome do Heroi')
   .option('-i, --idade [value]', 'A idade do Heroi')
   .option('-I, --id [value]', 'O id do Heroi')
   .option('-p, --poder [value]', 'O poder do Heroi')

   // definimos opcoes para utilizar de acordo com a chamada do cliente
   .option('-c, --cadastrar',
      'deve cadastrar um Heroi')

   .option('-a, --atualizar [value]',
      'deve atualizar um Heroi')

   .option('-r, --remover',
      'deve remover um Heroi')

   .option('-l, --listar',
      'deve listar Herois')

   .parse(process.argv)

async function main() {
   try {
      const dbArquivo = new HeroiDbArquivo()
      const dbMongo = new HeroiMongoDB()
      await dbMongo.connect()
      console.log('mongo conectado!')

      const heroi = new Heroi(commander)

      // node index.js --cadastrar
      // node index.js -c
      /*
      node index.mongo.js --nome Flash --poder Velocidade --idade 30 --cadastrar
      */
      if (commander.cadastrar) {
         await dbMongo.cadastrar(heroi)
         console.log('Heroi cadastrado com sucesso!')
         // falamos para o node que terminamos nossa tarefa
         process.exit(0)
         return;
      }
      /**
       node index.mongo.js --nome Fl --listar
       */
      if (commander.listar) {
         // console.log('heroi', heroi)
         // no java atualmente usamos dois tipos de variaveis
         // -> const -> valores que nunca se alteram
         // const v1 = 0
         // v1 = 3 // erro

         // -> let -> valores que podem ser alterados
         // let v1 = 0
         // v1 = 3 // da bom
         let filtro = {}
         if (heroi.nome) {
            // filtro com mongoDB
            filtro = {
               nome: {
                  $regex: `.*${heroi.nome}*.`,
                  $options: 'i' // SEM case sensitive
               }
            }
         }
         const herois = await dbMongo.listar(filtro)
         console.log('herois', JSON.stringify(herois))
         process.exit(0)
         return;
      }

      /*
      node index.mongo.js --id 123456 --remover
      */
      if (commander.remover) {
         const id = heroi._id
         if (!id) {
            throw new Error('Voce deve passar o ID')
         }
         await dbMongo.remover(id)
         console.log('Heroi removido com sucesso!');

         // libera terminal
         process.exit(0);
         return;
      }
      /*
      node index.mongo.js --nome Flash --poder Forca --id 1562884143646 --atualizar
      */
      if (commander.atualizar) {
         const { _id } = heroi;

         if(!_id){
            throw new Error("O ID é obrigatorio");
         }

         // remove a atualizacao do _id
         delete heroi._id;

         // ajuste tecnico para remover as chaves UNDEFINED
         const heroiFinal = JSON.parse(JSON.stringify(heroi));

         await dbMongo.atualizar(_id, heroi);
         console.log('Heroi atualizado com sucesso!');

         // libera terminal
         process.exit(0);

         return;
      }
   } catch (error) {
      console.log("DEU RUIM", error);
      process.exit(0);
   }
}
main();