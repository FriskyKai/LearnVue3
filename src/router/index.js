import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import("@/views/HomeView.vue")
    },
    {
      name: 'Directives',
      path: '/directives',
      component: () => import("@/views/DirectivesView.vue")
    },
    {
      name: 'Api',
      path: '/api',
      component: () => import("@/views/ApiView.vue")
    },
    {
      name: 'ApiDetails',
      path: '/api/:id',
      component: () => import("@/views/ApiDetailsView.vue")
    },
  ]
})

export default router
