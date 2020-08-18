import Vue from 'vue'
import VueRouter from 'vue-router'
import ExampleComponent from './components/ExampleComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/example',
    component: ExampleComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
