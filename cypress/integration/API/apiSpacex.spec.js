/// <reference types="cypress" />
describe("Crud da api graphql", () => {
  it("create users", () => {
    cy.request({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "https://api.spacex.land/graphql/",
      body: JSON.stringify({
        query: `mutation {
              insert_users(objects: [
                    {
                    name: "Cypress",
                    timestamp: "2022-02-17T15:52:31.407177+00:00",
                    rocket: "Cypress auto stub rocket",
                    twitter: null
                  },
                  {
                    name: "Gabriel",
                    timestamp: "2022-02-17T15:52:45.820647+00:00",
                    rocket: "My awesome rocket",
                    twitter: null
                  },
                  {
                    name: "Bas",
                    timestamp: "2022-02-17T15:53:20.277116+00:00",
                    rocket: "My awesome rocket",
                    twitter: null
                  },
                  {
                    name: "Bas",
                    timestamp: "2022-02-17T15:53:46.324431+00:00",
                    rocket: "My awesome rocket",
                    twitter: null
                  },
                  {
                    name: "USER",
                    timestamp: "2022-02-17T16:05:04.737962+00:00",
                    rocket: "rocket",
                    twitter: null
                  },
                  {
                    name: "USER",
                    timestamp: "2022-02-17T16:05:48.094794+00:00",
                    rocket: "rocket",
                    twitter: null
                  },
                  {
                    name: "USER",
                    timestamp: "2022-02-17T16:07:35.854289+00:00",
                    rocket: "rocket",
                    twitter: null
                  },
                  {
                    name: "USER",
                    timestamp: "2022-02-17T16:10:23.160816+00:00",
                    rocket: "rocket",
                    twitter: null
                  },
                  {
                    name: "USER",
                    timestamp: "2022-02-17T16:16:23.776295+00:00",
                    rocket: "rocket",
                    twitter: null
                  },
                  {
                    name: "USER",
                    timestamp: "2022-02-17T16:16:52.228846+00:00",
                    rocket: "rocket",
                    twitter: null
                  },
                  {
                    name: "Operator",
                    timestamp: "2022-02-17T16:47:37.471553+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "Operator",
                    timestamp: "2022-02-17T16:48:07.849591+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "Operator",
                    timestamp: "2022-02-17T16:48:09.368103+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "Operator",
                    timestamp: "2022-02-17T16:48:49.533994+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "Operator",
                    timestamp: "2022-02-17T16:48:50.122234+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "Operator",
                    timestamp: "2022-02-17T16:48:50.570852+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "Operator",
                    timestamp: "2022-02-17T16:48:51.361688+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "Operator",
                    timestamp: "2022-02-17T16:49:30.619919+00:00",
                    rocket: null,
                    twitter: null
                  },      
                  {
                    name: "string",
                    timestamp: "2022-02-17T17:02:01.061454+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "string",
                    timestamp: "2022-02-17T17:02:10.811922+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "string",
                    timestamp: "2022-02-17T17:02:12.496693+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "string",
                    timestamp: "2022-02-17T17:02:25.695721+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "string",
                    timestamp: "2022-02-17T17:13:58.175385+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "Rakhesh Sharma",
                    timestamp: "2022-02-17T19:08:00.717365+00:00",
                    rocket: "Sputnik",
                    twitter: null
                  },
                  {
                    name: "string",
                    timestamp: "2022-02-17T19:32:22.18781+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "string",
                    timestamp: "2022-02-17T19:34:27.899334+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "string",
                    timestamp: "2022-02-17T19:34:37.62067+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "string",
                    timestamp: "2022-02-17T19:34:41.023248+00:00",
                    rocket: null,
                    twitter: null
                  },
                  {
                    name: "Anup Sharma",
                    timestamp: "2022-02-17T19:41:46.338922+00:00",
                    rocket: "Sputnik VI",
                    twitter: null
                  },
                  {
                    name: "sherlock holmes",
                    timestamp: "2022-02-17T22:10:07.527585+00:00",
                    rocket: "221B Baker Street",
                    twitter: null
                  },
                  {
                    name: "sherlock holmes",
                    timestamp: "2022-02-17T22:10:29.141622+00:00",
                    rocket: "221B Baker Street",
                    twitter: null
                  },
                  {
                    name: "sherlock holmes",
                    timestamp: "2022-02-17T22:10:29.441638+00:00",
                    rocket: "221B Baker Street",
                    twitter: null
                  },
                  {
                    name: "sherlock holmes",
                    timestamp: "2022-02-17T22:10:42.818858+00:00",
                    rocket: "221B Baker Street",
                    twitter: null
                  },
                  {
                    name: "sherlock holmes",
                    timestamp: "2022-02-17T22:10:44.515065+00:00",
                    rocket: "221B Baker Street",
                    twitter: null
                  },
                  {
                    name: "USER",
                    timestamp: "2022-02-17T15:50:46.513419+00:00",
                    rocket: "rocket",
                    twitter: null
                  }
                  ], on_conflict: {constraint: users_pkey, update_columns: id}) {
                returning {
                  name
                  id
                  rocket
                  timestamp
                  twitter
                }
              }
            }`,
      }),
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.data).to.have.property("insert_users");
      expect(response.body.data.insert_users).to.have.property("returning");
      expect(response.body.data.insert_users.returning).to.length(35);
      response.body.data.insert_users.returning.forEach(el => {
         expect(el.id).to.not.empty;
      });
    });
  });

  it("create user with affected rows", () => {
    cy.request({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "https://api.spacex.land/graphql/",
      body: JSON.stringify({
        query: `mutation {
                   insert_users(objects: {
                    name: "Geane",
                    timestamp: "2022-02-17T15:50:46.513419+00:00",
                    rocket: "ROCKET",
                    twitter: null
                  }, on_conflict: {constraint: users_pkey, update_columns: id}) {
                affected_rows
              }
            }`,
      }),
    }).then((response) => { 
      expect(response.status).to.eql(200);
      expect(response.body.data).to.have.property("insert_users");
      expect(response.body.data.insert_users).to.have.property("affected_rows");
      expect(response.body.data.insert_users.affected_rows).to.eql(1);
    });
  });

  it("Delete user", () => {
    cy.request({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "https://api.spacex.land/graphql/",
      body: JSON.stringify({
        query: `
              mutation {
              delete_users(where: {name: {_eq: "Geane"}}) {
                returning {
                  id
                  name
                  rocket
                  timestamp
                  twitter
                }
              }
            }
             `,
      }),
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eql(200);
      expect(response.body.data).to.have.property('delete_users');
      expect(response.body.data.delete_users).to.have.property('returning');
      response.body.data.delete_users.returning.forEach(el => {
         expect(el.name).to.eql('Geane');
      });

    });
  });

  it("Delete user with affected rows", () => {
    cy.request({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "https://api.spacex.land/graphql/",
      body: JSON.stringify({
        query: `
          mutation {
                delete_users(where: {name: {_eq: "Gabriel"}}) {
                affected_rows
              }
            }
              `,
      }),
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.data).to.have.property("delete_users");
      expect(response.body.data.delete_users).to.have.property("affected_rows");
      expect(response.body.data.delete_users.affected_rows).to.eql(1);
    });
  });

  it("read users", () => {
    cy.request({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "https://api.spacex.land/graphql/",
      body: JSON.stringify({
        query: "{ users { id name timestamp rocket twitter } }",
      }),
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eql(200);
      expect(response.body.data).to.have.property('users')
      expect(response.body.data.users).is.not.null;
    
    });
  });

  it("update user", () => {
    cy.request({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "https://api.spacex.land/graphql/",
      body: JSON.stringify({
        query: `
          mutation {
              update_users(where: {id: {_eq: "c53997cf-0e77-4d29-94ac-cdd15b79636d"}}, _set: {name: "Daniel"}) {
                returning {
                  id
                  name
                  rocket
                  timestamp
                  twitter
                }
              }
            }
          `,
      }),
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.data).to.have.property("update_users");
      expect(response.body.data.update_users).to.have.property("returning");
      response.body.data.update_users.returning.forEach(el => {
         expect(el.name).to.eql('Daniel');
      });
    });
  });

  it("update user with affected rows", () => {
    cy.request({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "https://api.spacex.land/graphql/",
      body: JSON.stringify({
        query: `
          mutation {
              update_users(where: {id: {_eq: "c53997cf-0e77-4d29-94ac-cdd15b79636d"}}, _set: {name: "Sandy"}) {
                affected_rows
              }
            }
          `,
      }),
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.data).to.have.property("update_users");
      expect(response.body.data.update_users).to.have.property("affected_rows");
      expect(response.body.data.update_users.affected_rows).to.eql(1);
    });
  });
});
