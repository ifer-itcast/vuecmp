<template>
  <transition name="dialog-fade">
    <div
      class="el-dialog__wrapper"
      v-show="visible"
      @click.self="handleClose"
      style="background-color: rgba(0, 0, 0, .4); z-index: 1001;"
    >
      <div
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        class="el-dialog"
        :style="{ marginTop: top, width }"
      >
        <div class="el-dialog__header">
          <slot name="title">
            <span class="el-dialog__title">{{ title }}</span>
          </slot>
          <button
            type="button"
            aria-label="Close"
            class="el-dialog__headerbtn"
            @click="handleClose"
          >
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="el-dialog__body">
          <slot></slot>
        </div>
        <div class="el-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ElDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('close', false)
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="less" scoped>
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
