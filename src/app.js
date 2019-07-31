import Vue from 'vue'
import Button from './button'

Vue.component('o-button',Button)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        check1:false,
    }
})