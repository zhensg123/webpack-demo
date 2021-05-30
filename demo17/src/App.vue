<template>
  <div @click="jsalert">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
      data(){
          return {
              hello:'2323'
          }
      },
      methods:{
        jsalert(){
          alert(2323)
        }
      }
  }
</script>
<style lang="scss" scoped>
  @import 'index.scss';
</style>>
