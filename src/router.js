import Vue from 'vue';
import Router from 'vue-router';
import Apex from './components/Apex.vue'
import Home from './components/Home.vue'
import Profile from './components/apex/Profile.vue'
import AboutUs from './components/AboutUs.vue'
import Guide from './components/Guide.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
      path: '/apex',
      name: 'apex',
      component: Apex
    },
    {
      path: '/profile/:platform/:gamertag',
      name: 'profile',
      component: Profile
    },
    {
      path: '/Ab',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path:'/guide',
      name:'Guide',
      component: Guide
    }
  ]
});