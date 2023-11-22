<template>
  <div class="row">
    <div class="col-4">
      <h3>Welcome, {{ user.username }}</h3>
    </div>
    <div class="col-4 text-center">
      <UserStreak />
    </div>
    <div class="col-4">
      <button class="btn btn-danger float-end" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserStreak from "./userstreak.vue";

export default {
  name: "UserInfoBar",
  components: {
    UserStreak,
  },
  methods: {
    logout() {
      axios({
        method: "post",
        url: "/user/logout",
      }).then(() => {
        this.$store.commit("changeLoggedIn", false);
        this.$store.commit("changeUser", {});
        this.$router.push("/");
      });
    },
  },
  computed: {
    // Get the current user from the Vuex store
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
