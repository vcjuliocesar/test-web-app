<template>
  <div id="login">
    <form @submit.prevent="Login()">
      <h1>Sign In</h1>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          class="form-control"
          v-model="user.email"
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
          v-model="user.pass"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>
    <router-link to="/signup">Sign up</router-link>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        pass: "",
      },
    };
  },
  methods: {
    Login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.pass)
        .then(() => {
          this.$router.replace("home");
          this.user.email = "";
          this.user.pass = "";
        },(err)=>{
          console.log(err.message);
        });
    },
  },
};
</script>
