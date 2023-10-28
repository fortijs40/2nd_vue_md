import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '../stores/store.js'
import About from '../views/AboutView.vue'
import Landing from '../views/LandingView.vue'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (!useStore().user.logged_in && to.path !== '/') {
    next('/');
  } else {
    next();
  }
});

export default router
