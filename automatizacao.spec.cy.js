describe('Validação de campos', () => {

    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app');
    })


    it('PreenchimentoCadastroCompletoExceto CNH', () => {
        cy.get('a').click();
        cy.get('input[placeholder="Nome completo"]').type('Rafael Fonseca');
        cy.get('input[placeholder="CPF somente números"]').type('12345678910');
        cy.get('input[placeholder="E-mail"]').type('aaaa@gmail.com');
        cy.get('input[placeholder="Whatsapp"]').type('32987654321');
        cy.get(':input[placeholder="CEP"]').type('36010001');
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click();
        cy.get('input[placeholder="Número"]').type('123456');
        cy.get('input[placeholder="Complemento"]').type('ap10256');
        cy.get('.delivery-method > :nth-child(2)').click();
        cy.get('.button-success').click();
        cy.contains('span.alert-error','Adicione uma foto da sua CNH').should('be.visible')      
        
    })

    it('ValidacaoDasMensagensDeErro', () => {
        cy.get('a').click();
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Rafael Fonseca');
        cy.get('.button-success').click();
        cy.contains('span.alert-error','É necessário informar o CPF').should('be.visible');
        cy.contains('span.alert-error','É necessário informar o email').should('be.visible');
        cy.contains('span.alert-error','É necessário informar o CEP').should('be.visible');
        cy.contains('span.alert-error','É necessário informar o número do endereço').should('be.visible');
        cy.contains('span.alert-error','Selecione o método de entrega').should('be.visible');
        cy.contains('span.alert-error','Adicione uma foto da sua CNH').should('be.visible')  

    })
})