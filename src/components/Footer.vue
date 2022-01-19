<template>
  <div class="footer">
    <div 
      class="footer-link"
      v-html="linkToMyProfile"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      linkToMyProfile:
        '<p>Created by <a href="https://github.com/boikodaria22">me</a></p>',
    };
  },
};
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
}
.footer-link a {
  color: rgb(167, 93, 182);

  &:hover {
    text-decoration: none;
    color: #fff;
  }
}
</style>
