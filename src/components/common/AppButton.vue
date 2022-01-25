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
.app-button{
  display: flex;
  align-items: center;
  justify-content:right;
  padding: 0px 10%;
  @media screen and (max-width: 600px) {
    .button{
     margin-top: 20px;
     height: 40px;
     width: 80px;
     padding: 0 10px;
     font-size:14px;
    }
    img{
  width: 15px;
  height: 15px;
  margin: -3px 0px;
}
  }
}
.button {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  height: 60px;
  width: 120px;
  padding: 0 15px;
  border: 1px solid rgb(193, 184, 195);
  border-radius: 5px;
  background: rgba(165, 112, 26, 0.629);
  font-size:20px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: rgb(165, 112, 26);
  }
}
img{
  width: 25px;
  height: 25px;
  margin: -3px 0px;
}

</style>
