<template>
  <div id="board">
    <div class="row">
      <GridSquare v-for="n in 5" :correct="right" />
    </div>
    <div class="row">
      <GridSquare v-for="n in 5" :correct="right" />
    </div>
    <div class="row">
      <GridSquare v-for="n in 5" :correct="right" />
    </div>
    <div class="row">
      <GridSquare v-for="n in 5" :correct="right" />
    </div>
    <div class="row">
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

<style scoped>
#board {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  padding: 10px;
  box-sizing: border-box;
  --height: min(420px, calc(var(--vh, 100vh) - 310px));
  height: var(--height);
  width: min(350px, calc(var(--height) / 6 * 5));
  margin: 0px auto;
}
.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}
</style>
