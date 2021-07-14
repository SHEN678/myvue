// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 import './assets/css/Login.css'  //导入css
Vue.config.productionTip = true
Vue.use(ElementUI);
 // 全局属性设置
Vue.prototype.$axios =axios;
axios.defaults.baseURL = 'api'
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  router: router,
  render:h=>h(App)   //ES6的语法  渲染app vue这个函数
}).$mount("#app")


