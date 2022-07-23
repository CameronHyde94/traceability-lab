const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path')

app.use(express.json())

app.use(cors());

const characters = ['Mac', 'Dennis', 'Charlie']
//Endpoints

app.get('/', (req, res) => {
    res.sendStatus(path.join(__dirname, "/index.html"));
});

app.get('/api/characters', (req, res) => {
    res.status(200).send(characters)
});