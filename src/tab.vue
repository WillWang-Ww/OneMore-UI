<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'OMTab',
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal',
             validator(value) {
                return ['horizontal','vertical'].indexOf(value) > -1;
            },
        }
    },
    data(){
        return {
            eventBus: new Vue()
        }
    },
    provide(){
        return {
            eventBus: this.eventBus
        }
    },
    mounted(){
        this.$children.forEach((vm) => {
          if (vm.$options.name === 'OMTabHead') {
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === 'OMTabItem'
                && childVm.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
}
</script>
<style lang="scss">

</style>