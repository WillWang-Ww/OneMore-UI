<template>
  <div class="popover" @click.stop="onClick" ref="popover">
    <div ref="contentWrapper" v-if="visible" class="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "OMPopover",
  data() {
    return {
      visible: false
    };
  },
  mounted() {},
  methods: {
    popoverPosition() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        width,
        height,
        top,
        left
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },
    onClickDocument(e){
        if (
          this.$refs.popover &&
          (this.$refs.popover === e.target ||
            this.$refs.popover.contains(e.target))
        ) {
          return;
        }
        if (
          this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target ||
            this.$refs.contentWrapper.contains(e.target))
        ) {
          return;
        }
        this.close();
    },
    open() {
      this.visible = true;
      //异步解决点击后visible变成true后立刻变回false的问题
      this.$nextTick(() => {
        this.popoverPosition();
        //每次更改后需要移除监听器
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
        this.visible = false;
        document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>
<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.contentWrapper {
  position: absolute;

  border: 1px solid #999;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
