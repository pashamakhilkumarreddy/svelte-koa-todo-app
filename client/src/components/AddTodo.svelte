<svelte:head>
  <title>Add Todo</title>
</svelte:head>
<div class="columns is-mobile is-centered is-vcentered mt-6">
  <div class="column is-12-mobile is-6-tablet is-6-desktop">
    <form class="add-todo-form">
      <h1 class="has-text-weight-bold has-text-centered is-size-3">Add a new Todo</h1>
      <div class="field">
        <label for="todo-name" class="label">Todo</label>
        <div class="control">
          <input type="text" id="todo-name" name="name" class="input" placeholder="Todo Name" 
          bind:value={todoName} required />
        </div>
      </div>
      <div class="field">
        <label for="todo-description" class="label">Todo Description</label>
        <div class="control">
          <input type="text" id="todo-description" name="description" class="input" 
          placeholder="Todo Description" bind:value={todoDescription} required/>
        </div>
      </div>
      <div class="control buttons">
        <button class="button is-primary" on:click|preventDefault={addTodo}>Add Todo</button>
        <button class="button is-danger" on:click|preventDefault={clearTodo}>Clear</button>
      </div>      
    </form>
  </div>
</div>
<script>
let todoName = '';
let todoDescription = '';
const addTodo = (e) => {
  if (todoName && todoDescription) {

  }
}

const clearTodo = (e) => {
  todoName = '';
  todoDescription = '';
}
</script>
<style>
.add-todo-form {
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.2);
  padding: 2.5rem 3.5rem;
}
</style>