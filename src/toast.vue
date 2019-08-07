<template>
    <div class="toast" ref="toast" :class="toastClass">
        <div v-if="!enableHTML" class="message">
            <slot></slot>
        </div>
        <div v-else class="message" v-html="$slots.default[0]"></div>
        <div id="line" ref="line"></div>
        <span v-if="closeButton" class="close" @click='onClickClose'>
            {{closeButton.text}}
        </span>
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
            default: 3,
        },
        closeButton: {
            type: Object,
            default(){
                //props default值是对象（引用类型），则需要写成函数
                return  {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        enableHTML: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top','middle','bottom'].indexOf(value) > -1;
            },
        }
    },
    computed:{
        toastClass(){
            return {
                [`position-${this.position}`]: true
            }
        }
    },
    mounted(){
        this.setReaminTime()
    },
    methods:{
        setReaminTime(){
            if(this.autoClose){
                setTimeout(() => {
                    this.close()
                }, this.reaminTime * 1000)
            }
        },
        close(){
            this.$el.remove()
            this.$destroy()
        },
        onClickClose(){
            if(this.closeButton && typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this)
            }
            this.close()
        }
    }
}
</script>
<style>
    .toast{
        width: 50%;
        padding: 0px 12px;
        color: white;
        position: fixed;
        left: 50%;
        background-color:rgba(0,0,0,0.75);
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        line-height: 1.8;
        font-size: 14px;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        word-break: break-all;
        min-height: 40px;
    }
    .message{
        margin:auto;
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
        margin: auto 0;
        flex-shrink: 0;
    }
    .position-top{
        top: 0;
        transform: translateX(-50%);
    }
    .position-middle{
        top:50%;
        transform: translate(-50%,-50%);
    }
    .position-bottom{
        bottom: 0;
        transform: translate(-50%);
    }
</style>
