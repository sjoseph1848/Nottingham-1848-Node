const express = require('express');
const app = express();
const db = require('./db');

const StockController = require('./stock/StockController');
const cors = require('cors');
app.use(cors());
app.use('/stocks', StockController);

module.exports = app;