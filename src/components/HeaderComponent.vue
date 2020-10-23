<template>
  <header id="header">
    <div class="wrap">
      <div id="logo">
        <h3>vue web app</h3>
      </div>
      <nav id="menu">
        <ul>
          <li><router-link to="/">About</router-link></li>
          <li><a href="" @click="logout()">logout</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "HeaderComponent",
  data(){
    return{}
  },
  methods:{
    logout:function(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login');
      });
    }
  }
};
</script>
