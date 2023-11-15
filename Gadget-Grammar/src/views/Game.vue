<template>
  <div>
    <UserInfoBar v-if="loggedIn" />
    <Grid />
  </div>
</template>

<script>
import Grid from "../components/grid.vue";
import UserInfoBar from "../components/userinfobar.vue";

export default {
  name: "Game",
  components: {
    Grid,
    UserInfoBar,
  },
  computed: {
    // Get the current user from the Vuex store
    user() {
      return this.$store.state.user;
    },
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
};
</script>
