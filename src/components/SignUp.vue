<template>
  <div class="sign-up-page">
    <h3 class="sign-up-page__title">Sign Up</h3>
    <form class="sign-up-page__form">
      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['name'] ? 'active' : '']"
      >
        <input
          type="text"
          v-model.lazy="userInfo.name"
          @focus="setActiveItem('name')"
        />
        <label> Name </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['surname'] ? 'active' : '']"
      >
        <input
          type="text"
          v-model.lazy="userInfo.surname"
          @focus="setActiveItem('surname')"
        />
        <label> Surname </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['email'] ? 'active' : '']"
      >
        <input
          type="email"
          v-model.trim="userInfo.email"
          @focus="setActiveItem('email')"
        />
        <label> Email </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['phone'] ? 'active' : '']"
      >
        <input
          type="number"
          v-model.number="userInfo.phone"
          @focus="setActiveItem('phone')"
        />
        <label> Phone number </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['birthYear'] ? 'active' : '']"
      >
        <input
          type="number"
          v-model.number="userInfo.birthYear"
          @focus="setActiveItem('birthYear')"
        />
        <label> Birth year </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['gender'] ? 'active' : '']"
      >
        <input
          id="female"
          type="radio"
          name="radio"
          value="female"
          v-model="userInfo.gender"
          @focus="setActiveItem('gender')"
        />
        <label for="female"> Female </label>

        <input
          id="male"
          type="radio"
          name="radio"
          value="male"
          v-model="userInfo.gender"
          @focus="setActiveItem('gender')"
        />
        <label for="male"> Male </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['logIn'] ? 'active' : '']"
      >
        <input
          type="text"
          v-model.trim="userInfo.logIn"
          @focus="setActiveItem('logIn')"
        />
        <label> LogIn </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['password'] ? 'active' : '']"
      >
        <input
          type="text"
          v-model.trim="userInfo.password"
          @focus="setActiveItem('password')"
        />
        <label> Password </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['repeatedPassword'] ? 'active' : '']"
      >
        <input
          type="text"
          v-model.trim="userInfo.repeatedPassword"
          @focus="setActiveItem('repeatedPassword')"
        />
        <label> Repeated password </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['commercialExperience'] ? 'active' : '']"
      >
        <input
          id="check-experience"
          type="checkbox"
          v-model="userInfo.commercialExperience"
          true-value="Yes, I have"
          false-value="No, I haven't"
          @focus="setActiveItem('commercialExperience')"
        />
        <label for="check-experience">
          Do you have commercial experience?
        </label>
      </div>

      <div
        class="sign-up-page__form-item"
        v-show="userInfo.commercialExperience === 'Yes, I have'"
        :class="[isActive === userInfo['yearsOfExperience'] ? 'active' : '']"
      >
        <input
          id="show"
          type="number"
          v-model.number="userInfo.yearsOfExperience"
          @focus="setActiveItem('yearsOfExperience')"
        />
        <label for="show"> How many years do you have? </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['country'] ? 'active' : '']"
      >
        <input
          type="text"
          v-model.lazy="userInfo.country"
          @focus="setActiveItem('country')"
        />
        <label> Country </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['city'] ? 'active' : '']"
      >
        <input
          type="text"
          v-if="userInfo.country !== 'Ukraine'"
          v-model="userInfo.city"
          @focus="setActiveItem('city')"
        />
        <select v-else v-model="userInfo.city">
          <option disabled value="">Choose city</option>
          <template v-for="(city, index) in ukrainianCities">
            <option :key="index" :value="city">
              {{ city }}
            </option>
          </template>
        </select>
        <label> City </label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['address'] ? 'active' : '']"
      >
        <input
          type="text"
          v-model="userInfo.address"
          @focus="setActiveItem('address')"
        />
        <label> Address </label>
      </div>
      <div
        class="sign-up-page__form-item"
        :class="[isActive === userInfo['englishLevel'] ? 'active' : '']"
      >
        <select v-model="userInfo.englishLevel">
          <option disabled value="">Choose english level</option>
          <option
            v-for="(level, index) in englishLevelsValues"
            :key="index + level.value"
            :value="level.value"
            :lebel="level.label"
          >
            {{ level.value }}:{{ level.label }}
          </option>
        </select>
      </div>

      <div class="sign-up-page__form-item">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "SignUp",
  data: () => ({
    userInfo: {
      name: "",
      surname: "",
      email: "",
      phone: null,
      birthYear: null,
      gender: null,
      logIn: "",
      password: "",
      repeatedPassword: "",
      commercialExperience: null,
      yearsOfExperience: null,
      country: "",
      city: "",
      address: "",
      englishLevel: "",
    },
    ukrainianCities: [
      "Vinnytsia",
      "Kropyvnytskyi",
      "Poltava",
      "Kharkiv",
      "Dnipro",
      "Luhansk",
      "Kherson",
      "Donetsk",
      "Lutsk",
      "Simferopol",
      "Khmelnitsky",
      "Zhitomir",
      "Lvov",
      "Sumy",
      "Cherkasy",
      "Zaporozhye",
      "Nikolaev",
      "Ternopil",
      "Chernigov",
      "Ivano-Frankivsk",
      "Odessa",
      "Uzhgorod",
      "Chernivtsi",
      "Kiev",
    ],
    englishLevelsValues: [
      {
        value: "A1",
        label: "Beginner",
      },
      {
        value: "A2",
        label: "Elementary",
      },
      {
        value: "B1",
        label: "Intermediate",
      },
      {
        value: "B2",
        label: "Upper Intermediate",
      },
      {
        value: "C1",
        label: "Advanced",
      },
      {
        value: "C2",
        label: "Proficiency",
      },
    ],
    isActive: "",
  }),
  methods: {
    setActiveItem(inputLabel) {
      this.isActive = this.userInfo[inputLabel];
    },
  },
};
</script>
<style scoped lang="scss">
.sign-up-page {
  position: relative;
  padding: 30px 30px 100px;
  border: 3px solid #fff;
  background: rgba(255, 255, 255, 0.32);
  color: rgb(37, 90, 159);
  width: 70%;
  margin: 15% auto;

  .sign-up-page__title {
    font: bold 35px Arial, sans-serif;
    text-align: center;
    text-transform: uppercase;
  }
  .sign-up-page__form-item {
    color: rgb(37, 90, 159);
    font: bold 16px Arial, sans-serif;
    padding: 0px 20px;
    input[type="text"],
    input[type="number"] {
      border: none;
      margin: 3px 0px;
      background: rgba(139, 83, 139, 0.396);
      width: 68%;
      color: #fff;
      
      &:focus,
      :active {
        outline: none;
        box-shadow: 2px 2px 2px 0 rgba(139, 83, 139, 0.759);
        font: italic bold 16px Arial, sans-serif;
      }
      @media screen and (max-width: 600px) {
      width: 60%;
     }
    }
    input[type="radio"] {
      position: relative;
      height: 16px;
      width: 16px;
      outline: none;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        border: 2px solid rgba(139, 83, 139, 0.759);
      }

      &:checked::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(139, 83, 139, 0.759);
        transform: translate(-50%, -50%);
        visibility: visible;
      }
    }
    input[type="checkbox"] {
      position: relative;
      height: 16px;
      width: 16px;
      outline: none;
      display: inline;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        transform: translate(-50%, -50%);
        background-color: white;
        border: 2px solid rgba(139, 83, 139, 0.759);
      }

      &:checked::after {
        content: "\2713";
        position: absolute;
        top: 25%;
        left: 50%;
        width: 10px;
        height: 10px;
        transform: translate(-50%, -50%);
        visibility: visible;
        color: rgba(139, 83, 139, 0.759);
      }
    }

    select {
      background: rgba(139, 83, 139, 0.396);
      border: none;
      cursor: pointer;
      height: 1.4em;
      width: 68.5%;
      padding: 0px 5px;
      color: #fff;
      font: bold 16px Arial, sans-serif;

      &:focus,
      :active {
        outline: none;
        box-shadow: 2px 2px 2px 0 rgba(139, 83, 139, 0.759);
      }
      @media screen and (max-width: 600px) {
         width: 100%;
         font-size:14px;
      }
    }
    
  }
  button {
    box-shadow: 2px 2px 2px 0 rgba(139, 83, 139, 0.759);
    background: rgba(139, 83, 139, 0.396);
    border: none;
    padding: 16px 30px;
    color: #fff;
    text-transform: uppercase;
    font: bold 20px Arial, sans-serif;
    position: absolute;
    margin: 10px 0px;
    top: 87%;
    right: 50%;

    &:hover,
    :active,
    :focus {
      background: rgba(139, 83, 139, 0.759);
    }
    @media screen and (max-width: 600px) {
      top: 87%;
      right: 10%;
     }
  }
 @media screen and (max-width: 600px) {
     margin: 0 auto;
     }
}
</style>
