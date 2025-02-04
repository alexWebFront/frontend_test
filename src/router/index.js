import { createRouter, createWebHashHistory } from 'vue-router'
import FormPage from '../views/FormPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: FormPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
