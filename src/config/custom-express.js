const express = require('express');
const app = express();
const routes = require('../app/routes/route');
routes(app);

//Informando para o node que o meu módulo exportará algum valor.
module.exports = app;