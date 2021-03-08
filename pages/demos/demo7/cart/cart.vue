<template>
  <view class="cart">
    <view>购物车</view>
    <button @click="handleClick">切换到消息</button>
    <button @click="handleReturn">返回Demo列表</button>
    <view v-if="!isGetData">模拟数据加载中...</view>
    <view v-for="n in list"
      :key="n">
      <text>购物车页面的第{{ n }}条数据</text>
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
    const active = 'cart'
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
        url: '/pages/demos/demo7/notice/notice',
        success: () => {
          // 切换后重新设置，因为不在在触发页面的created生命周期
          this.SET_ACTIVE('notice')
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
