import Vuex from 'vuex'
import Vue from 'vue'
import Logger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'

const state = {
  active: 'home',
  animate: 'zoomIn',
  tabbars: [
    {
      name: 'home',
      text: '首页',
      icon: 'home',
      dot: true,
      path: '/pages/demos/demo7/home/home'
    },
    {
      name: 'cart',
      text: '购物车',
      icon: 'cart',
      path: '/pages/demos/demo7/cart/cart'
    },
    {
      name: 'plus',
      text: '发布',
      icon: 'plus',
      raisede: true
    },
    {
      name: 'notice',
      text: '消息',
      icon: 'notice',
      info: 99,
      path: '/pages/demos/demo7/notice/notice'
    },
    {
      name: 'mine',
      text: '我的',
      icon: 'mine',
      path: '/pages/demos/demo7/mine/mine'
    }
  ]
}

const getters = {
  active: state => state.active,
  animate: state => state.animate,
  tabbars: state => state.tabbars
}

const mutations = {
  SET_ACTIVE (state, data) {
    state.active = data
  },
  SET_TABBARS (state, data) {
    state.tabbars = data
  }
}

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  strict: debug,
  plugins: debug ? [Logger()] : []
})

export default store
