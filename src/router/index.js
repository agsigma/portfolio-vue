import { createRouter, createWebHistory } from 'vue-router'
import Page from '../views/Page.vue'

const routes = [
  {
    path: '/',
    redirect: '/category/portfolio'
  },
  {
    path: '/page/:id',
    name: 'Page',
    component: Page
  },
  {
    path: '/tag/:tag',
    name: 'TagView',    
    component: () => import('../views/TagView.vue')
  },
  {
    path: '/category/:category',
    name: 'CategoryView',    
    component: () => import('../views/CategoryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
