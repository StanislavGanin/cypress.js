
describe('Тестирование главной яндекса', function () {
   it('Проверка, что при поиске котят в выдаче есть котята', function () {
        cy.visit('https://yandex.ru');
        cy.get("input[id='text']").type('котята').type('{enter}');
        cy.contains('Картинки по запросу');
    })
})
