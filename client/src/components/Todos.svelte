<svelte:head>
  <title>Todos</title>
</svelte:head>
<div class="columns is-mobile is-vcentered mt-6">
  <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-3-fullhd">
    {#each todos as {id, name, date, description}, i}
      <Todo {id} {name} {date} {description} />
    {/each} 
  </div>
</div>
<script>
import Todo from './Todo.svelte';
let todos = [];
</script>