import TodoApi from "cypress/api/TodoApi";
import User from "cypress/models/User";

export default class CreateTodoPage {
  private todoName: string;

  private get newTodoInput() {
    return '[data-testid="new-todo"]';
  }

  private get submitButton() {
    return '[data-testid="submit-newTask"]';
  }
  
  load() {
    cy.visit('/todo/new')
  }

  insertNewTodo(todoName: string) {
    cy.get(this.newTodoInput).type(todoName);
    this.todoName = todoName;
    cy.get(this.submitButton).click();
  }

  getTodoName() {
    return this.todoName;
  }

  insertNewTodoByApi(user: User) {
    new TodoApi().createTodo(user)
  }



}