import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    users: [],
    myPhotoURL: [],
    myLocation: [],
    myBio: [],
  }),
  getters: {
    firstFiveUsers(state) {
      return state.users.splice(0, 5);
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setInformationAbouMe(state, payload) {
      state.myPhotoURL=payload.avatar_url
      state.myLocation=payload.location
      state.myBio=payload.bio

    },
  },
  actions: {
    async getUsers({ commit }) {
      let response = await (await fetch("https://api.github.com/users")).json();
      commit("setUsers", response);
    },
    async getInformationAboutMe({ commit }) {
      let response = await (
        await fetch("https://api.github.com/users/boikodaria22")
      ).json();
      commit("setInformationAbouMe", response);
    },
  },
});
