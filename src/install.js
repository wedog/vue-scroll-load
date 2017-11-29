import Wrapper from './components/wrapper'
import Core from './core'

export function install(Vue, options){
    let vm = Vue
    if (install.installed){
        return
    }
    install.installed = true
    Object.defineProperty(vm.prototype, '$VueScrollLoad', {
        get(){
           return new Core(this);
        }
    })
    vm.component('VueScrollWrapper', Wrapper);
}