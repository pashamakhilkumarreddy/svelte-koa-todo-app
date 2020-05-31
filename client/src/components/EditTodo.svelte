<svelte:head>
  <title>Edit Todo</title>
</svelte:head>
<div class="modal is-block">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="container">
      <Form>
        <h1 class="has-text-weight-bold has-text-centered is-size-3">Edit Todo</h1>
        <div class="field">
          <label for="edit-todo-name" class="label">Todo</label>
          <div class="control">
            <input type="text" id="edit-todo-name" name="name" class="input" placeholder="Todo Name"
              bind:value={todo.name} required />
          </div>
        </div>
        <div class="field">
          <label for="edit-todo-description" class="label">Todo Description</label>
          <div class="control">
            <input type="text" id="edit-todo-description" name="description" class="input"
              placeholder="Todo Description" bind:value={todo.description} required />
          </div>
        </div>
        <label for="completed" class="label">
          <input type="checkbox" bind:checked={todo.completed} />
          Completed
        </label>
        <div class="control buttons">
          <button class="button is-primary" on:click|preventDefault={editTodo} data-id="{todo.id}">Submit</button>
          <button class="button is-danger" on:click|preventDefault={closeModal}>Cancel</button>
        </div>
      </Form>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" on:click|preventDefault={closeModal}></button>
</div>
<style>
  .modal-content,
  .container {
    height: 100%;
  }

  .modal-content {
    max-height: inherit !important;
    width: auto !important;
    overflow: hidden !important;
  }
</style>
<script>
  import {
    onMount
  } from 'svelte';
  import Form from './Form.svelte';
  import {
    toggleEditModalDisplay,
    editModalTodoValue,
  } from '../store';
  import TodoService from '../services/TodoService';

  let todo = {};

  onMount(() => {
    const unsubscribe = editModalTodoValue.subscribe(todoContent => {
      todo = {
        ...todoContent
      };
    });
  });

  const closeModal = () => {
    toggleEditModalDisplay.update(state => !state)
    editModalTodoValue.update(state => {});
  }

  const editTodo = async () => {
    try {
      const isTodoEdited = await TodoService.editTodo(todo);
      const {
        error,
        payload
      } = isTodoEdited.data;
      if (!error && payload) {
        closeModal();
      }
    } catch (err) {
      console.error(err);
    }
  }
</script>