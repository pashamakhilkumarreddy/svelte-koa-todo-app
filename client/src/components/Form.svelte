<div class="columns is-mobile is-centered is-vcentered" class:mt-6="{marginTop}" >
  <div class="column is-12-mobile is-8-tablet is-6-desktop">
    <form class="todo-form">
      <slot>
        <p class="has-text-danger">No form content detected</p>
      </slot>
    </form>
  </div>
</div>
<script>
export let marginTop = false;
</script>
<style>
.todo-form {
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.2);
  padding: 2.5rem 3.5rem;
  background: #fff
}

.columns {
  height: inherit;
}
</style>