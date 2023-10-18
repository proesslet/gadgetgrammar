<template>
  <div>
    <Grid />
    <div class="legend">
      <div class="legend-item">
        <div class="color-box green"></div>
        <span>Correct Letter, Correct Spot</span>
      </div>
      <div class="legend-item">
        <div class="color-box yellow"></div>
        <span>Correct Letter, Incorrect Spot</span>
      </div>
      <div class="legend-item">
        <div class="color-box gray"></div>
        <span>Incorrect Letter, Incorrect Spot</span>
      </div>
    </div>
  </div>
</template>

<script>
import Grid from "../components/grid.vue";

export default {
  name: "Game",
  components: {
    Grid,
  },

  methods: {},
};
</script>

<style scoped>
.centered-text {
  text-align: center;
}
.legend {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.legend-item {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.color-box {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.gray {
  background-color: gray;
}
</style>
