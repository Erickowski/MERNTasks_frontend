/// <reference types="cypress" />

describe("<Formulario />", () => {
  it("<Login /> - Verificar pantalla de inicio", () => {
    cy.visit("/");

    // Probar el texto
    cy.contains("h1", "Iniciar Sesión"); // No recomendado
    cy.get("[data-cy=titulo]").invoke("text").should("equal", "Iniciar Sesión"); //Buenas Prácticas

    // Revisar los dos inputs
    cy.get("[data-cy=email-input]").should("exist");
    cy.get("[data-cy=password-input]").should("exist");

    cy.get("[data-cy=submit-login]")
      .should("exist")
      .should("have.value", "Iniciar Sesión")
      .should("have.class", "btn-primario")
      .and("have.class", "btn-block");

    cy.get("[data-cy=nueva-cuenta]")
      .should("exist")
      .should("have.prop", "tagName")
      .should("eq", "A");

    cy.get("[data-cy=nueva-cuenta]")
      .should("have.attr", "href")
      .should("eq", "/nueva-cuenta");

    cy.visit("/nueva-cuenta");
  });
});
