//Node modules = São um conjunto de funcionalidades que ajudam a resolver determinada tarefa. (Biblioteca)

//Função que permite efetuar a importação dos módulos Node para o código
//A function require por padrão busca na pasta node_modules
// const express = require('express');

//Este módulo retorna uma function
// const app = express();


//Essa função só será executada quando o servidor receber uma requisição do cliente.
//Função Callback

// const server = http.createServer(function (req, resp) {
//     if (req.url == '/') {
//         resp.end(`
//         <html>
//             <head>
//                 <meta charset="UTF-8">
//             </head>
//             <body>
//                 <h1>Casa do Código</h1>
//             </body>
//         </html>`);
//     } else if (req.url == '/livros') {
//         resp.end(`
//         <html>
//             <head>
//                 <meta charset="UTF-8">
//             </head>
//             <body>
//                 <h1>Listagem de Livros</h1>
//             </body>
//         </html>`);
//     }
// });

const app = require('./src/config/custom-express');

//A biblioteca express se responsabiliza por lidar com o protocolo Http
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

//Possuí sobrecargas

// server.listen(3000);
// server.listen(3000, 'localhost');

//NPM - Node Package Manager - O Gerenciador de pacotes do Nugget tem a função de gerenciar os projetos e pacotes JavaScript
// externos que precisemos utilizar em cada aplicação.

//npm install express@4.16.3
//O "@" serve para especificar qual a versão requerida no download
//--save-exact: Informando para o node que esse pacote é uma dependência da aplicação (ele necessita desse pacote para (executar).
//--save-dev: Informa para o Node que a dependência estará presente apenas no desenvolvimento.