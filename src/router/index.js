import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Room from '../views/Room.vue'
import Monitor from '../views/Monitor.vue'
import League from '../views/League.vue'
import RoomDetails from '../views/RoomDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/room',
    name: 'room',
    component: Room
  },
  {
    path: '/monitor',
    name: 'monitor',
    component: Monitor
  },
  {
    path: '/league',
    name: 'league',
    component: League
  },
  {
    path: '/rooms/:room',
    name: 'room-detail',
    component: RoomDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
