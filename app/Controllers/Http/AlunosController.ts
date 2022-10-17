// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno"

export default class AlunosController {

    index() {
        return Aluno.all()
    }

    store({request}) {
         const data = request.only([
            'nome', 
            'cpf', 
            'matricula', 
            'email', 
            'telefone', 
            'cep', 
            'logradouro', 
            'complemento', 
            'numero', 
            'bairro'])
        return Aluno.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Aluno.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)

        return aluno.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)

        const dados = request.only([
            'nome', 
            'cpf', 
            'matricula', 
            'email', 
            'telefone', 
            'cep', 
            'logradouro', 
            'complemento', 
            'numero', 
            'bairro'
        ])

        aluno.merge(dados)

        return aluno.save()

    }

}
