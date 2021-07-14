<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"></div>
        <Menu></Menu>
      </el-col>
      <el-col :span="18"><div class="grid-content bg-purple"></div></el-col>

      <router-view></router-view>

    </el-row>
  </div>
</template>
<script>
import Menu from "./Menu";
export  default {
  name:"",
  components:{Menu:Menu}
}

</script>

<style scoped>
indexdiv{
  width: 90%;
}
.el-row {
  margin-bottom: 20px;
   &:last-child {
  margin-bottom: 0;
}
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>
