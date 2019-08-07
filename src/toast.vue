<template>
    <div class="toast">
        <div class="message">
            <slot></slot>
        </div>
        <div id="line"></div>
        <span v-if="closeButton" class="close" @click='onClickClose'>{{closeButton.text}}</span>
    </div>    
</template>
<script>
export default {
    name: 'OMtoast',
    props: {
        autoClose: {
            type: Boolean,
            default: true,
        },
        reaminTime: {
            type: Number,
            default: 100,
        },
        closeButton: {
            type: Object,
            default(){
                //props default值是对象（引用类型），则需要写成函数
                return  {
                    text: '关闭',
                    callback: (toast) =>{ toast.close() }
                }
            }
        }
    },
    mounted(){
        if(this.autoClose){
            setTimeout(() => {
                this.close()
            }, this.reaminTime * 1000)
        }
    },
    methods:{
        close(){
            this.$el.remove()
            this.$destroy()
        },
        onClickClose(){
            this.closeButton.callback()
            this.close()
        }
    }
}
</script>
<style>
    .toast{
        width: 100%;
        padding: 8px 12px;
        color: white;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color:rgba(0,0,0,0.75);
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        line-height: 1.8;
        font-size: 14px;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        word-break: break-all;
    }
    .message{
        margin: 0 auto;
        text-align: center;
    }
    #line{
        border-left:1px solid white;
        margin:0 12px;
    }
    .close{
        word-break:keep-all;
        text-align: center;
        vertical-align: middle;
        margin: auto;
    }
</style>
