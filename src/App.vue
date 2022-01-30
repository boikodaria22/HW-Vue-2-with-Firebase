<template>
  <div id="app" class="app">

    <div class="head">
      <div>
        <h1> Top 5 Users</h1>
      </div>
      <div class="my-info">
        <div class="my-info-photo">
          <img :src="this.$store.state.myPhotoURL" />
        </div>
        <div class="my-info-data">
          <h2>Boiko Daria</h2>
          <p><b>location: </b>{{ this.$store.state.myLocation }}</p>
          <p><b> bio: </b>{{ this.$store.state.myBio }}</p>
        </div>
      </div>
    </div>

    <div class="users" v-for="user in firstFiveUsers" :key="user.id">
      <div class="user">
        <img :src="user.avatar_url" :alt="user.id" />
        <p>{{ user.login }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  data: () => ({}),
  computed: {
    ...mapState(["users"]),
    ...mapGetters(["firstFiveUsers"]),
  },
  methods: {
    ...mapMutations(["setUsers"]),
    ...mapActions(["getUsers"]),
    getAllUsers() {
      this.getUsers();
      this.$store.commit("setInformationAboutMe");
      this.$store.dispatch("getInformationAboutMe");
    },
  },
  created() {
    this.getAllUsers();
  },
};
</script>

<style lang="scss">
p {
  color: black;
}
h1 {
  color: gray;
  font: italic bold 50px "Times New Roman";
}
.users {
  max-width: 900px;
  margin: 0 auto;
}

.user {
  display: flex;
  flex-direction: row;
  margin: 30px;
  box-shadow: 0 0 8px 0 grey;
  background: grey;
  img {
    width: 150px;
    margin-right: 30px;
  }
  p {
    color: white;
    text-transform: uppercase;
    font-size: 30px;
    margin: auto auto;
  }
}
.head {
  margin: auto auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 150px;
    border-radius: 50%;
    margin: 20px;
  }
}
.my-info {
  background: rgba(128, 128, 128, 0.334);
  border-radius: 5px;
  display: flex;
  &-data {
    margin: 20px 20px 0 0;

    text-align: center;
  }
}
</style>
