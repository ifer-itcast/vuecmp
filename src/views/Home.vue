<template>
  <div class="home">
    <!-- type -->
    <div class="row">
      <el-button>按钮</el-button>
      <el-button type="primary">按钮</el-button>
      <el-button type="success">按钮</el-button>
      <el-button type="info">按钮</el-button>
      <el-button type="warning">按钮</el-button>
      <el-button type="danger">按钮</el-button>
    </div>
    <!-- plain -->
    <div class="row">
      <el-button plain>按钮</el-button>
      <el-button plain type="primary">按钮</el-button>
      <el-button plain type="success">按钮</el-button>
      <el-button plain type="info">按钮</el-button>
      <el-button plain type="warning">按钮</el-button>
      <el-button plain type="danger">按钮</el-button>
    </div>
    <!-- round -->
    <div class="row">
      <el-button plain round>按钮</el-button>
      <el-button plain round type="primary">按钮</el-button>
      <el-button plain round type="success">按钮</el-button>
      <el-button plain round type="info">按钮</el-button>
      <el-button plain round type="warning" icon="el-icon-edit">按钮</el-button>
      <el-button plain round type="danger">按钮</el-button>
    </div>
    <!-- circle -->
    <div class="row">
      <el-button circle>牛</el-button>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button loading type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </div>
    <!-- disabled -->
    <div class="row">
      <el-button disabled>按钮</el-button>
      <el-button disabled type="primary">按钮</el-button>
      <el-button disabled type="success">按钮</el-button>
      <el-button disabled type="info">按钮</el-button>
      <el-button disabled type="warning">按钮</el-button>
      <el-button disabled type="danger">按钮</el-button>
    </div>
    <!-- loading -->
    <div class="row">
      <el-button loading>按钮</el-button>
      <el-button loading type="primary">按钮</el-button>
      <el-button loading type="success">按钮</el-button>
      <el-button loading type="info">按钮</el-button>
      <el-button loading type="warning">按钮</el-button>
      <el-button loading type="danger">按钮</el-button>
    </div>
    <!-- size -->
    <div class="row">
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </div>
    <!-- click -->
    <div class="row">
      <el-button @click="handleClick">Click</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    handleClick(e) {
      console.log('Hello World', e)
    }
  }
}
</script>
<style lang="less">
.row {
  margin-bottom: 20px;
}
</style>
