<template>
    <div class="OMSwitchWrapper" @click="watchCheck" >
        <div class='BGWrapper' :class="{wrapperActive: isChecked ,wrapperUnActive: unChecked}"></div>
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
            isChecked: undefined,
            unChecked: undefined
        }
    },
    mounted(){
        this.isChecked = false
    },
    methods:{
        watchCheck(){
            if(!this.disabled) {
                this.unChecked = this.isChecked
                this.isChecked = !this.isChecked
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
        border-radius: 24px;
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
        transition: all 0.2s;
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
        transition: all 0.2s;
    }
    .BGWrapper{
        position: absolute;
        top: 0;
        left: 0;
        width: 48px;
        height: 24px;
        border-radius: 24px;
    }
    .wrapperActive{
        background-color: #fc9153;
        transition: all 0.2s;
    }
    .wrapperUnActive{
        background-color:white;
        transition: all 0.2s;
    }
    .checked{
        left: 100%;
        transform: translateX(-100%);
    }
    .unChecked{
        left: 0;
    }
</style>
