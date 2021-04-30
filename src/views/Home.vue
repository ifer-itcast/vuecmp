<template>
  <div class="home">
    <el-button @click="handleClick">显示/隐藏</el-button>
    <el-dialog width="40%" :visible.sync="visible">
      <!-- 标题 -->
      <template v-slot:title>
        <h2>
          标题
        </h2>
      </template>
      <!-- 内容 -->
      <span>这是内容</span>
      <!-- 底部 -->
      <template v-slot:footer>
        <el-button @click="visible=false">取消</el-button>
        <el-button type="primary" @click="visible=false">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handleClick() {
      this.visible = !this.visible
    },
    close(visible) {
      this.visible = visible
    }
  }
}
</script>
