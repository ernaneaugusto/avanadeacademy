const { ObjectID } = require("mongodb");

class Heroi {
   constructor({ id, nome, idade, poder }) {
      // caso _id venha preenchido convertemos para formato ObjectId do BD Mongo
      this._id = id ? ObjectID(id) : id;
      this.nome = nome;
      this.idade = idade;
      this.poder = poder;
   }
}

module.exports = Heroi;