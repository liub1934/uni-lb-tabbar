import Vue from 'vue'
import App from './App'
import './styles/index.scss'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
