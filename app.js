const express = require('express');
const app = express();
const db = require('./db');

const StockController = require('./stock/StockController');
app.use('/stocks', StockController);

module.exports = app;