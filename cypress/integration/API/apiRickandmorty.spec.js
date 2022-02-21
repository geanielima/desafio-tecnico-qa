/// <reference types="cypress" />

describe("Testing api rick and morty", () => {
  it.only("Returns episodes, characters and location", () => {
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
      expect(response.status).to.eql(200);
      expect(response.body.data).to.have.property("episodesByIds");
      expect(response.body.data.episodesByIds).have.length(2);
    });
  });

  it("returns the episodes that the filtered characters are participating in", () => {
    cy.request({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "https://rickandmortyapi.com/graphql",
      body: JSON.stringify({
        query: `
          {
              characters (page: 2, filter: {species: "Animal"}) {
                info {
                  pages
                }
                results {
                  name
                  species
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
      expect(response.status).to.eql(200);
      expect(response.body.data).to.have.property("characters");
      response.body.data.characters.results.forEach((el) => {
        expect(el.species).to.eql("Animal");
      });
    });
  });
});
