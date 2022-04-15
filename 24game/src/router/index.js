import { createRouter, createWebHistory } from 'vue-router'
import Member from '../views/Member.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import Game from '../views/game.vue'
import historylist from '../views/history.vue'
import Profile from '../views/Profile.vue'
const history = createWebHistory()
const routes = [
  { path: '/Member', name: 'Member', component: Member },
  { path: '/', name: 'Home', component: Home },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  {
    path: '/:catchNotMatchPath(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/historylist',
    name: 'historylist',
    component: historylist
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({ history, routes })
export default router
