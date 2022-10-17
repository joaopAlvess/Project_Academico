// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sala from "App/Models/Sala"

export default class SalasController {


    index() {
        return Sala.all()
    }

    store({request}) {
        const data = request.only([
            'nome', 
            'capacidade', 
            'tipo'])
        return Sala.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Sala.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const sala = await Sala.findOrFail(id)

        return sala.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const sala = await Sala.findOrFail(id)

        const dados = request.only([
            'nome', 
            'capacidade', 
            'tipo'])

        sala.merge(dados)

        return sala.save()

    }

}
