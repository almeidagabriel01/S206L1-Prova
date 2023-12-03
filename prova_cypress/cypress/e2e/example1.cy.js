
/// <reference types = "cypress"/>

describe('Criando cenario de Interface para o site globalsqa',()=>{

  it('Caso de teste: Fazer deposito de 100 reais usando o user do Harry Potter', ()=>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select("Harry Potter")
    cy.get('form.ng-valid > .btn').click()
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('.form-control').type(100)
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('contain.text', 'Deposit Successful')
  
  })

  it('Caso de teste: Fazer deposito de 200 reais usando o user do Ron Weasly e querer sacar mais do que tem', ()=>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select("Ron Weasly")
    cy.get('form.ng-valid > .btn').click()
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('.form-control').type(200)
    cy.get('form.ng-dirty > .btn').click()
    cy.wait(3000)
    cy.get('.home').click()
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select("Ron Weasly")
    cy.get('form.ng-valid > .btn').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').type(300)
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('contain.text', 'Transaction Failed. You can not withdraw amount more than the balance.')
  
  })

})

