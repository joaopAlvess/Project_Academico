import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
     await ([
      {turmasId: 1, alunosId: 3},
      {turmasId: 2, alunosId: 1},
      {turmasId: 4, alunosId: 2},
      {turmasId: 1, alunosId: 4},
      {turmasId: 5, alunosId: 9}
    ])
  }
}
