<template>
  <header id="header">
    <div class="wrap">
      <div id="logo">
        <h3>vue web app</h3>
      </div>
      <nav id="menu">
        <ul>
          <li><router-link to="/">About</router-link></li>
          <li><router-link to="/logout">Logout</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
