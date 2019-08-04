import Vue from 'vue'
import Button from './button'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'

Vue.component('o-button',Button)
Vue.component('o-collapse',Collapse)
Vue.component('o-collapse-item',CollapseItem)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        check1:false,
    }
})