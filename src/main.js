import Vue from 'vue'
import App from './App.vue'

//axios请求引入
import axios from 'axios'
axios.defaults.baseURL = "http://www.kangliuyong.com:10002"//配置请求基础路径

//cookies引入
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)

//cookit储存引入
import cookies from './utils/cookies'
Vue.prototype.cookies = cookies

//banner轮播引入
import banner from './utils/banner'
Vue.prototype.banner = banner

//css文件引入
import "./assets/css/allPage.css"
import "../public/font/iconfont.css";
import "../public/item/iconfont.css";

//element-ui引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

//路由
import router from './router'

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  ElementUI.Loading.service({ fullscreen: true, background: 'rgba(0, 0, 0, 0.3)', text: 'Loading', spinner: 'el-icon-loading' })
  return config;
}, (error) => {
  ElementUI.Loading.service({ fullscreen: true, background: 'rgba(0, 0, 0, 0.3)', text: 'Loading', spinner: 'el-icon-loading' })
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  ElementUI.Loading.service({ fullscreen: true, background: 'rgba(0, 0, 0, 0.3)', text: 'Loading', spinner: 'el-icon-loading' }).close()
  return response;
}, (error) => {
  ElementUI.Loading.service({ fullscreen: true, background: 'rgba(0, 0, 0, 0.3)', text: 'Loading', spinner: 'el-icon-loading' }).close()
  return Promise.reject(error);
});

//去掉控制台中的消息提示
Vue.config.productionTip = false

//$mount('#app'):绑定vue模板
new Vue({
  render: h => h(App),
  router,
  beforeCreate() {// 1.创建公共组件，必须包含$on绑定事件的方法 和 触发事件的方法$emit
    Vue.prototype.$bus = this// this:所代表就是vue实例对象 组件
  }
}).$mount('#app')
