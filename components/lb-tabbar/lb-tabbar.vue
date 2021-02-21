<template>
  <view class="lb-tabbar">
    <view :class="['lb-tabbar-content', fixed ? 'lb-tabbar--fixed' : '']"
      :style="{
        backgroundColor: bgColor,
        paddingBottom: `${safeAreaHeight}px`
      }">
      <slot></slot>
      <view v-if="border"
        class="lb-tabbar-border"
        :style="{
          borderColor: borderColor
        }">
      </view>
    </view>
    <view v-if="placeholder"
      class="lb-tabbar-placeholder"
      :style="{
        height: `${tabbarHeight}px`
      }">
    </view>
  </view>
</template>

<script>
const SAFE_AREA_INSET_BOTTOM = 34
import { getPx } from './utils'
export default {
  props: {
    value: [String, Number],
    height: {
      type: String,
      default: '50px'
    },
    iconSize: {
      type: String,
      default: '22px'
    },
    textSize: {
      type: String,
      default: '12px'
    },
    textHeight: {
      type: String,
      default: '18px'
    },
    dotColor: {
      type: String,
      default: '#F56C6C'
    },
    fixed: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    animate: String,
    closeAnimateOnRaisede: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: '#DCDFE6'
    },
    bgColor: {
      type: String,
      default: '#FFF'
    },
    inactiveColor: {
      type: String,
      default: '#909399'
    },
    activeColor: {
      type: String,
      default: '#409EFF'
    },
    inactiveTextColor: String,
    activeTextColor: String
  },
  data () {
    return {
      active: this.value,
      activeItem: {},
      tabbarItems: [],
      hasRaisede: false,
      isIphoneX: false,
      safeAreaHeight: 0
    }
  },
  computed: {
    tabbarItemsLength () {
      return this.tabbarItems.length
    },
    tabbarHeight () {
      this.safeAreaHeight = this.isIphoneX ? SAFE_AREA_INSET_BOTTOM : 0 // 苹果X等机型安全区高度
      const height = getPx(this.height) // 默认高度
      const raisedeHeight = this.hasRaisede ? getPx(this.iconSize) : 0 // 凸起高度
      const tabbarHeight = height + this.safeAreaHeight + raisedeHeight // 整体高度
      return tabbarHeight
    }
  },
  provide () {
    return {
      tabbar: this
    }
  },
  created () {
    const res = uni.getSystemInfoSync()
    const { model, safeArea } = res
    if (
      (model.indexOf('iPhone') > -1 && safeArea && safeArea.top > 20) ||
      model.indexOf('iPhone X') > -1 ||
      model.indexOf('iPhone 1') > -1
    ) {
      this.isIphoneX = true
    }
    this.getTabbarHeight()
  },
  methods: {
    getTabbarHeight () {
      return this.tabbarHeight
    }
  },
  watch: {
    value (newVal) {
      this.active = newVal
    },
    active (newVal) {
      this.$emit('input', newVal)
      setTimeout(() => {
        this.$emit('change', this.activeItem)
      }, 0)
    },
    tabbarItemsLength () {
      if (this.hasRaisede) return
      for (let i = 0; i < this.tabbarItems.length; i++) {
        const item = this.tabbarItems[i]
        if (item.raisede) {
          this.hasRaisede = true
          break
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
