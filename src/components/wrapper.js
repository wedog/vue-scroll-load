import './scroll.css'

export default{
    name: "VueScrollWrapper",
    data(){
        return {
            upLoading: false,
            upNoMore: false
        }
    },
    props: {
        offsetTop: {
            type: String,
            required: false
        },
        pageIndex: {
            type: Number,
            default: 1,
            required: true,
            validator (value) {
                return value > 0
            }
        },
        pageSize: {
            type: Number,
            default: 20,
            required: true,
            validator (value) {
                return value > 0
            }
        },
        dataTotal: {
            type: Number,
            default: 0,
            required: true,
            validator (value) {
                return value >= 0
            }
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
        moreData(){
            let hasMore = false;
            let realPageSize = Math.ceil(this.dataTotal/this.pageSize);
            if(realPageSize > this.pageIndex){
                let $pageIndex = this.pageIndex;
                $pageIndex++;
                this.$emit('nextPage:pageIndex', $pageIndex);
                hasMore = true;
            }
            return hasMore;
        },
        scrollEvent(){
            let domRect = this.getDomRect();
            let scrollTop = this.getScrollTop();
            let scrollHeight = this.getScrollHeight();
            if(domRect && (domRect.height + scrollTop) === scrollHeight && !this.moreData()){
                this.upNoMore = true;
                this.upLoading = false;
            }else{
                this.upNoMore = false;
                this.upLoading = true;
            }
        }
    },
    render(h){
        let children = [ this.$slots.default];
        children.push(h('div', {
            class: {
                'up-wrapper': true,
                'up-loading': this.upLoading,
                'up-noMore': this.upNoMore
            }
        }, [ h('div', this.upNoMore?'我是有底线的':'加载中') ]));
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
        }, children)
    }
}