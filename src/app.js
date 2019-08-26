import Vue from 'vue'
import Button from './button'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import Toast from './toast'
import ToastPlugin from './toastPlugin'
import Switch from './switch'
import Input from './input.vue'
import Tab from './tab.vue'
import TabHead from './tab-head.vue'
import TabItem from './tab-item.vue'
import TabBody from './tab-body.vue'
import TabPane from './tab-pane.vue'
import Popover from './popover'


Vue.component('o-button',Button)
Vue.component('o-collapse',Collapse)
Vue.component('o-collapse-item',CollapseItem)
Vue.component('o-toast',Toast)
Vue.component('o-switch',Switch)
Vue.component('o-input',Input)
Vue.component('o-tab',Tab)
Vue.component('o-tab-head',TabHead)
Vue.component('o-tab-item',TabItem)
Vue.component('o-tab-body',TabBody)
Vue.component('o-tab-pane',TabPane)
Vue.component('o-popover',Popover)

Vue.use(ToastPlugin)

new Vue({
    el:'#app',
    data:{
        selectedTab: '2'
    },
    methods:{
        inputChange(e){
            console.log(e)
        }
    },
})