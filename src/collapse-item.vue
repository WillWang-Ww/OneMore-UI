<template>
    <div class="collapseItem" @click="toggle">
        <div class="title">
            {{title}}  
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OMCollapseItem',
    props:{
        title:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            open: false,
        }
    },
    inject:['eventBus'],
    mounted(){
        //接收父组件Collapse处理后的selected信息并操作是否显示
        this.eventBus && this.eventBus.$on('update:selected', (selected) => {
            if(selected.indexOf(this.name) >=0 ){
                this.open = true
            }else{
                this.open = false
            }
        })
    },
    methods:{
        //点击后 通知父组件Collapse add事件/remove事件 
        toggle(){
            if(this.open){
                this.eventBus && this.eventBus.$emit('update:removeSelected',this.name)
            }else{
                this.eventBus && this.eventBus.$emit('update:addSelected',this.name)
            }
        },
    }
}
</script>
<style scoped>
    .title{
        border: 1px solid #ddd;
        border-radius: 2px;
        width: 100%;
        padding: 12px 10px;
        background-color: #4a4c5b;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content{
        border: 1px solid #ddd;
        border-radius: 2px;
        width: 100%;
        padding: 12px 10px;
    }
</style>