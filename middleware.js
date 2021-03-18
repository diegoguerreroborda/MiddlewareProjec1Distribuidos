const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3050;

const app = express()
app.use(cors())
//app.use(bodyParser.json())
app.use(express.json({limit: '10mb'}));

let serverss = [{name: "http://localhost:3098/", alive: true}, {name: "http://localhost:3002/", alive: false}, {name: "http://localhost:3005/", alive: true}]
let citiesCount = [{name: "Tunja", count: 3}, {name: "Bogotá", count: 3}, {name: "Pereira", count: 3}]

app.post('/android', (req, res)=> {
    console.log("llega de Android :)")
    console.log(req.body)
    res.sendStatus(200)
})

app.get('/servers', (req, res)=>{
    console.log("Aqui si llega")
    res.send(serverss)
})

app.get('/citiesCount', (req, res)=>{
    console.log("Lista de ciudades")
    res.send(citiesCount)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})