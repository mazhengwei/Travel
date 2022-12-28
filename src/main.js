import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'

Vue.config.productionTip = false
// 解决移动端300毫秒点击事件延迟问题
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
