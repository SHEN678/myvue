<template>
  <div>
    登录
    <div class="LoginDiv">
    <el-form  label-width="80px" >
      <el-form-item label="名称">
        <el-input v-model="uName"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input ></el-input>
      </el-form-item>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-form>
    </div>
  </div>
</template>

<script>
export  default {
  name:"Login",
  data(){
    return{
      uName:"",
    }
  }
}

</script>

<style scoped>

</style>
