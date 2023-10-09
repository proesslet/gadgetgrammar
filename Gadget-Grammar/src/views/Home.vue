<template>
  <h1>{{ msg }}</h1>
  <Grid />
</template>

<script>
import Grid from "../components/grid.vue";

export default {
  name: "Home",
  components: {
    Grid,
  },
  data() {
    return {
      msg: "Welcome to Gadget Grammar!",
    };
  },
  methods: {},
};
</script>
