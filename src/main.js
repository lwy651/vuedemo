// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/svgs/home.svg'
import './assets/svgs/home_fill.svg'
import './assets/svgs/people.svg'
import './assets/svgs/people_fill.svg'
import './assets/svgs/comment.svg'
import './assets/svgs/comment_fill.svg'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
