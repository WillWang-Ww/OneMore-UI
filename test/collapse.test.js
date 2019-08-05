const expect = chai.expect;
 import Vue from 'vue'
 import Collapse from '../src/collapse'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 //BDD 行为测试驱动 mocha
 describe('Collapse', () => {
     it('存在.', () => {
         expect(Collapse).to.be.ok
     })
    //  it('可以默认展开selected.', () => {
    //      const Constructor = Vue.extend(Collapse)
    //      const vm = new Constructor({
    //      propsData: {
    //         selected: ['1']
    //      }
    //      }).$mount()
    //      const divElement = vm.$el.querySelector('#collapse')
    //      console.log(divElement)
    //      expect(divElement.getAttribute('selected')).to.equal(['1'])
    //      vm.$destroy()
    //  })
})