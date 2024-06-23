const Registro = require('../models/Registro.js')

class registroController{
    static async exibirRegistros(req, res){
        try{
            const registros = await Registro.findAll();
            res.status(200).json(registros)
        }catch(erro){
            res.status(500).send(''+ erro)
        }
    }

    static async exibirRegistroId(req, res){

        try{
            let id = req.params.id
            const registro = await Registro.findAll({where: {
                id_registro: id
            }});
            res.status(200).json(registro)
        }catch(erro){
            res.status(500).send(''+ erro)
        }
        
    }

    static async iniciarJornada(req, res){
        try{
        const id_user = req.body.id_user
        const nome_user = req.body.nome_user;
        const data_registro = req.body.data_registro;
        const hora_inicio = req.body.hora_inicio;

        await Registro.create({id_registro: 'default', id_user: id_user, nome_user:nome_user, data_registro:data_registro, hora_inicio: hora_inicio})

        res.status(201).send('Jornda Iniciada!!')
        }catch(erro){
            res.status(500).send(''+ erro)
        }
    }

    static async finalizarJornada(req, res){
        try{
            const id = req.params.id
            const hora_termino = req.body.hora_termino
    
            await Registro.update({hora_termino: hora_termino}, {where: {id_registro: id}})
    
            res.status(200).send('Jornada Finalizada!!')
        }catch(erro){
            res.status(500).send(''+ erro)
        }
    }
}

module.exports = registroController;    