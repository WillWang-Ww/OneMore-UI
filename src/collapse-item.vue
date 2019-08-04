<template>
    <div class="collapseItem" @click="open = !open">
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
    name: 'CollapseItem',
    props:{
        title:{
            type: String,
            required: true,
        }
    },
    data(){
        return{
            open:false
        }
    },
}
</script>
<style scoped>
    .title{
        border: 1px solid #ddd;
        border-radius: 2px;
        width: 100%;
        padding: 5px 10px;
    }
    .content{
        border: 1px solid #ddd;
        border-radius: 2px;
        width: 100%;
        padding: 5px 10px;
    }
</style>