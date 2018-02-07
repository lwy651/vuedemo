import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import User from '@/components/User'
import Order from '@/components/Order'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import AMap from 'vue-amap'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: '9277324d6a52d1745cd62fbbc5d4050f',
  plugin: ['AMap.PlaceSearch', 'AMap.Geolocation']
})
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
