<template>
  <button
    class="el-button"
    :disabled="disabled || loading"
    :class="[
      `el-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading
      },
      size ? `el-button--${size}` : ''
    ]"
    @click="$emit('click', $event)"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <!-- //!内容为空不需要显示 span -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    icon: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped></style>
