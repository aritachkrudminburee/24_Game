import { createRouter, createWebHistory } from 'vue-router'
import Member from '../views/Member.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import Game from '../views/game.vue'
import historylist from '../views/history.vue'
import Retry from "../views/Retry.vue";
const history = createWebHistory()
const routes = [
  { path: '/Member', name: 'Member', component: Member },
  { path: '/', name: 'Home', component: Home },
  { path: '/game', name: 'game', component: Game },
  { path: "/Retry", name: "Retry", component: Retry },
  { path: '/:catchNotMatchPath(.*)', name: 'NotFound', component: NotFound },
  { path: '/historylist', name: 'historylist', component: historylist }
]

const router = createRouter({ history, routes })
export default router