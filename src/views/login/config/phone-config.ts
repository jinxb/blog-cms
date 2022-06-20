// 编写规则
export const rules = {
  num: [
    { required: true, message: '必须输入手机号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{11}$/,
      message: '手机号。。。。',
      trigger: 'blur'
    }
  ],
  code: [{ required: true, message: '必须输入验证码', trigger: 'blur' }]
}
