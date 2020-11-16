/// <reference types="cypress" />

describe("Administrador", () => {
  it("<Login /> - Autenticación", () => {
    cy.visit("/");

    // Llenar el formulario
    cy.get("[data-cy=email-input]").type("correo@correo.com");
    cy.get("[data-cy=password-input]").type("123456");
    cy.get("[data-cy=submit-login]").click();
  });

  it("<Proyectos /> - Validar proyectos", () => {
    // Validación
    cy.get("[data-cy=btn-nuevo-proyecto]").click();
    cy.get("[data-cy=submit-nuevo-proyecto]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El nombre del proyecto es obligatorio.");

    cy.get("[data-cy=alerta]").should("have.class", "mensaje error");
  });

  it("<Proyectos /> - Creación de proyectos", () => {
    cy.get("[data-cy=input-nuevo-proyecto]").type("Tienda virtual");
    cy.get("[data-cy=submit-nuevo-proyecto]").click();

    // Seleccionar el proyecto
    cy.get("[data-cy=listado-proyectos] li:nth-child(1) button").click();
  });

  it("<Tareas /> - Validación y creación de tareas", () => {
    cy.get("[data-cy=submit-nueva-tarea]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El nombre de la tarea es obligatorio.");

    cy.get("[data-cy=alerta]").should("have.class", "mensaje error");

    // Creación de tareas
    cy.get("[data-cy=input-tarea]").type("Definir diseño");
    cy.get("[data-cy=submit-nueva-tarea]").click();

    cy.get("[data-cy=input-tarea]").type("Definir tipografía");
    cy.get("[data-cy=submit-nueva-tarea]").click();

    cy.get("[data-cy=input-tarea]").type("Definir colores");
    cy.get("[data-cy=submit-nueva-tarea]").click();
  });

  it("<Tareas /> - Completar, descompletar, editar y eliminar", () => {
    // Selecciona la primer tarea y la marca como complete
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea-incompleta]").click();
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea-completa]").should(
      "have.class",
      "completo"
    );

    // Selecciona la primer tarea y la desmarca como complete
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea-completa]").click();
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea-incompleta]").should(
      "have.class",
      "incompleto"
    );

    // Edición
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=btn-editar]").click();
    cy.get("[data-cy=input-tarea]").clear().type("TAREA ACTUALIZADA");
    cy.get("[data-cy=submit-nueva-tarea]").click();

    // Eliminar
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=btn-eliminar]").click();
    cy.get("[data-cy=tarea]:nth-child(1)")
      .invoke("text")
      .should("not.equal", "TAREA ACTUALIZADA");
  });
});
