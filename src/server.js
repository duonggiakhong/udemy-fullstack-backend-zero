const express = require('express')
const path = require('path')

require('dotenv').config()
const app = express()
const port = process.env.POST;
const hostname = process.env.HOST_NAME;

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.set('views', path.join(__dirname, 'views'));//nơi lưu trữ 
app.set('view engine', 'ejs');

app.get('/giacat', (req, res) => {
    res.render('sample.ejs');
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})