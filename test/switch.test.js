const expect = chai.expect;
 import Vue from 'vue'
 import Switch from '../src/switch'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 //BDD 行为测试驱动 mocha
 describe('Switch', () => {
    it('存在.', () => {
         expect(Switch).to.be.ok
    })
    describe('props',function(){
        it('接收 disabled', () => {
            const Constructor = Vue.extend(Switch)
            const vm = new Constructor({
            propsData: {
                disabled: true
            }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.getAttribute('disabled')).to.equal('disabled')
            vm.$destroy()
        })
        // it('点击 Switch 触发 click 事件', () => {
        //     const Constructor = Vue.extend(Switch)
        //     const vm = new Constructor({
        //     }).$mount()
        //     vm.$el.click()
        //     const useElement = vm.$el.querySelector('.OMSwitchButton')
        //     console.log(useElement)
        //     expect(useElement.classList.contains('unChecked')).to.eq(true)
        // })
    })
 })