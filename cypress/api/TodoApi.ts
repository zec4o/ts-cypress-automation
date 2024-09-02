import User from "cypress/models/User"

export default class TodoApi {
  createTodo(user: User) {
    cy.request({
      method: "POST",
      url: '/api/v1/tasks',
      body: {
        isCompleted: false,
        item: "Buy milk",
      },
      headers: {
        Authorization: `Bearer ${user.getToken()}`
      }
    })
  }
}