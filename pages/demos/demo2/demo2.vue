<template>
  <view>
    <lb-tabbar v-model="active"
      @change="handleChange">
      <lb-tabbar-item v-for="item in tabbars"
        :key="item.name"
        :name="item.name"
        :icon="active === item.name ? item.iconActive : item.icon">
        {{ item.text }}
      </lb-tabbar-item>
    </lb-tabbar>
  </view>
</template>

<script>
export default {
  data () {
    return {
      active: 'home',
      tabbars: [
        {
          name: 'home',
          text: '首页',
          icon: '/static/home.png',
          iconActive: '/static/home-active.png'
        },
        {
          name: 'cart',
          text: '购物车',
          icon: '/static/cart.png',
          iconActive: '/static/cart-active.png'
        },
        {
          name: 'plus',
          text: '发布',
          icon: '/static/plus.png',
          iconActive: '/static/plus-active.png'
        },
        {
          name: 'notice',
          text: '消息',
          icon: 'notice',
          icon: '/static/notice.png',
          iconActive: '/static/notice-active.png'
        },
        {
          name: 'mine',
          text: '我的',
          icon: '/static/mine.png',
          iconActive: '/static/mine-active.png'
        }
      ]
    }
  },
  methods: {
    handleChange (e) {
      console.log('change::', e)
      uni.showToast({
        title: e.name,
        icon: 'none'
      })
    }
  }
}
</script>

<style></style>
