const express = require('express');
const axios = require('axios');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const { route } = require('../app');
const finKey = process.env.FIN_KEY;


router.get('/', function (req, res) {
    const stocks = getStocks();
    stocks.then(response => res.status(200).send(response.data))
        .catch(error => console.log(error));

})

const getStocks = async () => {
    try {
        return await axios.get(`https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=${finKey}`)
    } catch (error) {
        console.error(error)
    }
}

module.exports = router;