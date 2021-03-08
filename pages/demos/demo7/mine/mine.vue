<template>
  <view class="cart">
    <view>我的</view>
    <button @click="handleClick">切换到购物车</button>
    <button @click="handleReturn">返回Demo列表</button>
    <view v-if="!isGetData">模拟数据加载中...</view>
    <view v-for="item in list"
      :key="item">
      <text>我的页面的第{{item }}条数据</text>
    </view>
    <page-tabpars></page-tabpars>
  </view>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      list: [],
      isGetData: false
    }
  },
  computed: {
    ...mapGetters(['active']),
  },
  created () {
    const active = 'mine'
    if (this.active !== active) {
      this.SET_ACTIVE(active)
    }
    this.getData()
  },
  methods: {
    ...mapMutations(['SET_ACTIVE']),
    // 模拟请求数据
    getData () {
      setTimeout(() => {
        for (let i = 0; i < 50; i++) {
          this.list.push(i + 1)
        }
        this.isGetData = true
      }, 1000)
    },
    handleClick () {
      uni.switchTab({
        url: '/pages/demos/demo7/cart/cart',
        success: () => {
          // 切换后重新设置，因为不在在触发页面的created生命周期
          this.SET_ACTIVE('cart')
        }
      })
    },
    handleReturn () {
      uni.navigateTo({
        url: '/pages/index/index'
      })
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
