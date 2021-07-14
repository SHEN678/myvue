<template>
  <div>
    菜单导航
    {{msg}},{{type}}
<!--    //1.在子组件中绑定一个事件-->
    <button @click="ReParentMsg">子传父组件</button>
  </div>
</template>
<script>
export  default {
  name:"NavMenu",
  props:["msg","type"],
  data(){
    return{
      count:1
    }
  },
  methods :{
    ReParentMsg:function (){
      this.$emit("getSubMsg",this.count++);
    }
  }
}

</script>

<style scoped>

</style>
