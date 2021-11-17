const express = require("express");
const router = express.Router();
const cidade = require("./../models/cidades");

router.get('/', (req,res) => {
    res.status(200).json({message:"rota cidades ok"});
});

router.get('/listall', async (req,res) => {
    await cidade.find({}).then((cidades) => { 
        res.status(200).json(cidades);
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});
router.get('/listname/:nome', async (req,res) => {
    const nome = req.params.nome;  
    await cidade.find({ nome:nome }).then((cidade) => { //findOne retorna o primeiro que der match com o item passado
        console.log(cidade);
        if(cidade == null){ 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(cidade);
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
    }else if(!req.body.quantidadeBairros){
        res.status(400).json({message: "esta faltando quantidadeBairros"});
        return;
    }
    else if(!req.body.populacao){
        res.status(400).json({message: "esta faltando populacao"});
        return; 
    }
    else if(!req.body. aniversarioCidade){
        res.status(400).json({message: "esta faltando aniversarioCidade"});
        return; 
    }

    await cidade.create(req.body).then(() => {
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
    }else if(!req.body.quantidadeBairros){
        res.status(400).json({message: "esta faltando quantidade de bairros"});
        return;
    }
    else if(!req.body.populacao){
        res.status(400).json({message: "esta faltando populaçao"});
        return; 
    }
    else if(!req.body. aniversarioCidade){
        res.status(400).json({message: "esta faltando  aniversario da cidade"});
        return; 
    }


    await cidade.updateOne({ _id:id},req.body).then(() => { 
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado"});
    });
});

router.delete('/delete/:id', async (req,res) => {
    if( req.params.id.length == 24){ 
        await cidade.deleteOne({_id:req.params.id}).then(() => { 
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