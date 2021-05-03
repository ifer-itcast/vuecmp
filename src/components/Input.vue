<template>
  <div
    :class="[
      'el-input',
      {
        'is-disabled': disabled,
        'el-input--suffix': showSuffix
      }
    ]"
  >
    <input
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      class="el-input__inner"
      @input="handleInput"
    />
    <span class="el-input__suffix" v-if="showSuffix">
      <span class="el-input__suffix-inner">
        <i
          class="el-input__icon el-icon-circle-close el-input__clear"
          v-if="clearable"
          @click="clear"
        ></i>
        <i class="el-input__icon el-icon-view el-input__clear" v-if="showPassword" @click="handlePassword"></i>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ElInput',
  data() {
    return {
      // 是否显示密码
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    clear() {
      this.$emit('input', '')
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="less" scoped></style>
