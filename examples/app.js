import Vue from 'vue'
import VueScrollLoad from 'vue-scroll-load'

Vue.use(VueScrollLoad)

new Vue({
    name: 'root',
    template: '<div id="app"><h1>hello world!</h1><vue-scroll-wrapper /></div>'
}).$mount("#app");