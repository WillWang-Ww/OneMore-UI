<template>
    <div class="popover" @click.stop="trigger">
        <div v-if="visible" class="contentWrapper" @click.stop>
            <slot name="content" ></slot>        
        </div>

        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "OMPopover",
    data () {
        return{
            visible: false
        }
    },
    methods:{
        trigger(){
            this.visible = !this.visible
            if(this.visible === true){
                //异步解决点击后visible变成true后立刻变回false的问题
                setTimeout(() => {
                   let eventHandler = () => {
                       this.visible = false
                       //每次更改后需要移除监听器
                    document.removeEventListener('click',eventHandler)
                   }
                    document.addEventListener('click',eventHandler)
                })
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .contentWrapper{
            position: absolute;
            bottom: 100%;
            left: 0;
            border:1px solid #999;
            box-shadow: 0 0 3px rgba(0, 0,0, 0.5);
        }
    }
</style>
