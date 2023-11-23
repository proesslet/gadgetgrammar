<template>
  <div class="centered-message">
    <h2>Game Over</h2>
    <p v-if="won == true">You Won!</p>
    <p v-else>You Lost</p>
    <button @click="refreshPage" type="button" class="btn btn-primary">
      Play again
    </button>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "GameOver",
  props: {
    won: Boolean,
  },
  methods: {
    refreshPage() {
      console.log("refreshing page");
      this.$router.go();
    },
  },
};
</script>
<style></style>
