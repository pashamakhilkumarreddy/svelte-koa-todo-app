<header class="header">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="/" class="navbar-item">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" />
      </a>

      <span role="button" class="navbar-burger burger" class:is-active="{showMobileNavbar}" aria-label="menu"
        aria-expanded="false" data-target="main-navbar" on:click={handleNavbarDisplay}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </span>
    </div>

    <div id="main-navbar" class="navbar-menu" class:is-active="{showMobileNavbar}">
      <div class="navbar-start">
        <a href="/" class="navbar-item">
          Home
        </a>
      </div>
      <div class="navbar-end">
        <a href="/todos" class="navbar-item">Todos</a>
        <a href="/add-todo" class="navbar-item">Add Todo</a>
      </div>
    </div>
  </nav>
</header>
<style>
  .header {
    border-bottom: 1px solid #ddd;
    box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.5);
  }

  a:hover {
    text-decoration: none;
  }
</style>
<script>
  let showMobileNavbar = false;
  const handleNavbarDisplay = () => {
    showMobileNavbar = !showMobileNavbar;
  }
</script>