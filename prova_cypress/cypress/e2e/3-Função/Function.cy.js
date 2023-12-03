
describe('Criando cenario de teste para o site globalsqa',()=>{

  it ('Caso de teste: cria cliente com sucesso', ()=>{
    let infos = criar_usuario()

  })

function criar_usuario(){
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager')
  cy.get('[ng-class="btnClass1"]').click()
  cy.get(':nth-child(1) > .form-control').type('Son')
  cy.get(':nth-child(2) > .form-control').type('Goku')
  cy.get(':nth-child(3) > .form-control').type('076-0012')
  cy.get('form.ng-dirty > .btn').click()
  cy.get('[ng-class="btnClass3"]').click()
}})