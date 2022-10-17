import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
       await Turma.createMany ([
      {nome: 'OASDASD1B', professorId: 1, semestreId: 5, disciplinaId: 2, salaId: 1, turno:'Noite'},
      {nome: 'OASDASD1A', professorId: 2, semestreId: 4, disciplinaId: 4, salaId: 6, turno:'Manhã'},
      {nome: 'OASDASD1C', professorId: 3, semestreId: 3, disciplinaId: 5, salaId: 8, turno:'Tarde'},
      {nome: 'OASDASD1D', professorId: 4, semestreId: 2, disciplinaId: 1, salaId: 3, turno:'Manhã'},
      {nome: 'OASDASD1E', professorId: 5, semestreId: 1, disciplinaId: 6, salaId: 4, turno:'Noite'}
    ])
  }
}
