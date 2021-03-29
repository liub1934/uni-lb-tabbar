<template>
  <view :class="[
      'lb-tabbar-item',
      'animate__animated',
      isActive ? 'lb-tabbar-item--active' : ''
    ]"
    :style="{
      paddingTop: paddingBT + raisedeHeight + 'px',
      paddingBottom: paddingBT + 'px'
    }"
    @tap="handleTap">
    <view :class="[
        'lb-tabbar-item__icon',
        `lb-tabbar-item__icon--${raisede ? 'raisede' : 'default'}`,
        isAnimate ? `animate__animated animate__${tabbarInfo.animate}` : '',
      ]"
      :style="{
        height: tabbarInfo.iconSize,
        lineHeight: tabbarInfo.iconSize,
        transform: raisede ? `translateY(-${ty}px) scale(${tabbarInfo.raisedeScale})` : ''
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
          width: tabbarInfo.iconSize,
          height: tabbarInfo.iconSize,
          lineHeight: tabbarInfo.iconSize,
          fontSize: tabbarInfo.iconSize,
          color: isActive ? tabbarInfo.activeColor : tabbarInfo.inactiveColor
        }">{{ iconCode }}</text>
      <text v-if="dot || hasInfo"
        :class="[
          dot && !hasInfo ? 'lb-tabbar-item__dot' : '',
          hasInfo ? 'lb-tabbar-item__dot--info' : '',
          'lb-tabbar-item__dot--style'
        ]"
        :style="{
          backgroundColor: tabbarInfo.dotColor
        }">{{ hasInfo ? info : '' }}</text>
    </view>

    <!-- #ifndef APP-NVUE -->
    <view :class="[
        'lb-tabbar-item__text',
        isActive ? 'lb-tabbar-item__text--active' : ''
      ]"
      :style="{
        fontSize: tabbarInfo.textSize,
        lineHeight: tabbarInfo.textSize,
        maxHeight: tabbarInfo.textSize,
        marginTop: tabbarInfo.textTop,
        color: isActive
          ? tabbarInfo.activeTextColor || tabbarInfo.activeColor
          : tabbarInfo.inactiveTextColor || tabbarInfo.inactiveColor
      }">
      <slot></slot>
      <view v-if="raisede"
        class="lb-tabbar-item__text--block"
        :style="{
          height: tabbarInfo.textSize
        }">
      </view>
    </view>
    <!-- #endif -->

    <!-- #ifdef APP-NVUE -->
    <text v-if="text || raisede"
      :class="[
        'lb-tabbar-item__text',
        isActive ? 'lb-tabbar-item__text--active' : ''
      ]"
      :style="{
        fontSize: tabbarInfo.textSize,
        height: tabbarInfo.textSize,
        lineHeight: tabbarInfo.textSize,
        marginTop: tabbarInfo.textTop,
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
    height () {
      return getPx(this.tabbarInfo.height)
    },
    iconHeight () {
      return getPx(this.tabbarInfo.iconSize)
    },
    textSize () {
      return getPx(this.tabbarInfo.textSize)
    },
    textTop () {
      return getPx(this.tabbarInfo.textTop)
    },
    ty () {
      return this.height / 2 - (this.textSize + this.textTop) / 2
    },
    iconCode () {
      let code = ''
      // #ifdef APP-NVUE
      code = this.icon
      // #endif
      return code
    },
    hasInfo () {
      return this.info || this.info === 0
    },
    paddingBT () {
      return (this.height - this.iconHeight - this.textSize - this.textTop) / 2
    },
    hasRaisede () {
      return this.tabbar.hasRaisede
    },
    raisedeHeight () {
      return this.hasRaisede ? this.iconHeight * this.tabbarInfo.raisedeScale / 2 : 0 // 凸起高度
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
  }
}
</script>

<style lang="scss">
@import "./style.scss";
/* #ifndef APP-NVUE */
@import "./animate.scss";
/* #endif */
</style>
