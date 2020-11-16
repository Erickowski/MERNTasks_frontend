/// <reference types="cypress" />

describe("<NuevaCuenta />", () => {
  it("<NuevaCuenta /> - Validación, alertas y crear nueva cuenta", () => {
    cy.visit("/nueva-cuenta");

    cy.get("[data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "Todos los campos son obligatorios.");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    // Llenado de formulario
    cy.get("[data-cy=nombre-input]").type("Jessica");
    cy.get("[data-cy=email-input]").type("correo@correo.com ");
    cy.get("[data-cy=password-input]").type("123");
    cy.get("[data-cy=confirmar-input]").type("123");

    cy.get("[data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El password debe ser de al menos 6 caracteres.");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    cy.get("[data-cy=password-input]").clear().type("123456");
    cy.get("[data-cy=confirmar-input]").type("123");

    cy.get("[data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "Los passwords no coinciden.");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    cy.get("[data-cy=confirmar-input]").clear().type("123456");

    cy.get("[data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=selecciona]")
      .should("exist")
      .invoke("text")
      .should("equal", "Selecciona un proyecto.");

    cy.get("[data-cy=cerrar-sesion]").click();
  });
});
