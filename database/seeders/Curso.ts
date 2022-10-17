import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
    await Curso.createMany([
      {nome: 'ADS', duracao: 5, modalidade: 'P'},
      {nome: 'Ciencia da computação', duracao: 8, modalidade: 'P'},
      {nome: 'Direito', duracao: 10, modalidade: 'P'},
      {nome: 'Medicina', duracao: 10, modalidade: 'P'},
      {nome: 'Enfermagem', duracao: 8, modalidade: 'P'},
      {nome: 'Administração', duracao: 5, modalidade: 'H'},
      {nome: 'Astronomia', duracao: 5, modalidade: 'P'},
      {nome: 'Psicologia', duracao: 8, modalidade: 'P'},
      {nome: 'Gastronomia', duracao: 6, modalidade: 'P'},
      {nome: 'Historia', duracao: 8, modalidade: 'P'},
      {nome: 'Pedagogia', duracao: 5, modalidade: 'P'},
    ])
  }
}
