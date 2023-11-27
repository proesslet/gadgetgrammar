<template>
  <div
    class="m-auto text-center d-flex flex-row justify-content-center align-items-center w-25"
  >
    <div
      class="col-6 d-flex flex-column align-items-center justify-content-center"
    >
      <p class="mb-0" v-if="won == true">You Won!</p>
      <p class="mb-0" v-else>You Lost</p>
    </div>
    <div class="col-6">
      <button @click="refreshPage" type="button" class="btn btn-primary m-auto">
        Play again
      </button>
    </div>
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
      emit("newGame");
    },
  },
};
</script>
