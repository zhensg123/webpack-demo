// 引入组件
import lyLink from './src';

// 提供 install 安装方法，供按需引入
lyLink.install = function (Vue) {
    // 注册组件
    Vue.component(lyLink.name, lyLink)
}
// 暴露组件
export default lyLink