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
        },
        importance:{
            type: String,
        }
    }
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
    .medium{
        width: 50%;
        border-radius: 4px;
    }
    .small{
        width: 25%;
        border-radius: 4px;
    }
    .primary{
        background-color: #26a2ff;
    }
    .o-button::after{
        content: '';
        background-color: #000;
        content: " ";
        opacity: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
    }
</style>

