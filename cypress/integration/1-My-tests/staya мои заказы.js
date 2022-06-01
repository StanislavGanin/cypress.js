describe('Тестирование staya', function () {
    it('Дохожу до личного кабинета, выполняю поиск Мои заказы', function () {
        cy.visit('https://www.staya.dog/');
        cy.get('a[href*="/login"]').click() 
        cy.get('.auth-form > form > [type="email"]').type('твой имейл');
        cy.get('.auth-form > form > [type="password"]').type('твой пароль').type('{enter}');
        cy.contains('Мои заказы');
    })
})


