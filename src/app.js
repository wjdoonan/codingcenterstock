const path = require('path')
const express = require('express')


const app = express()

const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

app.listen(8080, () => {
    console.log('Hello server')
})