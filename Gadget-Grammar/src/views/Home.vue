<!-- <template>
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
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#instructionsModal"
          class="btn btn-primary m-2"
        >
          How to play
        </button>
      </div>
    </div>
    <Modal />
  </div>
</template> -->

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
        <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#loginModal">Log in</button>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#instructionsModal"
          class="btn btn-primary m-2"
        >
          How to play
        </button>
      </div>
    </div>
    <LoginModal />
    <InstructionsModal />
    <Modal />
  </div>
</template>

<script>
import LoginModal from "../components/login.vue";
import InstructionsModal from "../components/gameinstructions.vue";
export default {
  name: "Home",
  components: {
    LoginModal,
    InstructionsModal,
  },
  data() {
    return {
      right: "right",
      showModal: false,
    };
  },
};
</script>
