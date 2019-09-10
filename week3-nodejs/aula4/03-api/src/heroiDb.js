const { MongoClient } = require('mongodb');

/**
 * show dbs: lista tabelas
 * use NomeBanco: altera contexto para o banco informado
 * 
 * INSERIR dados no BD
 * db.nomeDoBanco.insert({
 * nome: "teste",
 * idade: 27
 * })
 * 
 * LISTAR todos os dados no BD
 * db.nomeDoBanco.find({})
 * 
 * LISTAR dado especifico no BD
 * db.nomeDoBanco.find({
 * nome: "NomeQualquer"})
 */

class HeroiDB {
   constructor() {
      this.heroiCollection = {};
   }
   async connect() {
      // para conectar com o mongobd local: 
      // localhost:27017/dbName
      const mongoDbPort = "mongodb://localhost:27017/heroi";
      const mongoClient = new MongoClient(mongoDbPort, { useNewUrlParser: true });
      const connection = await mongoClient.connect();
      const heroiCollection = await connection
         .db('caracteres')
         .collection('heroi');

      // add heroi a instancia da classe
      this.heroiCollection = heroiCollection;
   }

   async cadastrar(heroi) {
      return this.heroiCollection.insertOne(heroi)
   }

   async listar(heroi, skip = 0, limit = 10) {
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

      if (heroi.nome) {
         filtro = { nome: heroi.nome }
      }
      return this.heroiCollection.find(filtro)
         .skip(skip)
         .limit(limit)
         .toArray();
   }

   async remover(id) {
      return this.heroiCollection.deleteOne({
         _id: id
      })
   }

   async atualizar(idHeroi, heroiAtualizado) {
      // o primeiro parametro é o filtro
      return this.heroiCollection.updateOne(
         {
            _id: idHeroi
         },
         {
            $set: heroiAtualizado
         }
      )
   }

}

// exportamos o modulo
module.exports = HeroiDB;

// async function main() {
//    const heroi = new HeroiDB();
//    const { heroiCollection } = await heroi.connect();
//    await heroiCollection.insertOne({
//       nome: "Flash",
//       poder: "Velocidade",
//       idade: 30
//    });

//    // find() retorna um ponteiro
//    const items = await heroiCollection.find().toArray();
//    console.log("ITEMS: ", items);
// }

// main();