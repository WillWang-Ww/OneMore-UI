import Toast from './toast'

let currentToast

export default{
    install (Vue,options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            console.log('开始创建toast')
            console.log(currentToast)
            if(currentToast) {
                currentToast.close()
                console.log('关闭啦')
            }
            currentToast = creatToast({Vue,message,propsData: toastOptions})
        }
    }
}

function creatToast({Vue,message,propsData}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast   
}