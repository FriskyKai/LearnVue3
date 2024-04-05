<script setup>

</script>

<template>
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <ul class="d-flex">
        <li class="nav-item"><RouterLink class="nav-link" to="/">Главная</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link" to="/directives">Знакомство с директивами</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  ul {
    list-style-type: none;
  }

  a {
    color: whitesmoke;
  }

  a:hover {
    color: #5599ee;
  }
</style>