const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine');

const webRouter = require('./router/web');

require('dotenv').config()
const app = express()
const port = process.env.POST;
const hostname = process.env.HOST_NAME;

//config viewEngine 
configViewEngine(app);

//khai bao router
app.use('/', webRouter);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})