const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express()

const routeRick = require("./routes/rickand.routes.js")

// Midelweres
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

// Routes
app.use("/rickandmorty", routeRick)

let fav = [];

app.get("/rickandmorty/fav", (req, res)=>{
    res.status(200).json(fav)
})

app.post("/rickandmorty/fav", (req, res)=>{
    fav.push(req.body)
    res.status(200).json(fav)
})

app.delete("/rickandmorty/fav/:id", (req, res)=>{
    const {id} = req.params;

    const charFilter = fav.filter(char => char.id !== Number(id))
    fav = charFilter;
    res.status(200).json(charFilter)

})

module.exports = app;