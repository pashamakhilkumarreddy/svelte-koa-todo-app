import Api from './Api';

export default {
  addTodo(todo) {
    return Api().post('todo', todo);
  },
  getTodos() {
    return Api().get('todos');
  },
  editTodo(todo) {
    return Api().put(`todo/${todo.id}`, todo);
  },
  deleteTodo(todoId) {
    return Api().delete(`todo/${todoId}`);
  }
}