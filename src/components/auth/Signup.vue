<template>
  <div class="container">
    <div id="signup">
      <form @submit.prevent="SignUp()">
        <h1>Sign Up</h1>
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
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "Signup",
  data() {
    return {
      user: {
        email: "",
        pass: "",
      },
    };
  },
  methods: {
    SignUp:function(){
      firebase.auth().createUserWithEmailAndPassword(this.user.email,this.user.pass).then(
        ()=>{
          //this.$router.push('/login');
          console.log("usuario creado");
        },
        (err)=>{
          console.log(err.message)
        }
      )
    }
  },
};
</script>
