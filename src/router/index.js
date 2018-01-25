import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import User from '@/components/User'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: Index
    },
    {
      path: '/order',
      name: 'User',
      component: User
    },
    {
      path: '/user',
      name: 'Order',
      component: Order
    }
  ]
})
