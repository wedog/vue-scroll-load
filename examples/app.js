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
        programList: [],
        pageIndex: 1,
        pageSize: 20,
        dataTotal: 0
    },
    methods: {
        getProgramList(pageIndex){
            let vm = this;
            vm.pageIndex = pageIndex || vm.pageIndex;
            setTimeout(function(){
                vm.programList = vm.programList.concat(programs.slice(vm.pageIndex-1, vm.pageSize));
                vm.dataTotal = programs.length;
            }, 3000)
        }
    },
    mounted(){
        this.getProgramList();
    },
    template: '<div id="app">' +
        '<h2 class="title">Vue-Scroll-Load</h2>' +
        '<vue-scroll-wrapper :offset-top="offsetTop" :pageIndex="pageIndex" :pageSize="pageSize" :dataTotal="dataTotal" @nextPage:pageIndex="getProgramList">' +
            '<table>' +
                '<thead><tr><th>语言</th><th>年限</th></tr></thead>' +
                '<tbody><tr v-for="program in programList"><td>{{program.name}}</td><td>{{program.year}}</td></tr></tbody>' +
            '</table>' +
        '</vue-scroll-wrapper>' +
    '</div>'
}).$mount("#app");