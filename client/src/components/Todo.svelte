<div class="box">
  <div class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <strong class="is-capitalized">{name}</strong>
          <br />
          <small>{new Date(createdDate)}</small>
          <br />
          <span>{description}</span>
        </p>
        <div class="todo-status">
          <p class="has-text-weight-bold has-text-primary" class:has-text-danger={!completed}>
            { completed ? 'Completed' : 'Pending' }
          </p>
          {#if completed}
          <span class="icon has-text-primary">
            <i class="material-icons">done</i>
          </span>
        {:else}
          <span class="icon has-text-danger">
            <i class="material-icons">pending_actions</i>
          </span>
        {/if} 
        </div>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <span class="level-item">
            <button class="button is-info" on:click|preventDefault={openEditTodoModal} data-id="{_id}">Edit Todo</button>
          </span>
          <span class="level-item">
            <button class="button is-danger" on:click|preventDefault={deleteTodo} data-id="{_id}">Delete Todo</button>
          </span>
        </div>
      </nav>
    </div>
  </div>
</div>
<style>
.todo-status {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
}
</style>
<script>
  import TodoService from '../services/TodoService';
  import { toggleEditModalDisplay, editModalStore, todosStore } from '../store';

  export let _id;
  export let name;
  export let createdDate;
  export let description;
  export let completed;

  const openEditTodoModal = e => {
    toggleEditModalDisplay.update(state => !state);
    editModalStore.update(state => {
      return {
        id: _id,
        name, 
        description,
        completed,
      }
    })
  }

  const deleteTodo = async (e) => {
    try {
      const id = e.target.dataset.id;
      const deleteTodo = await TodoService.deleteTodo(id);
      const { error, payload } = deleteTodo.data;
      if (!error && payload) {
        todosStore.update(todos => todos.filter(todo => todo._id !== id));
      }
    } catch(err) {
      console.error(err);
    }
  }
</script>