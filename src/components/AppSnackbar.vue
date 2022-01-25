<template>
  <transition name="slide-fade">
    <div class="app-snackbar" v-if="show" :class="infoColor">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AppSnackbar",
  data: () => ({
    show: true,
  }),
  props: {
    infoColor: {
      type: String,
    },
    validator: (value) => this.infoColor.indexOf(value) !== -1,
  },
  created() {
    setTimeout(() => (this.show = false), 5000);
  },
};
</script>
<style scoped>
body{
  position: relative;
}
.app-snackbar {
  position: absolute;
  bottom:0;
  left:50%;
  transform:translate(-50%, 0);
  min-height: max-content;
  width: 50%;
  border-radius: 10px;
  padding:10px 10px;
  text-align: center;
}
.success {
  background: rgba(0, 128, 0, 0.45);
  border: 1px solid green;
}
.warning {
  background: rgba(255, 255, 0, 0.45);
  border: 1px solid yellow;
}
.error {
  background: rgba(255, 0, 0, 0.45);
  border: 1px solid red;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
