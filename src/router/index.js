import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//  import Login from "../components/view/Login";
// import Register from "../components/view/Register"
// import Index from "../components/view/Index"
import Home from "../components/home/Home";
import Login from "../components/home/Login";
import Register from "../components/home/Register"
import Admin from "../components/home/Admin";
Vue.use(Router)

const routers=[
  // {path:"/Login",name:"Login",component:Login},
  // {path:"/Register/:id",name:"Register",component:Register},
  // {path:"/",name:"Index",component:Index},

  {path:"/",name:'Home',component: Home},

  {path:"/Home",name:'Home',component: Home},
  {path:"/Login",name:"Login",component: Login},
  {path:"/Register/:id",name:"Register",component: Register},
  {path:"/Admin",name:'Admin',component: Admin,
         children:[
           {path:'/UserM',name:"UserM",component:()=>import('../components/home/UserManage')}
         ]
  }
]
export default new Router({
     mode :"history",
       routes:routers,
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
})
