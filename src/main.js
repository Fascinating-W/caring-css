/*
 * @Author: Wanko
 * @Date: 2023-05-09 17:34:51
 * @LastEditors: Wanko
 * @LastEditTime: 2024-03-01 19:08:23
 * @Description: 
 */
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import './caring-css';

const app = new Vue({
  ...App
})
app.$mount()
