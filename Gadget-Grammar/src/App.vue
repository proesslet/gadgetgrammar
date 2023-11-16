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
    axios({
      method: "get",
      url: "/user",
      withCredentials: true,
    }).then((res) => {
      if (res.data) {
        this.$store.commit("changeLoggedIn", true);
        this.$store.commit("changeUser", res.data);
      }
    });
  },
};
</script>

<style scoped></style>
