<template>
    <div class="om-switch-wrapper">
        <input class="om-switch-input" type="checkbox" v-model="checkedValue"/>
        <div class="om-switch-button"></div>
        {{checkedValue}}
    </div>
</template>
<script>
export default {
    name: 'OMSwitch',
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            checkedValue: this.value
        }
    }
}
</script>
<style>
    .om-switch-wrapper{
        position: relative;
        appearance: none;
        border: 1px solid #ccc;
        height: 48px;
        width: 96px;
        border-radius: 28px;
    }
    .om-switch-input{
        opacity: 0;
        height: 48px;
        width: 96px;
    }
    .om-switch-button{
        position: absolute;
        top: -1px;
        left: 0;
        height: 48px;
        width: 48px;
        border-radius: 32px;
        background-color: white;
        border:1px solid #ccc;
        box-shadow:  0 1px 3px rgba(0,0,0,0.4)
    }
</style>
