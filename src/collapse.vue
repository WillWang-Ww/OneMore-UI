<template>
    <div id="collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'OMCollapse',
    props:{
        single:{
            type: Boolean,
            default: false
        },
        selected:{
            type: Array
        }
    },
    data(){
        return{
            eventBus: new Vue(),
        }
    },
    provide(){
        return{
            eventBus: this.eventBus
        }
    },
    mounted(){
        //通知子组件Item选中信息
        this.eventBus.$emit('update:selected',this.selected)
        //接收来自子组件Item的增添事件
        this.eventBus.$on('update:addSelected', (name) => {
            //判断是否单选Item
            if(this.single){
                this.selected = [name]
            }else{
                this.selected.push(name)
            }
            this.eventBus.$emit('update:selected',this.selected)
            this.$emit('update:selected',this.selected)
        })
        //接收来自子组件Item的删除事件
          this.eventBus.$on('update:removeSelected', (name) => {
            let index = this.selected.indexOf(name)  
            this.selected.splice(index, 1)
            this.eventBus.$emit('update:selected',this.selected)
            this.$emit('update:selected',this.selected)
        })
    }
}
</script>
<style>
    #collapse{
        border: 1px solid #ddd;
        border-radius: 6px;
        width: 100%;
        overflow: hidden;
    }
</style>
