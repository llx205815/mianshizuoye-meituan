import { createRouter, createWebHashHistory } from 'vue-router'
import Prefer from '../views/Prefer.vue'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Team from '../views/Team.vue'
import Publish from '../views/Publish.vue'
import Community from '../views/Community.vue'
import Mine from '../views/Mine.vue'

const routes = [
  { path: '/', component: Prefer },
  { path: '/home', component: Home },
  { path: '/detail', component: Detail },
  { path: '/team', component: Team },
  { path: '/publish', component: Publish },
  { path: '/community', component: Community },
  { path: '/mine', component: Mine }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const profile = JSON.parse(localStorage.getItem('userProfile'))
  if (to.path === '/' && profile) {
    next('/home')
  } else {
    next()
  }
})

export default router
