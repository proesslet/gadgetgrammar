<template>
  <div class="d-flex flex-row">
    <p class="mr-3">Welcome, {{ user.username }}</p>
    <a href="#" @click="logout">Logout</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserInfoBar",
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
