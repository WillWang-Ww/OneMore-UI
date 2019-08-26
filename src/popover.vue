<template>
    <div class="popover" @click="xxx">
        <slot name="content" v-if="visible"></slot>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "OMPopover",
    data () {
        return{
            visible: true
        }
    },
    methods:{
        xxx(){
            this.visible = !this.visible
        }
    }
}
</script>
<style scoped lang="scss">
    .popover{
        display: inline-block;
        vertical-align: top;
    }
</style>>
