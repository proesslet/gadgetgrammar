<template>
  <div class="tile" ref="gridSquare" @keydown="handleKeyDown" tabindex="0">
    {{ letter }}
  </div>
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
    handleKeyDown(event) {
      const keyCode = event.keyCode || event.which;
      if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
        this.letter = String.fromCharCode(keyCode).toUpperCase();
        this.$emit("inputComplete"); // Emit custom event to signal input completion
        this.focusNextSquare();
      } else if (keyCode === 8) {
        this.letter = "";
        event.preventDefault();
        this.focusPreviousSquare();
      } else if (keyCode === 13) { // Check for Enter key
        event.preventDefault();
        this.focusNextRow();
      }
    },
    focusNextSquare() {
      // Focus on the next GridSquare to the right
      const gridSquare = this.$refs.gridSquare;
      if (gridSquare.nextElementSibling) {
        gridSquare.nextElementSibling.focus();
      }
    },
    focusPreviousSquare() {
      // Focus on the previous GridSquare to the left
      const gridSquare = this.$refs.gridSquare;
      if (gridSquare.previousSibling) {
        gridSquare.previousSibling.focus();
      }
    },
    focusNextRow() {
      // Focus on the first GridSquare in the next row
      const gridSquare = this.$refs.gridSquare;
      const row = gridSquare.closest(".row");
      const nextRow = row.nextElementSibling;
      if (nextRow) {
        const firstSquare = nextRow.querySelector(".tile");
        if (firstSquare) {
          firstSquare.focus();
        }
      }
    },
  },
  mounted() {
    // Focus the first GridSquare in the first row
    const firstSquare = document.querySelector(".row:first-child .tile");
    firstSquare.focus();
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
  border: 1px solid white;
}
</style>
