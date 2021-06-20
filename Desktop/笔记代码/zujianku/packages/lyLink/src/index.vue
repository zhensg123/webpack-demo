<template>
    <!-- 用传过来 href 进行跳转 --> <!-- 用传过来的 type 修改颜色 --> 
    <a :href="href || undefined" :class="[`ly-link-${type}`]" >
        <!-- 使用默认插槽来填充文本 -->
        <slot/>
    </a>
</template>

<script>
    export default {
        // 等下 index.js 里面要用到
        name:"lyLink",
        props: {
            // 限制类型
            href: String,
            type: {
                type: String,
                default: 'default'
            }
        }
    }
</script>

<style lang="scss" scoped>
    // 定义链接字体颜色
    .ly-link-default {
        color: #606266;
    }
    .ly-link-primary {
        color: #409eff;
    }
</style>