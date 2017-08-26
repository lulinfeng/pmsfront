import Vue from 'vue'
import sidebar from './sidebar'
import vheader from './header'

/* eslint-disable no-new */
new Vue({
  el: '#sidebar',
  template: '<sidebar/>',
  components: {sidebar}
})

new Vue({
  el: '#header',
  template: '<vheader/>',
  components: {vheader}
})
