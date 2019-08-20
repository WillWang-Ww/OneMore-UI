<template>
  <div class="tabs-item" @click="onclick" :class="classes" :disabled="disabled">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "OMTabItem",
  data(){
      return {
          active: false
      }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  inject: ["eventBus"],
  computed: {
      classes() {
          return {
              active: this.active,
              disabled: this.disabled
          }
      }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
          this.active = true
      }else {
          this.active = false
      }
    });
  },
  methods: {
    onclick() {
        if(!this.disabled){
            this.eventBus.$emit("update:selected", this.name,this);
        }
    }
  }
};
</script>
<style lang="scss" scoped>
    $active-font-color: #fc9153;
    $disabled-text-color: #bbb;
    .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #444;
    &.active {
        color: $active-font-color;
    }
    &.disabled {
        color: $disabled-text-color;
        cursor: not-allowed;
    }
    }
</style>