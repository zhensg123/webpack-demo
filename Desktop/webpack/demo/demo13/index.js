import vuetempalte from './index.vue'
import Vue from 'vue'
var Profile = Vue.extend(vuetempalte)
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#app')