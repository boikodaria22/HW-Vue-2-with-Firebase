<template>
<div id = "app" class = "app">
    <!-- <PostPage /> -->
    <SignUp />
</div>
</template>

<script>
// import PostPage from './components/PostPage.vue'
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  data: () => ({
  }),
  components: {
    //  PostPage,
    SignUp,
    }
  }
</script>

<style lang="scss">
body{
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #cfecd0, #ffc5ca);
}
</style>
