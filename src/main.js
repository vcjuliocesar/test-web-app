import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Signup from './components/auth/Signup.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path:'/',name:'home',component:Home},
  {path:'/home',name:'home',component:Home},
  {path:'/login', name:'login',component:Login},
  {path:'/signup',name:'signup',component:Signup}
];

const router = new VueRouter({routes,mode:'history'});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
