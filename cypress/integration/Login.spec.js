/// <reference types="cypress" />

describe("<Login />", () => {
  it("<Login /> - Validación, alertas y autenticar usuario", () => {
    cy.visit("/");

    // Probando validación del formulario
    cy.get("[data-cy=submit-login]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "Todos los campos son obligatorios.");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    // Probando que un usuario no exista
    cy.get("[data-cy=email-input]").type("email@correo.com ");
    cy.get("[data-cy=password-input]").type("123");

    cy.get("[data-cy=submit-login]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El usuario no existe");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    // Probando password incorrecto
    cy.get("[data-cy=email-input]").clear().type("correo@correo.com ");
    cy.get("[data-cy=password-input]").type("123");

    cy.get("[data-cy=submit-login]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "Password incorrecto");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    // Comprobando inicio de sesión exitoso
    cy.get("[data-cy=password-input]").clear().type("123456");

    cy.get("[data-cy=submit-login]").click();

    cy.get("[data-cy=selecciona]")
      .should("exist")
      .invoke("text")
      .should("equal", "Selecciona un proyecto.");
  });
});
