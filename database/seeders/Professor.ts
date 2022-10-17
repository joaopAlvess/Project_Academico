import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professore from 'App/Models/Professore'

export default class extends BaseSeeder {
  public async run () {
    await Professore.createMany ([
      {nome: 'Adão', cpf: 90043225114, matricula: '21020423', salario: '4500.00', email: 'adao@gmail.com',telefone: '(61)1838-8829', cep: 782906410, logradouro: 'Av Centro', complemento: 'trb', numero: '87', bairro: 'Rua das Das posses'},
      {nome: 'Estefany', cpf: 30043225114, matricula: '31020423', salario: '5500.00', email: 'estefany@gmail.com',telefone: '(61)3838-8829', cep: 782906410, logradouro: 'Av Paulista', complemento: 'res', numero: '89', bairro: 'Rua das Sem-nome'},
      {nome: 'Carlos', cpf: 70043225114, matricula: '41020423', salario: '6500.00', email: 'Carlos@gmail.com',telefone: '(61)7838-8829', cep: 782906410, logradouro: 'Av Centro', complemento: 'apt', numero: '12', bairro: 'Rua das laranjeiras'},
      {nome: 'Fabio', cpf: 12043225114, matricula: '51020423', salario: '2500.00', email: 'fabio@gmail.com',telefone: '(61)5838-8829', cep: 782906410, logradouro: 'Av Beira-mar', complemento: '', numero: '07', bairro: 'Ceilândia-Centro'},
      {nome: 'Larissa', cpf: 87043225114, matricula: '61020423', salario: '8500.00', email: 'larissa@gmail.com',telefone: '(61)0838-8829', cep: 782906410, logradouro: 'Praça dos três poderes', complemento: 'apt', numero: '57', bairro: 'Aguás Claras'}
    ])
  }
}
