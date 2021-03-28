<template>
  <view>
    <radio-group @change="radioChange">
      <view v-for="item in animates"
        :key="item">
        <label>
          <radio :value="item"
            :checked="animate === item" />
          <text>{{ item }}</text>
        </label>
      </view>
    </radio-group>
    <lb-tabbar v-model="active"
      :animate="animate"
      @change="handleChange">
      <lb-tabbar-item v-for="item in tabbars"
        :key="item.name"
        :name="item.name"
        :icon="item.icon"
        :dot="item.dot"
        :info="item.info"
        :raisede="item.raisede"
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
      animate: 'zoomIn',
      animates: ['zoomIn', 'bounce', 'rubberBand', 'fadeIn'],
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
          icon: 'plus',
          raisede: true
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
    },
    radioChange (e) {
      this.animate = e.detail.value
    }
  }
}
</script>

<style></style>
