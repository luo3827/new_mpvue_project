import Vue from 'vue'
import App from './App'

import './assets/css/style.scss'

import wxrequest from './utils/request'
Vue.prototype.$http = wxrequest

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
