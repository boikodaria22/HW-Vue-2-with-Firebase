<template>
  <div class="login-sign-in">
    <div 
      class="text-center tab_content wrapper" 
      id="Sign-In"
    >
      <form @submit="checkFormPopUpSignIn($event)">
        <input
          @change="checkLogin()"
          v-model.trim="userLogin"
          type="email"
          id="login-sign-in"
          class="fadeIn first"
          name="email"
          placeholder="Login"
        />
        <input
          @change="checkPassword()"
          v-model.trim="userPassword"
          type="password"
          id="password-sign-in"
          class="fadeIn second"
          name="password"
          placeholder="Password"
        />
        <input
          type="submit"
          class="fadeIn third"
          value="Sign In"
          id="btn-sign-in"
        />
      </form>
      <div class="message error">
        {{ messageError }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPopUpSignIn",
  data() {
    return {
      messageError: "",
      userLogin: "",
      userPassword: "",
      messageSuccessfully: "",
    };
  },
  methods: {
    checkFormPopUpSignIn(event) {
      if (this.userLogin.length && this.userPassword) {
        this.messageSuccessfully = `Congratulations! You have successfully logged in as user ${this.userLogin}`;
        return;
      }
      event.preventDefault();
    },
    checkLogin() {
      if (!this.userLogin) {
        this.messageError = "Please enter login.";
      }
    },

    checkPassword() {
      if (!this.userPassword) {
        this.messageError = "Wrong password. Try again!";
        return;
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
input[type="email"],
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

input[type="email"]:focus,
input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="email"]:placeholder {
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
