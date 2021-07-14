<template>
  <div>


  <NavMenu :msg="message" type="waaw" @getSubMsg="getMsg"></NavMenu>


    <button @click="clickMe">点我点我</button><br>
    {{message}}
<!--    绑定路由-->
    <router-link to="/Login">登录</router-link>
    <router-link to="/Register/123">注册</router-link>
<!--    路由视图-->
    <router-view></router-view>
  </div>
</template>
<script>
import NavMenu from "./NavMenu";

export  default {

  name:"Index",
  data(){
    return{
      message:"AAAAAAA"
    }
  },

  methods:{
   clickMe:function (){
     this.message="变化了"
   },
   getMsg:function (data){
     console.log(data);
     this.message=data;
   }
  },
  components:{NavMenu:NavMenu},
  beforeCreate() {
    console.log("beforeCreate-------")
  },
  created() {
 console.log("created-------")
  },
  beforeMount() {
    console.log("beforeMount-------------")
  },
  mounted() {
    console.log("mounted---------")
  },
  beforeUpdate() {
    console.log("beforeUpdate-------")
  },
  updated() {
    console.log("updated-------")
  },
  beforeDestroy() {
    console.log("beforeDestroy-------")
  },
  destroyed() {
    console.log("destroyed-------")
  },
}

</script>

<style scoped>

</style>
