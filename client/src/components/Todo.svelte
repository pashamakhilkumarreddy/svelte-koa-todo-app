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
      </div>
      <label for="completed" class="label">
        <input type="checkbox" bind:checked={completed} />
        Completed
      </label>
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

<script>
  import TodoService from '../services/TodoService';
  import { toggleEditModalDisplay, editModalTodoValue } from '../store';

  export let _id;
  export let name;
  export let createdDate;
  export let description;
  export let completed;

  const openEditTodoModal = e => {
    toggleEditModalDisplay.update(state => !state);
    editModalTodoValue.update(state => {
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
      const deleteTodo = await TodoService.deleteTodo(e.target.dataset.id);
    } catch(err) {
      console.error(err);
    }
  }
</script>