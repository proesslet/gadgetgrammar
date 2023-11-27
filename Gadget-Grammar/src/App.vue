<template>
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<script>
import axios from "axios";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {},
  mounted() {
    console.log("App mounted");
    axios({
      method: "get",
      url: "/user",
      withCredentials: true,
    })
      .then((res) => {
        if (res.data) {
          this.$store.commit("changeLoggedIn", true);
          this.$store.commit("changeUser", res.data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped></style>
