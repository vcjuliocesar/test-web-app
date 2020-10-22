<template>
  <div id="signup">
    <form>
       <h1>Sign Up</h1>
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
      <button type="submit">Sing Up<button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
};
</script>
