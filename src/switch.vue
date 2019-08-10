<template>
    <div class="OMSwitchWrapper" @click="watchCheck" >
        <div :class="{wrapperActive: isChecked ,wrapperUnActive: !isChecked}"></div>
        <input class="OMSwitchInput" type="checkbox" v-model="checkedValue" :disabled='disabled'/>
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
        disabled: {
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
    mounted(){

    },
    methods:{
        watchCheck(){
            if(!this.disabled) {
                this.isChecked = !this.isChecked
                this.unChecked = !this.unChecked
            }
        },
    }
}
</script>
<style scoped>
    .OMSwitchWrapper{
        position: relative;
        appearance: none;
        height: 24px;
        width: 48px;
        border-radius: 28px;
        border:1px solid #ccc;
        background-color: white;
        overflow: hidden;
    }
    .OMSwitchInput{
        position: absolute;
        opacity: 0;
        height: 24px;
        width: 48px;
        z-index: 1;
    }
    .OMSwitchButton{
        position: absolute;
        top: 0;
        left: 0;
        height: 22px;
        width: 22px;
        border-radius: 24px;
        background-color: white;
        border:1px solid #ccc;
        box-shadow:  0 1px 3px rgba(0,0,0,0.4);
    }
    .checked{
        animation: checked 0.2s linear;
        animation-fill-mode:forwards;
    }
    .wrapperActive{
        position: absolute;
        top: 0;
        left: 0;
        width: 48px;
        height: 24px;
        border-radius: 24px;
        background-color: #fc9153;
        animation: wrapperShow 0.2s linear;
    }
    .wrapperUnActive{
        position: absolute;
        top: 0;
        left: 0;
        width: 48px;
        height: 24px;
        border-radius: 24px;
        background-color:white;
        animation: wrapperUnShow 0.2s linear;
    }
    .unChecked{
        animation: unChecked 0.2s linear;
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
    @keyframes wrapperShow {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    @keyframes wrapperUnShow {
        from{
            background-color: #fc9153;
        }
        to{
            background-color:white;
        }
    }
</style>
