<template>
    <button class="o-button" :class="{ [`${size}`] : true,[`${importance}`] : true}">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:'o-Button',
    props:{
        size:{
            type: String,
            validator(value) {
                return ['small','normal','large'].indexOf(value) > -1;
            },
        },
        importance:{
            type: String,
            validator(value) {
                return ['default','primary','dangerous'].indexOf(value) > -1;
            },
        }
    },
    
}
</script>
<style scoped>
    .o-button{
        background-color: white;
        border: 1px solid grey;
        height: 41px;
        font-size: 18px;
        overflow: hidden;
        text-align: center;
        outline: 0;
        vertical-align: center;
        position: relative;
    }
    .large{
        width: 100%;
    }
    .normal{
        width: 50%;
        border-radius: 4px;
    }
    .small{
        width: 25%;
        border-radius: 4px;
    }
    .default{
        background-color: white;
    }
    .default:active{
        background-color: grey;
    }
    .primary{
        background-color: #26a2ff;
    }
    .primary:active{
        background-color: #1574bd;
    }
    .dangerous{
        background-color: #ef4f4f;
    }
    .dangerous:active{
        background-color: #ce2a2a;
    }
</style>