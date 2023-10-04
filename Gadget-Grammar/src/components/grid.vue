<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-row">
      <GridSquare v-for="n in 5" :correct="right" />
    </div>
    <div class="d-flex flex-row">
      <GridSquare v-for="n in 5" :correct="right" />
    </div>
    <div class="d-flex flex-row">
      <GridSquare v-for="n in 5" :correct="right" />
    </div>
    <div class="d-flex flex-row">
      <GridSquare v-for="n in 5" :correct="right" />
    </div>
    <div class="d-flex flex-row">
      <GridSquare v-for="n in 5" :correct="right" />
    </div>
  </div>
</template>

<script>
import GridSquare from "./gridsquare.vue";

export default {
  name: "Grid",
  components: {
    GridSquare,
  },
  data() {
    return {
      right: "right",
    };
  },
};
</script>
