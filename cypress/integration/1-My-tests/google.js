
describe('Тестирование главной гугла', function () {
   it('Проверка, что при поиске ФК Ростов в выдаче есть тесла', function () {
        cy.visit('https://google.com');
        cy.get("input[type='text']").type('ФК Ростов').type('{enter}');
        cy.scrollTo(0, 500)
        cy.contains('https://fc-rostov.ru').click()
        cy.contains('https://fc-rostov.ru/ru');
    })
})
