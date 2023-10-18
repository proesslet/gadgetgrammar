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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.button {
  border: solid;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.button1 {
  top: 60%;
}
</style>
