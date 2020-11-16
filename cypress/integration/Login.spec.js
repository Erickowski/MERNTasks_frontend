/// <reference types="cypress" />

describe("<Login />", () => {
  it("<Login /> - Verificar pantalla de inicio", () => {
    cy.visit("/");
    // Probar el texto
    cy.contains("h1", "Iniciar Sesión"); // No recomendado
    cy.get("[data-cy=titulo]").invoke("text").should("equal", "Iniciar Sesión"); //Buenas Prácticas
  });
  it("<Login /> - Verificar el formulario", () => {});
});
