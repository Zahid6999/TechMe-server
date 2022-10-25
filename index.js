const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors())

app.get('/', (req, res) => {
    res.send('My server is running')
})

app.listen(port, () => {
    console.log('listening on port ', port)
})