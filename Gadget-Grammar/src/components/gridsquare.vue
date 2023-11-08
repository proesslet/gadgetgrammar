<template>
  <div
    ref="gridSquare"
    class="tile"
    tabindex="0"
    @keydown="handleKeyDown"
    @mousedown.prevent
  >
    <!-- content of the grid square -->
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
      if (
        (keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 97 && keyCode <= 122)
      ) {
        this.letter = String.fromCharCode(keyCode).toUpperCase();
        this.focusNextSquare();
      } else if (keyCode === 8) {
        this.letter = "";
        event.preventDefault();
        this.focusPreviousSquare();
      } else if (keyCode === 13) {
        // Check for Enter key
        event.preventDefault();
        this.focusNextRow();
      }
    },
    focusNextSquare() {
      // Focus on the next GridSquare to the right
      const gridSquare = this.$refs.gridSquare;
      if (gridSquare.nextSibling.classList != undefined) {
        gridSquare.nextSibling.focus();
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
      // Get letters in the previous row
      const gridSquare = this.$refs.gridSquare;
      const row = gridSquare.closest(".row");

      const squares = row.querySelectorAll(".tile");
      const letters = Array.from(squares).map((square) => square.innerText);
      this.$emit("inputComplete", letters);

      // Focus on the first GridSquare in the next row
      const nextRow = row.nextElementSibling;
      if (nextRow) {
        const squares = nextRow.querySelectorAll(".tile");
        squares[0].focus();
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
