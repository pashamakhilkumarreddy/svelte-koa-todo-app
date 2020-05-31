<svelte:head>
  <title>Todos</title>
</svelte:head>
<div class="columns is-multiline is-mobile is-vcentered todos mt-6">
  {#each todos as {_id, name, description, createdDate, completed}, i}
  <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd">
    <Todo {_id} {name} {description} {createdDate} {completed} />    
  </div>
  {:else}
    <p>Loading...</p>
  {/each} 
</div>
{#if showEditModal}
  <EditTodo />
{/if}

<script>
import { onMount } from 'svelte';
import TodoService from '../services/TodoService';
import Todo from './Todo.svelte';
import EditTodo from './EditTodo.svelte';
import { toggleEditModalDisplay } from '../store';

let showEditModal;

const unsubscribe = toggleEditModalDisplay.subscribe(value => {
  showEditModal = value;
});

let todos = [];
onMount(async () => {
  try {
    const res = await TodoService.getTodos();
    if (res.status && !res.data.error) {
      todos = res.data.payload.todos;
    }
  } catch (err) {
    console.error(err);
  }
});

</script>

