// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from "App/Models/Chamada"

export default class ChamadasController {

    index() {
        return Chamada.all()
    }

    store({request}) {
        const data = request.only([
            'aulaId', 
            'alunosId', 
            'presenca'])
        return Chamada.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Chamada.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const chamada = await Chamada.findOrFail(id)

        return chamada.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const chamada = await Chamada.findOrFail(id)

        const dados = request.only([
            'aulaId', 
            'alunosId', 
            'presenca'
        ])

        chamada.merge(dados)

        return chamada.save()

    }



}
