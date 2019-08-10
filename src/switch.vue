<template>
    <div class="OMSwitchWrapper" @click="watchCheck">
        <input class="OMSwitchInput" type="checkbox" v-model="checkedValue"/>
        <div class="OMSwitchButton" :class="{checked: isChecked , unChecked: unChecked}"></div>
    </div>
</template>
<script>
export default {
    name: 'OMSwitch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            checkedValue: this.value,
            isChecked: false,
            unChecked: true
        }
    },
    methods:{
        watchCheck(){
            console.log('change')
            this.isChecked = !this.isChecked
            this.unChecked = !this.unChecked
        }
    }
}
</script>
<style scoped>
    .OMSwitchWrapper{
        position: relative;
        appearance: none;
        height: 48px;
        width: 96px;
        border-radius: 28px;
        border:1px solid #ccc;
        background-color: #fc9153;
    }
    .OMSwitchInput{
        position: absolute;
        opacity: 0;
        height: 48px;
        width: 96px;
        z-index: 1;
        transition: 0.4s;
    }
    .OMSwitchButton{
        position: absolute;
        top: 0;
        left: 0;
        height: 46px;
        width: 48px;
        border-radius: 32px;
        background-color: white;
        border:1px solid #ccc;
        box-shadow:  0 1px 3px rgba(0,0,0,0.4);
    }
    .checked{
        animation: checked 0.4s linear;
        animation-fill-mode:forwards;
    }
    .unChecked{
        animation: unChecked 0.4s linear;
        animation-fill-mode:forwards;
    }
    @keyframes checked {
        0%{
            left: 0;
        }
        100%{
            left: 100%;
            transform: translateX(-100%)
        }
    }
    @keyframes unChecked {
        0%{
            left: 100%;
            transform: translateX(-100%) 
        }
        100%{
            left: 0;
        }
    }
</style>
