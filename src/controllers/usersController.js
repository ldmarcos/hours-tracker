const Users = require('../models/Users.js');

class usersController{
    static async exibirUsuarios(req, res){
        try{
            const users = await Users.findAll();
            res.status(200).json(users)
        }catch(erro){
            res.status(500).send(''+ erro)
        }
    }

    static async exibirUsuarioId(req, res){

        try{
            let id = req.params.id
            const user = await Users.findAll({where: {
                ID_USER: id
            }});
            res.status(200).json(user)
        }catch(erro){
            res.status(500).send(''+ erro)
        }
        
    }

    static async criaUsuario(req, res){
        try{
        const nome = req.body.nome;
        const email = req.body.email;
        const password = req.body.password;

        await Users.create({ID_USER: 'default', nome: nome, email: email, password: password})

        res.status(201).send('Usuario Criado')
        }catch(erro){
            res.status(500).send(''+ erro)
        }
    }

    static async atualizaUsuario(req, res){
        try{
            const id = req.params.id
            const nome = req.body.nome;
            const email = req.body.email;
            const password = req.body.password;
    
            await Users.update({nome: nome, email: email, password: password}, {where: {id_user: id}})
    
            res.status(200).send('Usuario Atualizado')
        }catch(erro){
            res.status(500).send(''+ erro)
        }
    }


    static async excluiUsuario(req, res){
        try{
            let id = req.params.id
            await Users.destroy({where:{ id_user: id}})
            res.status(200).send('Excluido com sucesso')
        }catch(erro){
            res.status(500).send(''+ erro)
        }
    }
}

module.exports = usersController