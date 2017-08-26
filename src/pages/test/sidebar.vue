<template>
  <div id="sidebar">
    <header><a href="#"></a></header>
    <el-ul></el-ul>
  </div>
</template>


<script>
  // import Vue from 'vue'
  export default {
    name: 'sidebar',
    components: {
      'el-ul': {template: '<div><span style="background:#ccc;display:block;width:100px;">ok</span><span>next ok</span></div>'}
    }
  }
  // Vue.component('el-ul', {
  //   template: '<span>hello my is vue component</span>'
  // })
</script>

<style>

</style>