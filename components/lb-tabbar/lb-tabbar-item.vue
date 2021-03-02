<template>
  <view :class="[
      'lb-tabbar-item',
      'animate__animated',
      isActive ? 'lb-tabbar-item--active' : ''
    ]"
    :style="{
      height: tabbarInfo.height
    }"
    @tap="handleTap">
    <view :class="[
        'lb-tabbar-item__icon',
        `lb-tabbar-item__icon--${raisede ? 'raisede' : 'default'}`,
        isAnimate ? `animate__animated animate__${tabbarInfo.animate}` : ''
      ]"
      :style="{
        transform: raisede ? `translateY(-${ty}px) scale(2)` : ''
      }">
      <image v-if="isImage"
        class="lb-tabbar-item__image"
        :src="icon"
        :style="{
          width: tabbarInfo.iconSize,
          height: tabbarInfo.iconSize
        }">
      </image>
      <text v-else
        :class="[
          'lb-tabbar-icon',
          iconPrefix,
          `${iconPrefix}-${icon}`,
          isActive ? 'lb-tabbar-item__icon--active' : ''
        ]"
        :style="{
          fontSize: tabbarInfo.iconSize,
          color: isActive ? tabbarInfo.activeColor : tabbarInfo.inactiveColor
        }">{{ iconCode }}</text>
      <text v-if="dot"
        :class="[
          'lb-tabbar-item__dot',
          info || info === 0 ? 'lb-tabbar-item__dot--info' : ''
        ]"
        :style="{
          backgroundColor: tabbarInfo.dotColor
        }">{{ info || info === 0 ? info : '' }}</text>
    </view>

    <!-- #ifndef APP-NVUE -->
    <view :class="[
        'lb-tabbar-item__text',
        isActive ? 'lb-tabbar-item__text--active' : ''
      ]"
      :style="{
        fontSize: tabbarInfo.textSize,
        lineHeight: tabbarInfo.textHeight,
        color: isActive
          ? tabbarInfo.activeTextColor || tabbarInfo.activeColor
          : tabbarInfo.inactiveTextColor || tabbarInfo.inactiveColor
      }">
      <slot></slot>
    </view>
    <!-- #endif -->

    <!-- #ifdef APP-NVUE -->
    <text :class="[
        'lb-tabbar-item__text',
        isActive ? 'lb-tabbar-item__text--active' : ''
      ]"
      :style="{
        fontSize: tabbarInfo.textSize,
        lineHeight: tabbarInfo.textHeight,
        color: isActive
          ? tabbarInfo.activeTextColor || tabbarInfo.activeColor
          : tabbarInfo.inactiveTextColor || tabbarInfo.inactiveColor
      }">{{ text || '' }}</text>
    <!-- #endif -->
  </view>
</template>

<script>
import { getPx } from './utils'
export default {
  props: {
    name: [String, Number],
    text: [String, Number],
    icon: String,
    iconPrefix: String,
    dot: Boolean,
    info: [String, Number],
    raisede: Boolean
  },
  inject: ['tabbar'],
  data () {
    return {
      height: '',
      tabbarInfo: {}
    }
  },
  computed: {
    isImage () {
      return this.icon && this.icon.indexOf('/') > -1
    },
    isActive () {
      return this.tabbarInfo.value === this.name
    },
    isAnimate () {
      return (
        this.isActive &&
        this.tabbarInfo.animate &&
        !(this.raisede && this.tabbarInfo.closeAnimateOnRaisede)
      )
    },
    ty () {
      const height = getPx(this.tabbarInfo.height)
      const textHeight = getPx(this.tabbarInfo.textHeight)
      return height / 2 - textHeight / 2
    },
    iconCode () {
      let code = ''
			// #ifdef APP-NVUE
			code = this.icon
			// #endif
      return code
    }
  },
  created () {
    this.tabbarInfo = this.tabbar._props
    this.tabbar.tabbarItems.push(this._props)
  },
  methods: {
    handleTap () {
      this.tabbar.active = this.name
      this.$emit('click', this._props)
    }
  },
  watch: {
    active: {
      handler (newVal) {
        if (newVal === this.name) {
          this.tabbar.activeItem = this._props
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
@import "./style.scss";
/* #ifndef APP-NVUE */
@import "./animate.scss";
/* #endif */
</style>
