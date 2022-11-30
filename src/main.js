import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'

Vue.config.productionTip = false
// 解决移动端300毫秒点击延迟问题
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
