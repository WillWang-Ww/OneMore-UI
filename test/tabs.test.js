const expect = chai.expect;
import Vue from 'vue'
import Tab from '../src/tab'
import TabHead from '../src/tab-head'
import TabItem from '../src/tab-item'
import TabBody from '../src/tab-body'
import TabPane from '../src/tab-pane'

Vue.config.productionTip = false
Vue.config.devtools = false

//BDD 行为测试驱动 mocha
//Tab
describe('Tab', () => {
    it('存在.', () => {
        expect(Tab).to.be.ok
    })
})
//TabHead
describe('TabHead', () => {
    it('存在.', () => {
        expect(TabHead).to.be.ok
    })
})
//TabItem
describe('TabItem', () => {
    it('存在.', () => {
        expect(TabItem).to.be.ok
    })
})
//TabBody
describe('TabBody', () => {
    it('存在.', () => {
        expect(TabBody).to.be.ok
    })
})
//TabPane
describe('TabPane', () => {
    it('存在.', () => {
        expect(TabPane).to.be.ok
    })
})