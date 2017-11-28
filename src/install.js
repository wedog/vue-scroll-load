import Wrapper from './components/wrapper'

export function install(Vue, options){
    let vm = Vue
    if (install.installed){
        return
    }
    install.installed = true
    Object.defineProperty(vm.prototype, '$VueScrollLoad', {
        get(){
           return ;
        }
    })
    vm.component('VueScrollWrapper', Wrapper);
}