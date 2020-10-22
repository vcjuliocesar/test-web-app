<template>
  <div id="login">
    <form>
        <h1>Sign In</h1>
      <input
        type="email"
        placeholder="email"
        name="email"
        id="email"
        class="btn"
      />
      <input
        type="password"
        placeholder="password"
        name="pass"
        id="pass"
        class="btn"
      />
      <button type="submit">Sing In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
