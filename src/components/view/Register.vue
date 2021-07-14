<template>
  <div>
    注册 {{getParam}}
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
  name:"Register",
  data(){
    return{
      uName:"",
    }
  },
  computed:{//计算
    getParam:function(){
      return this.$route.params.id;
    }
  }
}

</script>

<style scoped>

</style>
