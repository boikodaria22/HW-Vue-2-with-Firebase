<template>
<div id="app" class="app">
  <LoginPopUp  
    v-if="showLoginPopUp === true"
    @closePopUp="showLoginPopUp = false"
  />
  <Header  @loginButtonClick="showLoginPopUp = true" />
  <PostList />
  <AppButton 
    @appButtonClick="appButtonClick()" 
    appButtonText="Save"
  />
  <AppPopUp 
      v-if="showAppPopUp === true"
      @closePopUpEvent="closePopUpEvent()"
      @backPopUpEvent="backPopUpEvent()"
      @continuePopUpEvent="continuePopUpEvent()"
    />
    <Footer />

  
</div>
</template>

<script>

import PostList from './components/PostList.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import LoginPopUp from './components/LoginPopUp.vue'
export default {
  name: 'App',
  data () {
    return{
    showAppPopUp:true,
    showLoginPopUp:false,
  }},
  components: {
    PostList,
    Header,
    Footer,
    LoginPopUp,
    AppPopUp:() => import('./components/common/AppPopUp.vue'),
    AppButton:() => import('./components/common/AppButton.vue'),
  
    },
  methods:{
    closePopUpEvent(){
      this.showAppPopUp = false,
      console.log('closePopUpEvent')
     },
     backPopUpEvent(){
      console.log('backPopUpEvent')
     },
     continuePopUpEvent(){
       console.log('continuePopUpEvent')
    },
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
.app{
  text-align: center;
}

</style>
