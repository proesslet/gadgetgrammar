<template>
  <div class="tile"></div>
</template>

<script>
export default {
  name: "GridSquare",
  props: {
    correct: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      letter: "",
    };
  },
  methods: {
    check() {
      if (correct == "right") {
        alert("Right");
        input.style.border = "10px solid green";
      }
    },
  },
  onload() {
    this.check();
  },
};
</script>

<style scoped>
.tile {
  width: 100%;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  text-transform: uppercase;
  user-select: none;
  position: relative;
  border: 1px solid black;
}
</style>
