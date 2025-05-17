import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import store from '@/store';
import api from '@/config/api.js'


let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);

Vue.use(uView)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
// 引入请求封装，将app参数传递到配置中
require('./config/request.js')(app)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif