const express = require('express');
const app = express();

const login = require('../login/login.js');
const register = require('../login/register.js');

app
.use('/', register)
.use('/', login);

module.exports = app;
