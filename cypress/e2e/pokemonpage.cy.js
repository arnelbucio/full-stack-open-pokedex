describe('Pokedex', function () {
  it('pokemon page can be navigated to', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.get('.pokemon-info')
      .children()
      .should('contain', 'ivysaur')
      .and('contain', 'overgrow')
      .and('contain', 'chlorophyll')
  })
})
