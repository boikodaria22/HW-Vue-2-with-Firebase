<template>
  <div class="app-button">
  
      <button class="button" @click="$emit('appButtonClick')">
        <slot name="pencil"></slot>
        {{ appButtonText }}
        <slot name="success"></slot>
      </button>

  </div>
</template>
<script>
export default {
  name: "AppButton",
  props: ["appButtonText"],
  data: () => ({}),
};
</script>
<style scoped lang="scss">
@import '../../assets/layouts/index.scss'
</style>
