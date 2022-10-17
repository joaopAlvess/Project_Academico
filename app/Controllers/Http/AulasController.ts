// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula"

export default class AulasController {


    index() {
        return Aula.all()
    }

    store({request}) {
        const data = request.only([
            'data',
            'conteudo',
            'turmaId'])
        return Aula.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Aula.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const aula = await Aula.findOrFail(id)

        return aula.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const aula = await Aula.findOrFail(id)

        const dados = request.only([
            'data', 
            'conteudo', 
            'turmaId'])

        aula.merge(dados)

        return aula.save()

    }

}
