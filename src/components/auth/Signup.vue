<template>
  <div class="container">
    <div id="signup">
      <form>
        <h1>Sign Up</h1>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            id="email"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="password"
            name="pass"
            id="pass"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </form>
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
};
</script>
