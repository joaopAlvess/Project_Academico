import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Chamada from 'App/Models/Chamada'

export default class extends BaseSeeder {
  public async run () {
     await Chamada.createMany ([
      {aulaId: 5, alunosId: 5, presenca: 'F'},
      {aulaId: 4, alunosId: 2, presenca: 'P'},
      {aulaId: 3, alunosId: 3, presenca: 'F'},
      {aulaId: 1, alunosId: 1, presenca: 'F'}

    ])
  }
}
