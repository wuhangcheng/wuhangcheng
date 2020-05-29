<template>
  <div class="login">
    <div class="login-wrap">
     
      <el-form ref="ruleForm" :model="ruleForm">
        <el-form-item prop="name" :rules="{required:true,message:'请输入用户名称',trigger:'blur'}">
          <el-input
            v-model="ruleForm.name"
            size="medium"
            placeholder="请输入用户名称"
            maxlength="40"
            prefix-icon="el-icon-user"
            clearable
          />
        </el-form-item>
        <el-form-item prop="password" :rules="{required:true,message:'请输入密码',trigger:'blur'}">
          <el-input
            v-model="ruleForm.password"
            size="medium"
            placeholder="请输入密码"
            show-password
            maxlength="30"
            clearable
            prefix-icon="el-icon-lock"
          />
        </el-form-item>
        
        <el-form-item>
          <el-button size="medium" class="submit-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
         ruleForm: {
          name: '',
          password: ''
        },
    };
  },
  methods: {
     submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            this.$store.commit('login',this.ruleForm);
            this.$router.push('./');
          } else {
            /* console.log('error submit!!'); */
            return false;
          }
        });
      }
    
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-center {
  width: 400px;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
  
}
</style>