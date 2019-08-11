const expect = chai.expect;
 import Vue from 'vue'
 import Button from '../src/button'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 //BDD 行为测试驱动 mocha
 describe('Button', () => {
     it('存在.', () => {
         expect(Button).to.be.ok
     })
     it('可以设置icon.', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'setting'
         }
         }).$mount()
         const useElement = vm.$el.querySelector('use')
         expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
         vm.$destroy()
     })
     it('测试Button中Icon与Loading的切换.', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'setting',
             loading: true
         }
         }).$mount()
         const useElements = vm.$el.querySelectorAll('use')
         expect(useElements.length).to.equal(1)
         expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
         vm.$destroy()
     })
     it('测试Button中Icon与Check的切换.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'setting',
            check: true
        }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-check')
        vm.$destroy()
    })
     it('点击 button 触发 click 事件', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         }).$mount()
        //sinon库的fake函数，可以知道自己被调用了
         const callback = sinon.fake();
         vm.$on('click', callback)
         vm.$el.click()
         expect(callback).to.have.been.called
     })
 })