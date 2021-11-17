const express = require("express");
const router = express.Router();
const pais = require("./../models/paises");

router.get('/', (req,res) => {
    res.status(200).json({message:"rota paises ok"});
});



router.get('/listall', async (req,res) => {
    await pais.find({}).then((paises) => { //pega todo mundo do banco
        console.log(paises);
        res.status(200).json(paises);
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/listname/:nome', async (req,res) => {
    const nome = req.params.nome;  //recebendo nome por parametro
    await pais.find({ nome:nome }).then((pais) => { //findOne retorna o primeiro que der match com o item passado
        console.log(pais);
        if(pais == null){ //validando se retorna null 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(pais);
        }
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { 
   
    if(!req.body.nome){
        res.status(400).json({message: "esta faltando nome"});
        return;
    }else if(!req.body.populacao){
        res.status(400).json({message: "esta faltando populaçao"});
        return;
    }
    else if(!req.body.linguaMae){
        res.status(400).json({message: "esta faltando lingua mae"});
        return; 
    }
    else if(!req.body.pib){
        res.status(400).json({message: "esta faltando pib"});
        return; 
    }

    await pais.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

router.put('/update/:id', async (req,res) => {
    const id = req.params.id;
    if(!req.body.nome){
        res.status(400).json({message: "esta faltando nome"});
        return;
    }else if(!req.body.populacao){
        res.status(400).json({message: "esta faltando populacao"});
        return;
    }
    else if(!req.body.linguaMae){
        res.status(400).json({message: "esta faltando linguaMae"});
        return; // nao esquecer dos returns dentro dos ifs
    }
    else if(!req.body.pib){
        res.status(400).json({message: "esta faltando pib"});
        return; // nao esquecer dos returns dentro dos ifs
    }

    await pais.updateOne({ _id:id},req.body).then(() => { //updateOne atualiza o primeiro que encontrar e der match
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado"});
    });
});

router.delete('/delete/:id', async (req,res) => {
    if( req.params.id.length == 24){ //se o id tem pelo menos 24 chars
        await pais.deleteOne({_id:req.params.id}).then(() => { //deleta o primeiro que der match
            res.status(200).json({message: "Deletado com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo esta errado"});
        });
    }else{
        res.status(400).json({message: "id precisa ter 24 caracteres"});
    }
});

module.exports = router;
