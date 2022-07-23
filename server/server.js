const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path')

app.use(express.json())

app.use(cors());

const characters = ['Mac', 'Dennis', 'Charlie']

//Endpoints

app.use(express.static(path.join(__dirname, "../public")));

app.get('/characters', () => {
    try {
        someFunction()
    } catch (err) {
        
    }
})
const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`));