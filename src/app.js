import Vue from 'vue'
import Button from './button'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import Toast from './toast'
import Plugin from './plugin'

Vue.component('o-button',Button)
Vue.component('o-collapse',Collapse)
Vue.component('o-collapse-item',CollapseItem)
Vue.component('o-toast',Toast)

Vue.use(Plugin)

new Vue({
    el:'#app',
    data:{
        enableHTML:true
    },
    methods:{
        showToast(){
            this.$toast('我出现了惊喜吗',{
                closeButton: {
                    text: '关闭',
                    callback () {
                        console.log('click')
                    }
                },
                enableHTML: true,
                position: 'top',
                autoClose: 3,
            })
        }
    },
    created(){
        
    }
})