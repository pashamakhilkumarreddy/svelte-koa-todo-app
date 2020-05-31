<svelte:head>
  <title>Add Todo</title>
</svelte:head>
<Form marginTop={true}>
  <h1 class="has-text-weight-bold has-text-centered is-size-3">Add a new Todo</h1>
  <div class="field">
    <label for="todo-name" class="label">Todo</label>
    <div class="control">
      <input type="text" id="todo-name" name="name" class="input" placeholder="Todo Name" bind:value={todo.todoName}
        required />
    </div>
  </div>
  <div class="field">
    <label for="todo-description" class="label">Todo Description</label>
    <div class="control">
      <input type="text" id="todo-description" name="description" class="input" placeholder="Todo Description"
        bind:value={todo.todoDescription} required />
    </div>
  </div>
  <div class="control buttons">
    <button class="button is-primary" on:click|preventDefault={addTodo}>Add Todo</button>
    <button class="button is-danger" on:click|preventDefault={clearTodo}>Clear</button>
  </div>
</Form>
<script>
  import page from 'page';

  import Form from './Form.svelte'
  import TodoService from '../services/TodoService';
  const todo = {
    todoName: '',
    todoDescription: '',
  }
  const addTodo = async (e) => {
    if (todo.todoName && todo.todoDescription) {
      try {
        const todo = await TodoService.addTodo({
          name: todo.todoName,
          description: todo.todoDescription,
        });
        const {
          error,
          payload
        } = todo.data;
        if (!error && payload) {
          page.redirect('/todos');
        }
        console.log(todo);
      } catch (err) {
        console.error(err);
      }
    }
  }

  const clearTodo = (e) => {
    todoName = '';
    todoDescription = '';
  }
</script>
<style>
</style>