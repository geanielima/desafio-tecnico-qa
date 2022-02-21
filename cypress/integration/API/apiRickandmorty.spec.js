/// <reference types="cypress" />

it("Return episodios and personagens and location", () => {
  cy.request({
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: "https://rickandmortyapi.com/graphql",
    body: JSON.stringify({
      query: `
        {
            episodesByIds (ids: [1 2]) {
              id
              name
              air_date
              created
              episode
              characters {
                id
                name
                species
                gender
                location {
                  name
                  type
                  dimension
                }
              }
            }
          }
          `,
    }),
  }).then((response) => {
    console.log(response.body);
    expect(response.status).to.eql(200)
    expect(response.body.data).to.have.property('episodesByIds');
  });
});

it("return episodios que o personagem ta participando", () => {
  cy.request({
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: "https://rickandmortyapi.com/graphql",
    body: JSON.stringify({
      query: `
        {
            characters (page: 2, filter: {species: "Human"}) {
              info {
                pages
              }
              results {
                name
                episode {
                  name
                  episode
                }
              }
            }
          }
          
          `,
    }),
  }).then((response) => {
    console.log(response.body.data);
    expect(response.status).to.eql(200)
    expect(response.body.data).to.have.property('characters');
    
  });
});
