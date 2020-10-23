import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueGoogleCharts from "vue-google-charts";
import firebase from "firebase";
import Home from "./components/Home.vue";
import Login from "./components/auth/Login.vue";
import Signup from "./components/auth/Signup.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueGoogleCharts);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv-ycIeTvtH7irDdDmFDqipKA-8H2pSAA",
  authDomain: "test-web-app-ad1ec.firebaseapp.com",
  databaseURL: "https://test-web-app-ad1ec.firebaseio.com",
  projectId: "test-web-app-ad1ec",
  storageBucket: "test-web-app-ad1ec.appspot.com",
  messagingSenderId: "1014829588279",
  appId: "1:1014829588279:web:e7c35dbf276727bccf04b2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/home", name: "home", component: Home },
  { path: "/login", name: "login", component: Login },
  { path: "/signup", name: "signup", component: Signup },
];

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
