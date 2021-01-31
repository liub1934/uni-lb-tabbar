<template>
  <view class="page"
    scroll-y
    :style="{
    display: visible ? 'block' : 'none',
    height: height
  }">
    <view>通知</view>
    <view v-if="!isGetData">模拟数据加载中...</view>
    <view v-for="item in list"
      :key="item">
      <text>通知页面的第{{item }}条数据</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    tabbarHeight: String
  },
  data () {
    return {
      list: [],
      isGetData: false
    }
  },
  methods: {
    // 模拟请求数据
    getData () {
      setTimeout(() => {
        for (let i = 0; i < 50; i++) {
          this.list.push(i + 1)
        }
        this.isGetData = true
      }, 1000)
    }
  },
  watch: {
    visible: {
      handler (newVal) {
        if (newVal && !this.isGetData) {
          this.getData()
        }
      },
      immediate: true
    }
  }
}

</script>

<style lang="scss" scoped>
.page {
  overflow: auto;
}
</style>
