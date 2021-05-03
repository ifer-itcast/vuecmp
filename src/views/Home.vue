<template>
  <div class="home">
    <el-input
      placeholder="请输入用户名"
      type="password"
      name="username"
      v-model="username"
      clearable
      show-password
    ></el-input>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      username: ''
    }
  }
}
</script>
