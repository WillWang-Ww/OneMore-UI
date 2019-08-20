import Vue from 'vue'
import Button from './button'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import Toast from './toast'
import ToastPlugin from './toastPlugin'
import Switch from './switch'
import Input from './input.vue'

Vue.component('o-button',Button)
Vue.component('o-collapse',Collapse)
Vue.component('o-collapse-item',CollapseItem)
Vue.component('o-toast',Toast)
Vue.component('o-switch',Switch)
Vue.component('o-input',Input)

Vue.use(ToastPlugin)

new Vue({
    el:'#app',
    data:{

    },
    methods:{
        showMessageBox(){
            console.log('想要show一下')

        }
    },
})