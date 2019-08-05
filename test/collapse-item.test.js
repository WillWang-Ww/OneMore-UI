const expect = chai.expect;
 import Vue from 'vue'
 import CollapseItem from '../src/collapse-item'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 //BDD 行为测试驱动 mocha
 describe('CollapseItem', () => {
     it('存在.', () => {
         expect(CollapseItem).to.be.ok
     })
    //  it('可以设置title.', () => {
    //      const Constructor = Vue.extend(CollapseItem)
    //      const vm = new Constructor({
    //      propsData: {
    //         title:'标题1'
    //      }
    //      }).$mount()
    //      const divElement = vm.$el.querySelector('.title')
    //      expect(divElement.getAttribute('selected')).to.equal('["1"]')
    //      vm.$destroy()
    //  })
})