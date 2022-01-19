<template>
  <div class="login-pop-up-sign-up">
    <div 
      class="text-center tab_content wrapper" 
      id="Sign-Up"
    >
      <form @submit="checkFormPopUpSignUp($event)">
        <input
          v-model="userLogin"
          @focus="checkLogin()"
          type="text"
          id="login-sign-up"
          class="fadeIn first"
          name="email"
          placeholder="Login"
        />
        <input
          v-model="userPassword"
          @focus="checkPassword()"
          type="password"
          id="password-sign-up"
          class="fadeIn second"
          name="password"
          placeholder="Password"
        />
        <input
          v-model="userRepeatedPassword"
          @focus="checkRepeatedPassword()"
          type="password"
          id="check-password-sign-up"
          class="fadeIn third"
          name="password"
          placeholder="Repeated password"
        />
        <input
          type="submit"
          class="fadeIn fourth"
          value="Sign Up"
          id="btn-sign-up"
        />
      </form>
      <div
        v-if="!messageSuccessfully.length"
        class="message error align-items-center"
      >
        {{ messageError }}
      </div>
      <div 
        v-else 
        class="message success"
      >
        {{ messageSuccessfully }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPopUpSignUp",
  props:{
   usersUsernames:{
     type:Array,
     default:() => []
   }
  },
  data() {
    return {
      messageError: "",
      userLogin: "",
      userPassword: "",
      userRepeatedPassword: "",
      messageSuccessfully: "",
    };
  },

  methods: {
    checkFormPopUpSignUp(e) {
      if (
        this.userLogin &&
        this.userPassword &&
        this.userRepeatedPassword &&
        this.userRepeatedPassword === this.userPassword &&
        this.usersUsernames.indexOf(this.userLogin) === -1
      ) {
        this.messageSuccessfully = `You are registered successfully. Your login ${this.userLogin}`;
        return;
      }
      if (this.userRepeatedPassword !== this.userPassword) {
        this.messageError =
          "You entered different passwords. Please edit them and try again.";
      }
        if (this.usersUsernames.indexOf(this.userLogin) !== -1) {
        this.messageError = "This login exist.";
      }
      e.preventDefault();
    },
    checkLogin() {
      if (!this.userLogin) {
        this.messageError = "Please enter login.";
        return
      }
    },
    checkPassword() {
      if (!this.userPassword) {
        this.messageError = "Please enter your password.";
      }
    },
    checkRepeatedPassword() {
      if (!this.userRepeatedPassword) {
        this.messageError = "Please enter your password again.";
      }
    },
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  padding: 50px 0px;
  background-color: #afdbf1;
  box-shadow: 3px 3px rgba(128, 128, 128, 0.485),
    -3px 3px rgba(128, 128, 128, 0.327);
  border-radius: 0 0 10px 10px;
  border: 1px solid rgba(128, 128, 128, 0.327);
}
input[type="button"],
input[type="submit"] {
  background-color: #56baed;
  border: 1px solid rgba(128, 128, 128, 0.327);
  color: white;
  padding: 15px 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  box-shadow: 1px 1px rgba(128, 128, 128, 0.485),
    -1px 1px rgba(128, 128, 128, 0.327);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  margin-top: 50px;
}
input[type="button"]:hover,
input[type="submit"]:hover {
  background-color: #39ace7;
}
input[type="button"]:active,
input[type="submit"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}
input[type="text"],
input[type="password"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder {
  color: #cccccc;
}

.message {
  border-radius: 5px;
  width: 75%;
  text-align: center;
  margin: 0 auto;
}
.error {
  background: rgba(255, 0, 0, 0.156);
}

.success {
  background: rgba(0, 128, 0, 0.327);
}
</style>
