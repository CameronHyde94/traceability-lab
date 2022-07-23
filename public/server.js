const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path')

app.use(express.json())

app.use(cors());

const characters = ['Mac', 'Dennis', 'Charlie']
//Endpoints

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get('/api/characters', (req, res) => {
    res.status(200).send(characters)
});

app.post('/api/characters', (req, res) => {
    let {name} = req.body

    const index = characters.findIndex(character => {
        return character === name
    })

    try {
        if (index === -1 && name !== '') {
            characters.push(name)
            res.status(200).send(characters)
        } else if (name === '') {
            res.status(400).send('You must enter a name')
        } else {
            res.status(400).send('That character already exists')
        }
    } catch (err) {
        console.log(err)
    }
})

app.delete('/api/characters/:index', (req, res) => {
    const targetIndex = +req.params.index
    
    characters.splice(targetIndex, 1)
    res.status(200).send(characters)
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`));