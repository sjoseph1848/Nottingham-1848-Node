require('dotenv').config();
const connectionString = process.env.DBConnection;
const mongoose = require('mongoose');
mongoose.connect(`${connectionString}`);