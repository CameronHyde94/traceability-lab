const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path')

app.use(express.json())

app.use(cors());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8367d8b227004885ac235f37c076b23f',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
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