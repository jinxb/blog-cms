<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logoCollapse.png" alt="logo" />
      <span class="title">智联工厂MES</span>
    </div>
    <el-menu default-active="2" class="el-menu-vertical">
      <template> </template>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useState } from 'vuex'
export default defineComponent({
  setup() {
    // const store = userStore()
    // const userMenus = store.state.login.userMenus
    return {}
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 29px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 200%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
  }
}
</style>
