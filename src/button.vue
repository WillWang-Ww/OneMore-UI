<template>
    <button class="o-button" :class="{ [`${size}`] : true,[`${importance}`] : true , disabled}" :disabled='ifDisabled()' @click="$emit('click')">
        <o-icon v-if="icon && !loading && !check" :icon='icon'></o-icon>
        <o-icon v-if="loading" icon='loading'></o-icon>
        <o-icon v-if="check" icon='check'></o-icon>
        <slot></slot>
    </button>
</template>
<script>
import Icon from './icon'
export default {
    name:'OMButton',
    components:{
        'o-icon': Icon
    },
    props:{
        icon:{},
        loading:{
            type: Boolean
        },
        check:{
            type: Boolean
        },
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
        },
        disabled:{
            type: Boolean,
            default: false
        },
        name:{
            type: String,
        }
    },
    methods:{
        clickButton() {
            this.$emit('click')
        },
        ifDisabled() {
            if(this.disabled === true){
                return this.disabled
            }
        }
    },
}
</script>
<style scoped>
    .o-button{
        color: white;
        border: none;
        height: 40px;
        font-size: 16px;
        overflow: hidden;
        text-align: center;
        outline: 0;
        vertical-align: middle;
        position: relative;
        border-radius: 2px;
        white-space: nowrap;
        line-height: 1;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        width: 100%;
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
    .disabled{
        background-color: #ccc;
    }
</style>