import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'


export default class extends BaseSeeder {
  public async run () {
        await Semestre.createMany ([
      {nome: '1 Semestre', dataInicio: new Date(2022,1,2), dataFim: new Date(2023,5,4)},
      {nome: '5 Semestre', dataInicio: new Date(2020,6,2), dataFim: new Date(2024,7,5)},
      {nome: '8 Semestre', dataInicio: new Date(2019,1,4), dataFim: new Date(2024,1,6)},
      {nome: '3 Semestre', dataInicio: new Date(2022,1,5), dataFim: new Date(2027,1,1)},
      {nome: '6 Semestre', dataInicio: new Date(2021,7,1), dataFim: new Date(2025,7,3)}
  ])
  }
}
