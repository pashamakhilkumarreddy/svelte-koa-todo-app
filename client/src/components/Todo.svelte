<div class="box">
  <div class="media">
    <div class="media-content">
      <div class="content" id="{id}">
        <p>
          <strong class="is-capitalized">{name}</strong> <small>{date}</small>
          <br />
          <span>{description}</span>
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <span class="level-item">
            <button class="button is-info" on:click|preventDefault={editTodo}>Edit Todo</button>
          </span>
          <span class="level-item">
            <button class="button is-danger" on:click|preventDefault={deleteTodo}>Delete Todo</button>
          </span>
        </div>
      </nav>
    </div>
  </div>
</div>
<script>
  export let id;
  export let name;
  export let date;
  export let description;

  const editTodo = e => {

  }

  const deleteTodo = e => {

  }
</script>