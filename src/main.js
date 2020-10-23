import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueGoogleCharts from "vue-google-charts";
import firebase from "firebase";
import firebaseConfig from "./config";
import Home from "./components/Home.vue";
import Login from "./components/auth/Login.vue";
import Signup from "./components/auth/Signup.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueGoogleCharts);

let app = "";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const routes = [
  { path: "*", redirect: "/login" },
  { path: "/", name: "home", component: Home, meta: { requiresAuth: true } },
  { path: "/login", name: "login", component: Login },
  { path: "/signup", name: "signup", component: Signup },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: { requiresAuth: true },
  },
];
const router = new VueRouter({ routes, mode: "history" });

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next("login");
  } else if (!requiresAuth && currentUser) {
    next("home");
  } else {
    next();
  }
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
