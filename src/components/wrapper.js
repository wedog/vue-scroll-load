
export default{
    name: "VueScrollWrapper",
    render(h){
        return h('div', {}, this.$slots.default)
    }
}