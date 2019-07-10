const Heroi = require("./src/heroiEntidade");

const Commander = require("commander");
const commander = Commander
   .version('v1.0')
   .option('-c, --cadastrar', 'Deve cadastrar um Heroi')
   .option('-i, --idade [value]', 'Idade do Heroi')
   .option('-I, --id [value]', 'ID do Heroi')
   .option('-p, --poder [value]', 'Poder do Heroi')
   .option('-n, --nome [value]', 'Nome do Heroi')
   .option('-a, --atualizar [value]', 'Atualiza o Heroi')
   .option('-r, --remover', 'Remove os Herois')
   .option('-l, --listar', 'Lista os Herois')
   .parse(process.argv);

function main() {
   const heroi = new Heroi(commander);

   if (commander.cadastrar) {
      console.log("Chamou CADASTRAR");
      return;
   }
   if (commander.listar) {
      console.log("Chamou LISTAR");
      return;
   }
   if (commander.remover) {
      console.log("Chamou REMOVER");
      return;
   }
   if (commander.atualizar) {
      console.log("Chamou ATUALIZAR");
      return;
   }
}

main();