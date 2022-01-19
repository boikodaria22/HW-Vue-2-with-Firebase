<template>
  <div class="dialog">
    <div class="dialog-message">
      <div class="header">
        <button 
          class="btn" 
          @click="$emit('closePopUpEvent')"
          >
            x
          </button>
      </div>
      <div class="main"></div>
      <div class="footer">
        <button 
          class="btn" 
          @click="$emit('backPopUpEvent')"
        > 
            Back
        </button>
        <button 
          class="btn" 
          @click="$emit('continuePopUpEvent')"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppPopUp",
  data: () => ({}),
};
</script>
<style scoped lang="scss">
body {
  overflow: hidden;
}
.dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  overflow: auto;
  background: #26262697;
}
.dialog-message {
  min-height: 15%;
  padding: 0px;
  z-index: 30;
  overflow: auto;
  background: rgb(178, 145, 185);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.259);
}
.header {
  text-align: right;
  .btn:hover {
    font-size: 16px;
    color: rgb(149, 63, 166);
    transition: font-size 0.5s ease;
  }
}
.footer {
  text-align: center;
  padding: 20px;

  .btn {
    background: rgb(167, 93, 182);
    border: 1px solid rgb(193, 184, 195);
    padding: 10px 20px;
    margin: 5px;
    &:hover,
    :active {
      background: rgb(149, 63, 166);
    }
  }
}
.btn {
  padding: 0px 5px;
  border: none;
  border-radius: 5px;
  background: inherit;
  color: #fff;
  cursor: pointer;
}
</style>
