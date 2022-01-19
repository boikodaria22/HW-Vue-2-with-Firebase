<template>
  <div class="app-button">
    <button 
    class="button" 
    @click="$emit('appButtonClick')"
   >
     {{ appButtonText }}
   </button>
  </div>
</template>
<script>
export default {
  name: "AppButton",
  props:['appButtonText'],
  data: () => ({}),
};
</script>
<style scoped lang="scss">
.button {
  padding: 10px 20px;
  margin: 5px;
  border: 1px solid rgb(193, 184, 195);
  border-radius: 5px;
  background: rgba(165, 112, 26, 0.629);
  color: #fff;
  cursor: pointer;
  &:hover {
    background: rgb(165, 112, 26);
  }
}
</style>
