// importacao modulo para trabalhar com arquivos
const {
   exists,
   promises: {
      writeFile,
      readFile
   }
} = require('fs');

const existsAsync = (pathArquivo) => {
   return new Promise((resolve, reject) => {
      return exists(pathArquivo, (existe) => resolve(existe));
   });
}

class HeroiDbArquivo {

   constructor() {
      this.NOME_ARQUIVO = "herois.json";
   }

   async _obterArquivo() {
      // verifica se arquivo existe antes de acessa-lo
      if (! await existsAsync(this.NOME_ARQUIVO)) {
         return [];
      }
      // le arquivo no diretorio e converte para JSON
      const texto = await readFile(this.NOME_ARQUIVO);
      return JSON.parse(texto)
   }
   async _escreverArquivo(dadoEmJson) {
      // pegamos o arquivo e convertemos em texto
      const dadoTexto = JSON.stringify(dadoEmJson);
      await writeFile(this.NOME_ARQUIVO, dadoTexto);
      return;
   }

   async cadastrar(heroi) {
      const herois = await this.listar();
      heroi.id = Date.now();
      herois.push(heroi);
      await this._escreverArquivo(herois);
      return;
   }
   // funcao com filtro opcional
   async listar(filtro = {}) {
      // caso filtro vazio sera retornado todos os resultados
      if (!Object.keys(filtro).length) {
         return await this._obterArquivo();
      }

      const dados = await this._obterArquivo();
      // para cada item chamaremos uma funcao, caso resultado true ele continua no array
      const dadosFiltrados = dados.filter(heroi => {
         return ~heroi.nome.toLowerCase()
            .indexOf(filtro.nome.toLowerCase());
      });

      return dadosFiltrados;
   }
}

async function main() {
   const minhaClasse = new HeroiDbArquivo();
   // await minhaClasse.cadastrar({
   //    nome: "Flash",
   //    poder: "Corre pakas"
   // });
   const dado = await minhaClasse.listar({
      nome: "bob"
   });
   console.log('Arquivo: ', dado);
}

main();

// MSBlobBuilder.exports = HeroiDbArquivo;