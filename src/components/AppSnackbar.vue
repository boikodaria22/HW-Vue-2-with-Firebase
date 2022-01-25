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
@import '../assets/layouts/index.scss'
</style>
