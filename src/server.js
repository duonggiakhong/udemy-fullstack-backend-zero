const express = require('express')
const path = require('path')

const app = express()
const port = 8081

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.set('views', path.join(__dirname, 'views'));//nơi lưu trữ 
app.set('view engine', 'ejs');

app.get('/giacat', (req, res) => {
    res.render('sample.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})