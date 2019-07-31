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

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
//单元测试

//测试Button中添加固定Icon
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
    vm.$el.remove()
    vm.$destroy()
}
//测试Button中Icon与Loading的切换
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'setting',
            loading:true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
}
//测试Button中Icon与Check的切换
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'setting',
            check:true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-check')
    vm.$el.remove()
    vm.$destroy()
}
//使用chai spies 对click进行测试 mock
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'setting',
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){}) //设置一个空的间谍函数
    vm.$on('click',spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called() //期待click后间谍函数被调用
}