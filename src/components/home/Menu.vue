<template>
<div>
  <el-menu
    router :default-active="this.$route.path"
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>用户管理</span>
      </template>

      <el-submenu index="1-4">
        <template slot="title">用户列表</template>
        <el-menu-item index="1-4-1">用户列表</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">系统管理</span>
      <template slot="title">系统</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-setting"></i>
      <span slot="title">导航五</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<!--<el-pagination-->
<!--  @size-change="handleSizeChange"-->
<!--  @current-change="handleCurrentChange"-->
<!--  page-sizes="[5, 10,20]"-->
<!--  page-size=" pageSize"-->
<!--  layout=" sizes, prev, pager, next, jumper, total"-->
<!--  :total="tableData.length">-->
<!--   </el-pagination>-->

<!--<script>-->

<!--export default {-->
<!--  name: "Menu.vue",-->
<!--  methods: {-->
<!--    handleOpen(key, keyPath) {-->
<!--      console.log(key, keyPath);-->
<!--    },-->
<!--    handleClose(key, keyPath) {-->
<!--      console.log(key, keyPath);-->
<!--    },-->

<!--    handleCurrentChange: function (cPage) {-->
<!--      console.log("EX3E 5T 59" + cPage),-->
<!--        this.currPage = cPage-->
<!--    },-->
<!--    handleSizeChange: function (val) {-->
<!--      console.log("-__ " + val),-->
<!--        this.pageSize = val,-->
<!--    }-->
<!--  }-->
<!--:data="this. tableData slice((this currPage-1)*this pageSize,this. currPage *this pageSize)"-->
<!--}-->
<!--</script>-->

<style scoped>

</style>
