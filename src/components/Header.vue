<template>
  <div class="header">
    <div class="logo d-flex justify-content-between">
      <span 
        class="logo-picture" 
        v-html="logoHtml"
      >
      </span>
      <button 
        class="button" 
        @click="$emit('loginButtonClick')"
      >
        LogIn
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    logoHtml: `<a href="./App.vue"><img src="https://papik.pro/uploads/posts/2021-11/1635996235_5-papik-pro-p-kotenok-vektornii-risunok-5.png" alt="logo-cat" height="70" width="60"/> Blog </a>`,
  }),
};
</script>

<style lang="scss">
.header {
  margin: 20px;
}

.logo-picture a {
  font: italic 60px "Fira Sans", serif;
  color: rgb(165, 112, 26);
  &:hover {
    text-decoration: none;
    color: #fff;
  }
}
.logo-picture img {
  margin-top: -20px;
}
.button {
  padding: 5px 20px;
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
