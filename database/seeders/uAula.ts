import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'

export default class extends BaseSeeder {
  public async run () {
     await Aula.createMany ([
      {data: new Date(2020,1,2), conteudo: 'Lorem ipsum dolor sit amet. Ex dolorem delectus At ducimus qui corrupti magni At voluptatem fugit nam quia nulla.', turmaId: 1},
      {data: new Date(2020,1,1), conteudo: 'Lorem ipsum dolor sit amet. Ex dolorem delectus At ducimus qui corrupti magni At voluptatem fugit nam quia nulla.', turmaId: 2},
      {data: new Date(2020,1,3), conteudo: 'Lorem ipsum dolor sit amet. Ex dolorem delectus At ducimus qui corrupti magni At voluptatem fugit nam quia nulla.', turmaId: 3},
      {data: new Date(2020,1,4), conteudo: 'Lorem ipsum dolor sit amet. Ex dolorem delectus At ducimus qui corrupti magni At voluptatem fugit nam quia nulla.', turmaId: 4},
      {data: new Date(2020,1,5), conteudo: 'Lorem ipsum dolor sit amet. Ex dolorem delectus At ducimus qui corrupti magni At voluptatem fugit nam quia nulla.', turmaId: 5},
      {data: new Date(2020,1,5), conteudo: 'Lorem ipsum dolor sit amet. Ex dolorem delectus At ducimus qui corrupti magni At voluptatem fugit nam quia nulla.', turmaId: 5}
    ])
  }
}
