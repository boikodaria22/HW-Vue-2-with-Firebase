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
          type="radio"
          name="radio"
          id="female"
          value="female"
          v-model="userInfo.gender"
          @focus="setActiveItem('gender')"
        />
        <label for="female"> Female </label>

        <input
          type="radio"
          name="radio"
          id="male"
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
          type="checkbox"
          id="check-experience"
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
          type="number"
          id="show"
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
          v-if="userInfo.country !== 'Ukraine'"
          type="text"
          v-model="userInfo.city"
          @focus="setActiveItem('city')"
        />
        <select v-else v-model="userInfo.city">
          <option disabled value="">Choose city</option>
          <template v-for="(city, index) in ukrainianCities">
            <option :value="city" :key="index">
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
            :value="level.value"
            :lebel="level.label"
            :key="index + level.value"
          >
            {{ level.value }}:{{ level.label }}
          </option>
        </select>
      </div>

      <div class="sign-up-page__form-item">
        <button 
        type="submit" 
        :disabled="сanBeRegistered===false"
        :class="[сanBeRegistered === false ? 'disabled-button' : '']"
        >Sign Up</button>
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
    сanBeRegistered:false,
  }),
  watch:{
    userInfo:{
      deep:true,
      immediate: true,
      handler(newValue){
        this.checkForm(newValue)
        }
      }
  },

  methods: {
    setActiveItem(inputLabel) {
      this.isActive = this.userInfo[inputLabel];
    },
    checkForm(newValue){
      let values = Object.values(newValue)
      values.map(item =>{
        (item!==''&& item!=='null') 
        ? this.сanBeRegistered = true 
        : this.сanBeRegistered = false
       })
    }
  },
};
</script>
<style scoped lang="scss">
@import '../assets/layouts/index.scss'
</style>
