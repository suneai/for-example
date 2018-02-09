// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/**--------引入自定义ajax---------- */
import potajax from "./assets/js/ajax.js";
Vue.prototype.$potajax = potajax;

//引入vuex
// import store from './store'

//引入mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI);

//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  // store,
  data: {
    eventHub: new Vue()
  }
})
