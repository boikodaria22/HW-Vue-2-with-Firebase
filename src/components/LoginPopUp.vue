<template>
  <div class="login-dialog">
    <div class="login-form">
       <button 
          class="button-close" 
          @click="$emit('update:showLoginPopUp',false)"
        >
          x
        </button>
      <div id="tabs">
        <div class="tabs_navigation row text-center">
          <button
            class="tabs_button col-6 text-white btn-primary"
            :class="[isActive === 'Sign in' ? 'active' : '']"
            @click="signIn = true"
          >
            Sign In
          </button>

          <button
            class="tabs_button col-6 text-white btn-primary"
            :class="[isActive === 'Sign up' ? 'active' : '']"
            @click="signIn = false"
          >
            Sign Up
          </button>
        </div>

        <div 
          class="tabs_content" 
          id="tabs_content"
        >
          <keep-alive>
            <component :is="switchTabs" :usersUsernames="usersUsernames" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginPopUpSignIn from "./LoginPopUpSignIn.vue";
import LoginPopUpSignUp from "./LoginPopUpSignUp.vue";

export default {
  name: "LoginPopUp",
  components: {
    LoginPopUpSignIn,
    LoginPopUpSignUp,
  },
  props:{
    showLoginPopUp:{
      type:Boolean,
      default: true,
      required: true,
    }
  },
  data() {
    return {
      signIn: true,
      isActive: "Sign in",
      showComponents: true,
      usersUsernames:[],
    };
  },
  computed: {
    switchTabs() {
      if (this.signIn) {
        return "LoginPopUpSignIn";
      }
      return "LoginPopUpSignUp";
    },
  },
  methods: {
  },
  created(){
     fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json()).then(data => this.usersUsernames = data.map(item => item.username))
  }
};
</script>
<style lang="scss" scoped>
.login-dialog {
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
.login-form {
  width: 70%;
}
.tabs_navigation {
  max-width: 100%;
  margin: auto;
  margin-top: 20%;
}

.tabs_button {
  padding: 10px;
  font-size: 1.1em;
  text-transform: uppercase;
  border-radius: 10px 10px 0 0;
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(137, 135, 135, 0.629);
  box-shadow: 1px 0 10px 0 #b0aeae;
}
.tab_content {
  box-shadow: 1px 0 5px 0 #b0aeae;
}
.button-close {
  position: absolute;
  top: 2%;
  right: 2%;
  z-index: 35;
  padding: 0px 5px;
  border: none;
  border-radius: 5px;
  background: none;
  color: #fff;
  cursor: pointer;
  font-size: 30px;
}
</style>
