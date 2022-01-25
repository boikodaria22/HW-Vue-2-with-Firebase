<template>
<div id = "app" class = "app">
    <!-- <PostPage /> -->
    <SignUp />
    <AppButton 
    @appButtonClick="appButtonClick()" 
    appButtonText="Save"
     >
    <!-- <template v-slot:pencil>
      <img src="https://cdn-icons-png.flaticon.com/512/3050/3050090.png" style="width:15px;height:15px;">
    </template> -->
    <template v-slot:success>
     <img src="https://cdn-icons.flaticon.com/png/512/656/premium/656769.png?token=exp=1643123493~hmac=0024a8c8793c4a2df811b72686750192">
    </template>
  </AppButton>
    <AppSnackbar :infoColor="'error'"> 
      <slot>
        <h3>Error message: </h3>
        <p>Something went wrong. Try it again</p>
      </slot>
    </AppSnackbar> 

</div>
</template>

<script>
import AppSnackbar from './components/AppSnackbar.vue'
// import PostPage from './components/PostPage.vue'
import SignUp from './components/SignUp.vue'
import AppButton from './components/common/AppButton.vue'
export default {
  name: 'App',
  data: () => ({
    infoColor:['success','warning','error']
  }),
  components: {
    //  PostPage,
    SignUp,
    AppSnackbar,
    AppButton,

    },
    methods:{
        appButtonClick(){
      console.log('appButtonClick')
    }
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
