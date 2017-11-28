import Vue from 'vue'
import VueScrollLoad from 'vue-scroll-load'
import 'normalize.css'
import './app.css'
import programs from './programs.json'

Vue.use(VueScrollLoad)

new Vue({
    name: 'root',
    data: {
        offsetTop: '48px',
        programList: programs
    },
    template: '<div id="app">' +
        '<h2 class="title">Vue-Scroll-Load</h2>' +
        '<vue-scroll-wrapper :offset-top="offsetTop">' +
            '<table>' +
                '<thead><tr><th>语言</th><th>年限</th></tr></thead>' +
                '<tbody><tr v-for="program in programList"><td>{{program.name}}</td><td>{{program.year}}</td></tr></tbody>' +
            '</table>' +
        '</vue-scroll-wrapper>' +
    '</div>'
}).$mount("#app");