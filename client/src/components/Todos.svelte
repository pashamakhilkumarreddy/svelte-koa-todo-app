<svelte:head>
  <title>Todos</title>
</svelte:head>
<div class="columns is-multiline is-mobile is-vcentered todos mt-6">
  {#if allTodos.length}
    {#each allTodos as {_id, name, description, createdDate, completed}, i}
    <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd">
      <Todo {_id} {name} {description} {createdDate} {completed} />    
    </div>
    {:else}
      <p class="has-text-weight-bold has-text-info has-text-centered full-width is-size-3">Loading...</p>
    {/each} 
  {:else}
    <p class="has-text-weight-bold has-text-primary has-text-centered full-width is-size-1">Looks like you are all set!!!</p>
  {/if}
</div>
{#if $toggleEditModalDisplay}
  <EditTodo />
{/if}
<script>
import { onMount } from 'svelte';
import TodoService from '../services/TodoService';
import Todo from './Todo.svelte';
import EditTodo from './EditTodo.svelte';
import { toggleEditModalDisplay, todosStore } from '../store';

let allTodos = [];

let dummy = {};

todosStore.subscribe(value => {
  allTodos = value;
});

onMount(async () => {
  try {
    const res = await TodoService.getTodos();
    const { error, payload } = res.data;
    if (res.status && !error) {
      todosStore.update(todos => payload.todos);
    }
  } catch (err) {
    console.error(err);
  }
});
</script>