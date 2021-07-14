<template>
  <div class="login-container">
    <el-form
      status-icon
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page">
      <h3 class="title">系统登录</h3>
      <el-form-item  >
        <el-input type="text"

                  placeholder="用户名"
                  v-model="username"
        ></el-input>
      </el-form-item>
      <el-form-item >
        <el-input type="password"
                  auto-complete="off"
                  placeholder="密码"
                  v-model="password"
        ></el-input>
      </el-form-item>
      <el-checkbox
        class="rememberme"
      >记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:40%;"
                   @click.prevent="handleLogin" >登录</el-button>
        <el-button type="primary" @click="handleRegister" style="width:40%;"
        >注册</el-button>
      </el-form-item>
    </el-form>
    <!--    <router-view></router-view>-->
  </div>
</template>

<script>
export  default {
  name:"Login",
  data(){
    return{
     username:'',
      password:'',
    }
  },
  methods:{
    handleLogin:function (){
      if(this.username===""){
        alert('用户名不能为空');
      }
      if(this.password===""){
        alert('密码不能为空')
      }
      if(this.username!=''&&this.password!=''){
        //跳转首页
        //提交servlet url 交互
        this.$axios.post("userServlet",{
          username:this.username,
          password:this.password,

        }).then(response=>{
          console.log(response);

        }).catch(error=>{
          console.log(error)
        })
        this.$router.replace("/Admin");
        // this.$router.replace("/Home");
      }
    }
  }
}

</script>

<style scoped>

</style>
