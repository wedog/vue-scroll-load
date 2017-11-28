import './scroll.css'

export default{
    name: "VueScrollWrapper",
    props: {
        offsetTop: {
            type: String,
            required: false
        }
    },
    render(h){
        return h('div', {
            class: {
                'vue-scroll-wrapper': true
            },
            style: {
                top: this.offsetTop || '3rem'
            }
        }, this.$slots.default)
    }
}