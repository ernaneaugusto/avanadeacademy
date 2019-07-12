// importamos o modulo interno do Node.js
// para converter callbacks para Promises
// IMPORTANTE: Caso a função que tenha callback não seguir a convenção (erro, sucesso), não vai conseguir realizar a conversao
//  const util = require('util')
//  util.promisify
//  util.log
//  util.isString
// para extrair somente o necessario
// de um OBJETO-> {nomeDaChave} = objeto
// Tecnica chama DESTRUCTURING
const { promisify } = require('util')

// convertemos a função obterTelefone
const obterTelefoneAsync = promisify(obterTelefone)

function buscarClientes(id) {
    // para simular uma função assincrona, usamos o setTimeout
    // retornamos um objeto Promise
    // para resolver depois
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: id,
                nome: 'João da silva',
                idade: 70
            })
        }, 20)
    })

}

function buscarEndereco(idCliente) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                rua: 'dos bobos',
                numero: 0
            })
        }, 20);
    })
}

function obterTelefone(idCliente, callback) {
    setTimeout(() => {
        return callback(null, {
            id: 0,
            ddd: 11,
            numero: '4002-8900'
        })
    }, 30);
}

function main() {
    const clientesPromise = buscarClientes('João')
    // para pegar o sucesso
    clientesPromise
        .then(function (cliente) {
            const clienteId = cliente.id
            return buscarEndereco(clienteId)
                .then(function (endereco) {
                    return {
                        id: cliente.id,
                        nome: cliente.nome,
                        endereco: `${endereco.rua}, ${endereco.numero}`
                    }
                })
        })
        .then(function (clienteEndereco) {
            const { id } = clienteEndereco;

            return obterTelefoneAsync(id)
                .then(function (telefone) {
                    return {
                        ...clienteEndereco,
                        telefone: `(${telefone.ddd}) ${telefone.numero}`
                    }
                })
        })
        .then(function (resultado) {
            console.log('resultado', resultado)
        })
        .catch(function (error) {
            console.error('DEU RUIM', error)
        })
}
main()
