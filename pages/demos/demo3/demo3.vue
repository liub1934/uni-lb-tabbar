<template>
  <view>
    <lb-tabbar v-model="active"
      @change="handleChange">
      <lb-tabbar-item v-for="item in tabbars"
        :key="item.name"
        :name="item.name"
        :icon="item.icon"
        :dot="item.dot"
        :info="item.info"
        icon-prefix="iconfont">
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
          icon: 'home',
          dot: true
        },
        {
          name: 'cart',
          text: '购物车',
          icon: 'cart'
        },
        {
          name: 'plus',
          text: '发布',
          icon: 'plus'
        },
        {
          name: 'notice',
          text: '消息',
          icon: 'notice',
          info: 99
        },
        {
          name: 'mine',
          text: '我的',
          icon: 'mine'
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
