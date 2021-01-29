<template>
  <view class="content">
    <view class="layout-page">
      <!-- 首页 -->
      <home :visible="active === 'home'"
        :tabbar-height="tabbarHeight">
      </home>
      <!-- 购物车 -->
      <cart :visible="active === 'cart'"
        :tabbar-height="tabbarHeight">
      </cart>
      <!-- 通知 -->
      <notice :visible="active === 'notice'"
        :tabbar-height="tabbarHeight">
      </notice>
      <!-- 我的 -->
      <mine :visible="active === 'mine'"
        :tabbar-height="tabbarHeight">
      </mine>
    </view>
    <!-- 此处因为不需要点击凸起的发布按钮进行页面变化或跳转，故将v-model="active"修改成:value="active" -->
    <!-- 在handleChange中手动判断进行active的赋值 -->
    <lb-tabbar ref="tabbar"
      :value="active"
      :animate="animate"
      @change="handleChange">
      <lb-tabbar-item v-for="item in tabbars"
        :key="item.name"
        :name="item.name"
        :icon="item.icon"
        :dot="item.dot"
        :info="item.info"
        :raisede="item.raisede"
        icon-prefix="iconfont"
        @click="handleTabbarItemClick">
        {{ item.text }}
      </lb-tabbar-item>
    </lb-tabbar>
  </view>
</template>

<script>
import Home from '@/pages/demos/demo6/home/home'
import Cart from '@/pages/demos/demo6/cart/cart'
import Notice from '@/pages/demos/demo6/notice/notice'
import Mine from '@/pages/demos/demo6/mine/mine'
export default {
	components: {
		Home,
		Cart,
		Notice,
		Mine
	},
  data () {
    return {
      active: '',
      animate: 'zoomIn',
      tabbarHeight: '',
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
          dot: true,
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
  onLoad (query) {
    // 可通过地址栏传tab参数可指定默认显示哪个tab页面
    this.active = query.tab || 'home'
  },
  onReady () {
    this.tabbarHeight = this.$refs.tabbar.tabbarHeight
  },
  methods: {
    handleChange (e) {
      console.log('change::', e)
      if (e.name !== 'plus') {
        this.active = e.name
      }
    },
    handleTabbarItemClick (e) {
      console.log('click::', e)
      if (e.name === 'plus') {
        uni.showToast({
          title: e.name,
          icon: 'none'
        })
      }
    }
  },
  watch: {
    active: {
      handler (newVal) {
        if (newVal) {
          // pages.json中设置页面的title为空，可在此处动态设置标题及颜色等等
          const item = this.tabbars.find(item => item.name === this.active)
          uni.setNavigationBarTitle({
            title: item.text
          })
        }
      },
      immediate: true
    }
  }
}
</script>
