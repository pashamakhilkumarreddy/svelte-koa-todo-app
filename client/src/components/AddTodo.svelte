<svelte:head>
  <title>Add Todo</title>
</svelte:head>
<Form marginTop={true}>
  <h1 class="has-text-weight-bold has-text-centered is-size-3">Add a new Todo</h1>
  <div class="field">
    <label for="todo-name" class="label">Todo</label>
    <div class="control">
      <input type="text" id="todo-name" name="name" class="input" placeholder="Todo Name" bind:value={todo.name}
        required />
    </div>
  </div>
  <div class="field">
    <label for="todo-description" class="label">Todo Description</label>
    <div class="control">
      <input type="text" id="todo-description" name="description" class="input" placeholder="Todo Description"
        bind:value={todo.description} required />
    </div>
  </div>
  <div class="control buttons">
    <button class="button is-primary" on:click|preventDefault={addTodo}>Add Todo</button>
    <button class="button is-danger" on:click|preventDefault={resetTodo}>Clear</button>
  </div>
</Form>
<script>
  import page from 'page';

  import Form from './Form.svelte'
  import TodoService from '../services/TodoService';

  const todo = {
    name: '',
    description: '',
  }

  const addTodo = async (e) => {
    if (todo.name && todo.description) {
      try {
        const newTodo = await TodoService.addTodo({
          ...todo
        });
        const {
          error,
          payload
        } = newTodo.data;
        if (!error && payload) {
          page.redirect('/todos');
        }
      } catch (err) {
        console.error(err);
      }
    }
  }

  const resetTodo = (e) => {
    todo.name = '';
    todo.description = '';
  }
</script>
<style>
</style>