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
        this.eventBus && this.eventBus.$on('update:selected', (selected) => {
            if(selected.indexOf(this.name) >=0 ){
                this.open = true
            }else{
                this.open = false
            }
        })
    },
    methods:{
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
        padding: 5px 10px;
        background-color: #fc9153;
    }
    .content{
        border: 1px solid #ddd;
        border-radius: 2px;
        width: 100%;
        padding: 5px 10px;
    }
</style>