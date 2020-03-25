<template>
  <div id="login">
    <div class="login_box">
      <h2>后台管理系统</h2>
      <el-form :model="form" :rules="rules" ref="form" label-position="left" class="demo-ruleForm">
        <el-form-item prop="number">
          <el-input
            v-model="form.number"
            placeholder="请输入管理员账号"
            prefix-icon="el-icon-user"
            clearable
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入管理员密码"
            prefix-icon="el-icon-lock"
            show-password
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">登录</el-button>
        </el-form-item>
      </el-form>
      <p>账号:123 密码:123</p>
    </div>
  </div>
</template>

<style scoped>
#login {
  width: 100%;
  height: 100vh;
}
.login_box {
  width: 470px;
  height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-form {
  margin: 20px;
}
h2 {
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        number: "",
        password: ""
      },
      rules: {
        number: [
          { required: true, message: "请输入管理员账号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入管理员密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      var _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (_this.form.number == 123 && _this.form.password == 123) {
            alert("登录成功！！！");
            _this.$router.push({ path: "/main" });
          } else {
            alert("登录失败！！！");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>