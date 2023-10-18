<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="text-center">Welcome to Gadget Grammar!</h1>
      </div>
    </div>
    <div class="row">
      <div
        class="col-3 d-flex flex-column m-auto h-100 justify-content-space-between"
      >
        <router-link to="/game" class="btn btn-primary m-2">Play</router-link>
        <button type="button" class="btn btn-primary m-2">Log in</button>
        <button type="button" class="btn btn-primary m-2">How to play</button>
        <button data-toggle="modal" data-target="#myModal" class="How to play"></button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./gameinstructions.vue";
export default {
  name: "Modal",
  components: {
    Modal
  },
  data() {
    return {
      right: "right",
    };
  },
};
</script>

