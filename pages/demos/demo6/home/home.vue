<template>
  <scroll-view class="page"
    scroll-y
    :style="{
    display: visible ? 'block' : 'none'
  }">
    <view>首页</view>
    <button @click="handleClick">切换到我的</button>
    <view v-if="!isGetData">模拟数据加载中...</view>
    <view v-for="item in list"
      :key="item">
      <text>首页页面的第{{item }}条数据</text>
    </view>
  </scroll-view>
</template>

<script>
export default {
  props: {
    visible: Boolean
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
    },
    handleClick () {
      this.$emit('change', 'mine')
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
