<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'OMTab',
    inject:['eventBus'],
    data(){
      return {
          active: false
      }
    },
    props: {
        name: {
            type: String | Number,
            required: true
        }
    },
    computed: {
      classes() {
          return {
              active: this.active
          }
      }
    },
    created () {
        this.eventBus.$on('update:selected',(name)=>{
            if (name === this.name) {
                this.active = true
            }else {
                this.active = false
      }
        })
    }
}
</script>
<style lang="scss">
    $blue: blue;
    $disabled-text-color: grey;
    .tabs-pane {
    flex-shrink: 0;
    padding: 1em 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;

    &.active {
        color: $blue;
        font-weight: bold;
    }
    &.disabled {
        color: $disabled-text-color;
        cursor: not-allowed;
    }
    }
</style>