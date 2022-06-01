
describe('Тестирование контактов', function () {

    it('Проверка, что при переходе в Телеграм урл будет верный', function () {
        cy.visit('https://stanislavganin.ru/#Contacs');
        cy.contains('Send message').click();
        cy.url().should('eq', 'https://t.me/QAStanislav')
    })
})
