import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run () {
    await Sala.createMany ([
      {nome: 'AB10', capacidade: 60, tipo: 'P'},
      {nome: 'DB10', capacidade: 45, tipo: 'H'},
      {nome: 'AB06', capacidade: 35, tipo: 'P'},
      {nome: 'BA10', capacidade: 60, tipo: 'P'},
      {nome: 'DB11', capacidade: 50, tipo: 'H'},
      {nome: 'AC01', capacidade: 42, tipo: 'H'},
      {nome: 'AD20', capacidade: 50, tipo: 'H'},
      {nome: 'CB15', capacidade: 10, tipo: 'P'}
    ])
  }
}
