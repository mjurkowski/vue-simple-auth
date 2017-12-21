import Vue from 'vue'

import App from '@/App'

import {router} from '@/router'
import {store} from '@/store'
import auth from '@/auth'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  beforeCreate () {
    auth.init(this)
  },
  template: '<App/>',
  components: { App }
})
