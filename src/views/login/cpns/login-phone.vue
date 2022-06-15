<template>
  <div>
    <el-form lable-width="60px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="verifyy-code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })

    const LoginAction = () => {
      console.log('手机号登录')
    }
    return {
      phone,
      rules,
      LoginAction
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}
</style>
