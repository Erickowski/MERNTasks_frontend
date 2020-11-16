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

  it("<NuevaCuenta /> - Verificar componente de nueva cuenta", () => {
    cy.get("[data-cy=titulo]")
      .should("exist")
      .invoke("text")
      .should("equal", "Obtener una cuenta");

    cy.get("[data-cy=nueva-cuenta]").should("exist");

    cy.get("[data-cy=nombre-input]").should("exist");
    cy.get("[data-cy=email-input]").should("exist");
    cy.get("[data-cy=password-input]")
      .should("exist")
      .should("have.prop", "type")
      .should("equal", "password");
    cy.get("[data-cy=confirmar-input]").should("exist");

    cy.get("[data-cy=submit-nueva-cuenta]")
      .should("exist")
      .should("have.class", "btn-primario")
      .should("have.value", "Registrarme")
      .should("not.have.value", "Registrarme ahora");

    cy.get("[data-cy=enlace-login]")
      .should("exist")
      .should("have.attr", "href")
      .should("eq", "/");

    cy.visit("/");
  });
});
