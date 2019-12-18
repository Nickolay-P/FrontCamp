describe('The Home Page', function () {
    const resultItemClass = '.ResultsItem___resultsItem';

    beforeEach(function () {
        cy.visit('/');
    })

    it('successfully loads', function () {
        cy.contains('NetflixRoulette');
        cy.contains('30 movies found');
    })

    it('filters results by changing the search input', function () {
        cy.get('input[type="text"]').type('m');
        cy.get('button').contains('Search').click();
        cy.contains('movies found');
    })
})
