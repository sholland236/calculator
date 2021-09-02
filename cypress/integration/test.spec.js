// beware of URL associated

describe("Basic operations", () => {
    it("7 + 2 equals 9", () => {
        // arrange
        cy.visit("http://127.0.0.1:5502/index.html");
        // act
        cy.get("[data-cy=seven]").click();
        cy.get("[data-cy=add]").click();
        cy.get("[data-cy=two]").click();
        cy.get("[data-cy=equals]").click();
        // assert
        cy.get("[data-cy=output]").should("contain", "9");
    })
    it("8 - 5 equals three", () => {
        // arrange
        cy.visit("http://127.0.0.1:5502/index.html");
        // act
        cy.get("[data-cy=eight]").click();
        cy.get("[data-cy=subtract]").click();
        cy.get("[data-cy=five]").click();
        cy.get("[data-cy=equals]").click();
        // assert
        cy.get("[data-cy=output]").should("contain", "3");
    })
    it("7 x 3 equals 21", () => {
        // arrange
        cy.visit("http://127.0.0.1:5502/index.html");
        // act
        cy.get("[data-cy=seven]").click();
        cy.get("[data-cy=multiply]").click();
        cy.get("[data-cy=three]").click();
        cy.get("[data-cy=equals]").click();
        // assert
        cy.get("[data-cy=output]").should("contain", "21");
    })
    it("18 / 2 equals 9", () => {
        // arrange
        cy.visit("http://127.0.0.1:5502/index.html");
        // act
        cy.get("[data-cy=one]").click();
        cy.get("[data-cy=eight]").click();
        cy.get("[data-cy=divide]").click();
        cy.get("[data-cy=two]").click();
        cy.get("[data-cy=equals]").click();
        // assert
        cy.get("[data-cy=output]").should("contain", "9");
    })
    it("15.6 + 12 equals 27.6", () => {
        // arrange
        cy.visit("http://127.0.0.1:5502/index.html");
        // act
        cy.get("[data-cy=one]").click();
        cy.get("[data-cy=five]").click();
        cy.get("[data-cy=decimal]").click();
        cy.get("[data-cy=six]").click();
        cy.get("[data-cy=add]").click();
        cy.get("[data-cy=one]").click();
        cy.get("[data-cy=two]").click();
        cy.get("[data-cy=equals]").click();
        // assert
        cy.get("[data-cy=output]").should("contain", "27.6");
    })
})