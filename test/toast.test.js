const expect = chai.expect;
 import Vue from 'vue'
 import Toast from '../src/toast'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 //BDD 行为测试驱动 mocha
 describe('Toast', () => {
    it('存在.', () => {
         expect(Toast).to.be.ok
    })

    describe('props',function(){
        it('接收 autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div)
            vm.$on('close', ()=>{
                 expect(document.body.contains(vm.$el)).to.eq(false)
                 done()
            })
        })
        it('接收 closeButton', () => {
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭',
                        callback,
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接收 enableHTML', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHTML: true
                }
            })
            vm.$slots.default = ['<strong id="test">Hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接收 position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount()
            let toast = vm.$el.querySelector('.toast')
            expect(toast.classList.contains('position-bottom')).to.eq(true)
        })
    })
 })