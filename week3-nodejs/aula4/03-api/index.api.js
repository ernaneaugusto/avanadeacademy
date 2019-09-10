// start: npx nodemon index.api.js

// vamos importar a biblioteca padrao do node para trabalhar com requisicoes web
const PORT = 3000;
const http = require('http');
// Hapi eh como o Express
const Hapi = require('hapi');
const app = new Hapi.Server({
   port: PORT
});
// O Joi valida as requisicoes
// add na config.validate da rota
const Joi = require('joi');
// swagger faz a documentacao automaticamente
// 1- add o plugin ao Hapi
// 2- add tags nas configs de rotas
const HapiSwagger = require('hapi-swagger');
const Vision = require('vision');
const Inert = require('inert');
// padroniza respostas de status http
const Boom = require('boom');

const Db = require('./src/heroiDb');

const { ObjectID } = require('mongodb');

// http.createServer((req, res) => {
//    res.end("Hello");
// }).listen(PORT, () => {
//    console.log(`Servidor rodando ${PORT}`);
// })

async function main() {
   try {
      const database = new Db();
      await database.connect();
      console.log("Database conectado com sucesso! /o/");

      await app.register([
         Inert,
         Vision,
         {
            plugin: HapiSwagger,
            options: {
               documentationPath: "/v1/documentation",
               info: {
                  title: 'API Heroes - Ernane',
                  version: 'v1.0'
               },
               lang: 'pt'
            }
         }
      ])

      app.route([
         {
            // localhost:3000/v1/herois
            // localhost:3000/v1/herois?nome=nomeQualquer
            // localhost:3000/v1/herois?skip=1&limit=1
            path: '/v1/herois',
            method: 'GET',
            config: {
               tags: ['api'],
               description: "Listar Herois",
               notes: "Pode filtrar por nome fazer paginacao",
               validate: {
                  // podemos validar headers, query, payloads e params
                  query: {
                     nome: Joi.string().max(10).min(2),
                     skip: Joi.number().default(0),
                     limit: Joi.number().max(10).default(10)
                  },
                  // por padrao o Hapi nao mostra os erros, entao manipulamos a funcao para mostra-lo
                  failAction: (request, headers, err) => {
                     throw err;
                  }
               }
            },
            handler: async (request) => {
               try {
                  // return await database.listar();
                  const { query } = request;
                  const { skip, limit } = query;

                  // 
                  return database.listar(query, parseInt(skip), parseInt(limit));
               } catch (error) {
                  console.error("Deu ruim", error);
                  return Boom.internal();
               }
            }
         },
         {
            path: "/v1/herois",
            method: "POST",
            config: {
               tags: ['api'],
               description: "Cadastrar Herois",
               notes: "Cadastra por Nome, Idade e Poder",
               validate: {
                  payload: {
                     nome: Joi.string().max(10).required(),
                     idade: Joi.number().required(),
                     poder: Joi.string().max(10).required()
                  },
                  failAction: (request, headers, err) => {
                     throw err;
                  }
               }
            },
            handler: async (request, headers) => {
               try {
                  const { payload } = request;
                  const value = await database.cadastrar(payload);

                  return headers.response(value).code(201);
               } catch (error) {
                  console.error("Deu ruim", error);
                  return Boom.internal();
               }
            }
         },
         {
            path: '/v1/herois/{id}',
            method: 'DELETE',
            config: {
               tags: ['api'],
               description: "Remover Heroi",
               notes: "Remove um heroi buscando por id",
               validate: {
                  params: {
                     id: Joi.string().max(40).required()
                  },
                  failAction(request, headers, error) {
                     throw error;
                  }
               }
            },
            async handler(request) {
               try {
                  const { id } = request.params;
                  return database.remover(ObjectID(id));
               } catch (error) {
                  console.log("Deu ruim", null);
                  return Boom.internal();
               }
            }
         },
         {
            path: '/v1/herois/{id}',
            method: 'PATCH',
            config: {
               tags: ['api'],
               description: "Atualizar Heroi",
               notes: "Atualiza um heroi parcialmente por id",
               validate: {
                  params: {
                     id: Joi.string().max(40).required()
                  },
                  payload: {
                     nome: Joi.string().max(10).min(2),
                     poder: Joi.string().max(10).min(2),
                     idade: Joi.number().min(18)
                  },
                  failAction(request, headers, error) {
                     throw error;
                  }
               }
            },
            async handler(request) {
               try {
                  const { id } = request.params;
                  const { payload } = request;
                  return database.atualizar(ObjectID(id), payload);
               } catch (error) {
                  console.log("Deu ruim", null);
                  return Boom.internal();
               }
            }
         }
      ]);

      await app.start();
      console.log(`Servidor rodando ${app.info.host}:${app.info.port}`);
   } catch (e) {
      console.error("Deu ruim primeiro catch", e);
   }
}

main();