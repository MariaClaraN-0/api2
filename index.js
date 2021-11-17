const express = require("express");  
const app = express();  
require('dotenv').config();
const cors = require("cors");
app.use(express.json());  

const Conn = require("./models/conn/index"); 

Conn(); 

app.use(cors());
app.options("*", cors());

const paisesRouter = require("./routers/paises.routes");
app.use('/paises',paisesRouter);

const estadosRouter = require("./routers/estados.routes");
app.use('/estados',estadosRouter);

const cidadesRouter = require("./routers/cidades.routes");
app.use('/cidades',cidadesRouter);

app.get('/', (req,res) => {
    res.status(200).json({message:"API ok"});
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});