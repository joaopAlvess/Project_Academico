import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany ([
      {nome: 'João', cpf: 45043225114, matricula: '22020423', email: 'joao@gmail.com',telefone: '(61)1838-8829', cep: 782906410, logradouro: 'Av Centro', complemento: 'trb', numero: '88', bairro: 'Rua das Das posses'},
      {nome: 'Julia', cpf: 98043225114, matricula: '33020423', email: 'julia@gmail.com',telefone: '(61)3838-8829', cep: 782906410, logradouro: 'Av Paulista', complemento: 'res', numero: '19', bairro: 'Rua das Sem-nome'},
      {nome: 'Carlos Alberto', cpf: 19043225114, matricula: '48020423', email: 'carlosalbertp@gmail.com',telefone: '(61)7838-8829', cep: 782906410, logradouro: 'Av Centro', complemento: 'apt', numero: '11', bairro: 'Rua das laranjeiras'},
      {nome: 'Flavio', cpf: 12043225114, matricula: '52020423', email: 'flavio@gmail.com',telefone: '(61)5838-8829', cep: 782906410, logradouro: 'Av Beira-mar', complemento: '', numero: '27', bairro: 'Ceilândia-Centro'},
      {nome: 'Joana', cpf: 86043225114, matricula: '69020423', email: 'joana@gmail.com',telefone: '(61)0838-8829', cep: 782906410, logradouro: 'Praça dos três poderes', complemento: 'apt', numero: '87', bairro: 'Aguás Claras'}
    ])
  }
}
