import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CharacterCreation from '../views/CharacterCreation.vue'
import Game from '../views/Game.vue'
import EnemySelect from '../views/EnemySelect.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/enemySelect/:classID',
    name: 'EnemySelect',
    component: EnemySelect
  },
  {
    path: '/characterCreation',
    name: 'CharacterCreation',
    component: CharacterCreation
  },
  {
    path: '/game/:classID/:enemyID',
    name: 'Game',
    component: Game
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
