<script>
  import page from 'page';

  import '../node_modules/bulma/css/bulma.min.css';

  import Header from './components/common/Header.svelte';
  import Footer from './components/common/Footer.svelte';
  import Home from './components/Home.svelte'
  import AddTodo from './components/AddTodo.svelte';
  import Todos from './components/Todos.svelte';
  import Todo from './components/Todo.svelte';

  // set default component
  let current = Home;

  // Map routes to page. If a route is hit the current
  // reference is set to the route's component
  page('/', () => (current = Home));
  page('/add-todo', () => (current = AddTodo));
  page('/todos', () => (current = Todos));
  page('/todo/:id', () => (current = Todo));
  // activate router
  page.start();
</script>

<Header />
<main class="container">
  <svelte:component this={current} />
</main>
<Footer />

<style>

</style>