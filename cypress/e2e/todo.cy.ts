import User from "cypress/models/User";
import CreateTodoPage from "cypress/pages/CreateTodoPage";
import RegisterPage from "cypress/pages/RegisterPage";
import TodoPage from "cypress/pages/TodoPage";


describe("Todo Test Suite", () => {
  let user: User;
  let registerPage: RegisterPage;
  let createTodoPage: CreateTodoPage;
  let todoPage: TodoPage;


  beforeEach(() => {
    user = new User();
    createTodoPage = new CreateTodoPage();
    registerPage = new RegisterPage()
    todoPage = new TodoPage();
    registerPage.registerByApi(user)

  })
  it("should be able to create a todo", () => {    
    createTodoPage.load();
    createTodoPage.insertNewTodo('Buy milk');
  
    todoPage.getTodoItem().should('contain.text', createTodoPage.getTodoName());
  })
  
  it("should be able to remove a todo", () => {
    createTodoPage.insertNewTodoByApi(user);

    todoPage.load();
    todoPage.removeTodo();
  
    todoPage.checkEmptyPage().should('be.visible');
  })
})
