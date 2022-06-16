import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
import { Button,MessageBox} from 'element-ui';
Vue.config.productionTip = false
// 三级联动 全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入mock模拟数据
import '@/mock/mockServer'

import store from './store'

import "swiper/css/swiper.css"
import * as API from '@/api'
import VueLazyload from 'vue-lazyload'
import jiazai from '@/assets/1.gif'
import myplugins from '@/plugins/myplugins'
import Validate from '@/plugins/validate'
Vue.use(myplugins)
//表单校验插件

//懒加载
Vue.use(VueLazyload,{
  loading:jiazai
})
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
    Vue.prototype.$API=API;
  },
  //注册路由
  router,
  //注册仓库
  store
}).$mount('#app')
