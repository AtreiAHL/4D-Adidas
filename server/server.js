const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');

const cart = require('./data/cart');

app.use(cors());
app.use(bodyParser.json());

//send data from products page to cart
app.post('/', (req, res) => {
    console.log(req.body)
    const inventory =  JSON.parse(fs.readFileSync('./data/cart.json'));
    inventory.push(req.body);
    fs.writeFileSync('./data/cart.json', JSON.stringify(inventory), null, 2);
})

//send data to front end
app.get('/', (_req, res) => {
    const cartItem = JSON.parse(fs.readFileSync('./data/cart.json'));
    res.send(cartItem);
})

app.listen(8080, () => console.log('Listening on Port 8080'));