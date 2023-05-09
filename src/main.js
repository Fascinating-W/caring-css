/*
 * @Author: Wanko
 * @Date: 2022-03-25 21:23:51
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-09 16:05:41
 * @Description:
 */
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// import './caring-css/dist/index.css'
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
