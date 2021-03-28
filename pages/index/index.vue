<template>
  <view class="list">
    <view class="grey-block"></view>
    <view v-for="(item, index) in demoList"
      :key="index">
      <view class="list-item"
        @tap="handleTap(item)">
        <view class="item-content">
          <text class="item-left">{{ item.title }}</text>
        </view>
      </view>
      <view class="grey-block"></view>
    </view>
  </view>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      demoList: [
        {
          title: '基本使用(icon图标)',
          path: '/pages/demos/demo1/demo1'
        },
        {
          title: '基本使用(图片图标)',
          path: '/pages/demos/demo2/demo2'
        },
        {
          title: '角标圆点及数字',
          path: '/pages/demos/demo3/demo3'
        },
        {
          title: '凸起',
          path: '/pages/demos/demo4/demo4'
        },
        {
          title: '简单动画效果',
          path: '/pages/demos/demo5/demo5'
        },
        {
          title: '完整应用-页面组件形式',
          path: '/pages/demos/demo6/demo6'
        },
        {
          title: '完整应用-switchtab形式',
          path: '/pages/demos/demo7/home/home',
          type: 'switchtab'
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['SET_ACTIVE']),
    handleTap ({ path, type }) {
      if (type === 'switchtab') {
        uni.switchTab({
          url: path
        })
        this.SET_ACTIVE('home')
      } else {
        uni.navigateTo({
          url: path
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  padding: 10px 15px;
  /* #ifndef APP-NVUE */
  display: flex;
  flex-direction: column;
  /* #endif */
}

.grey-block {
  height: 10px;
  background-color: $uni-bg-color-grey;
}
</style>
