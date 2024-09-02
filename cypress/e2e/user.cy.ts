import User from 'cypress/models/User';
import RegisterPage from 'cypress/pages/RegisterPage';
import TodoPage from 'cypress/pages/TodoPage';

describe("User Test Suite", () => {
  it("should be able to register", () => {
    const user = new User();
    const todoPage = new TodoPage();
    const registerPage = new RegisterPage()
  
    registerPage.load();
  
    registerPage.register(user);
  
    todoPage.getWelcomeMessage().should('be.visible');
  })
})
