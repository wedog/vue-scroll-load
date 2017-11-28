import './scroll.css'

export default{
    name: "VueScrollWrapper",
    data(){
        return {
            upWrapper: false
        }
    },
    props: {
        offsetTop: {
            type: String,
            required: false
        }
    },
    methods: {
        getDomRect(){
            return this.$el.getBoundingClientRect();
        },
        getScrollHeight(){
            return this.$el.scrollHeight;
        },
        getScrollTop(){
          return this.$el.scrollTop;
        },
        scrollEvent(){
            let domRect = this.getDomRect();
            let scrollTop = this.getScrollTop();
            let scrollHeight = this.getScrollHeight();
            console.log(domRect)
            if(domRect && (domRect.height + scrollTop) === scrollHeight){
                this.upWrapper = true;
            }else{
                this.upWrapper = false;
            }
        }
    },
    render(h){
        return h('div', {
            on: {
                scroll: this.scrollEvent
            },
            class: {
                'vue-scroll-wrapper': true
            },
            style: {
                top: this.offsetTop || '3rem'
            }
        }, [ this.$slots.default, h('div', {
            class: {
                'up-wrapper': true,
                'up-show': this.upWrapper
            }
        },[ h('div', '我是有底线的') ]) ])
    }
}