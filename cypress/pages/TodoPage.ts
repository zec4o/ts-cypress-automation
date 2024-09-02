export default class TodoPage {

  private get welcomeMessage() {
    return '[data-testid="welcome"]';
  }

  private get removeButton() {
    return '[data-testid="delete"]';
  }

  private get emptyPage() {
    return '[data-testid="no-todos"]';
  }

  private get todoItem() {
    return '[data-testid="todo-item"]';
  }

  load() {
    cy.visit('/todo')
  }

  getWelcomeMessage() {
    return cy.get(this.welcomeMessage);
  }

  removeTodo() {
    cy.get(this.removeButton).click();
  }

  checkEmptyPage() {
    return cy.get(this.emptyPage);
  }

  getTodoItem() {
    return cy.get(this.todoItem);
  }
}