import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Covid from "@/views/Covid";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: 'mdi-home',
    component: Home
  },
  {
    path: '/covid',
    name: 'Covid',
    component: Covid
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
