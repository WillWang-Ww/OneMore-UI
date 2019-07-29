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
                return ['default','primary','light'].indexOf(value) > -1;
            },
        }
    },
    
}
</script>
<style scoped>
    .o-button{
        color: white;
        border: none;
        height: 41px;
        font-size: 16px;
        overflow: hidden;
        text-align: center;
        outline: 0;
        vertical-align: center;
        position: relative;
        border-radius: 2px;
        white-space: nowrap;
        line-height: 1;
    }
    .large{
        width: 100%;
    }
    .normal{
        width: 50%;
    }
    .small{
        width: 25%;
        
    }
    .default{
        background-color: #4a4c5b;
    }
    .default:active{
        background-color: #3d3e47;
    }
    .primary{
        background-color: #fc9153;
    }
    .primary:active{
        background-color: #d86c2d;
    }
    .light{
        color: #666;
        background-color:#fcfcfc;
        box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
    }
    .light:active{
        background-color: #c9c9c9;
    }
</style>