<template>
  <div
    ref="gridSquare"
    :class="tileClasses"
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
    state: {
      type: String,
      default: "initial",
    },
    initialLetter: {
      type: String,
      default: "",
    },
    reset: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      letter: this.initialLetter,
    };
  },
  watch: {
    initialLetter(newLetter) {
      this.letter = newLetter;
    },
    reset() {
      this.letter = this.initialLetter;
    },
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
        // Only focus the next row if the current row is full
        const row = this.$refs.gridSquare.closest(".row");
        const squares = row.querySelectorAll(".tile");
        const letters = Array.from(squares).map((square) =>
          square.innerText.trim()
        );
        if (
          letters.length === 5 &&
          letters.every((letter) => letter.length === 1)
        ) {
          this.focusNextRow();
        }
      }
    },
    focusNextRow() {
      // Focus on the first GridSquare in the next row
      const gridSquare = this.$refs.gridSquare;
      const row = gridSquare.closest(".row");

      const squares = row.querySelectorAll(".tile");
      const letters = Array.from(squares).map((square) =>
        square.innerText.trim()
      );

      // Check if all squares in the row are filled
      if (
        letters.length === 5 &&
        letters.every((letter) => letter.length === 1)
      ) {
        // All squares are filled, emit the inputComplete event
        this.$emit("inputComplete", letters);

        // Focus on the first GridSquare in the next row
        const nextRow = row.nextElementSibling;
        if (nextRow) {
          const nextSquares = nextRow.querySelectorAll(".tile");
          nextSquares[0].focus();
        }
      }
      // If not all squares are filled, do nothing (user cannot proceed)
    },
    focusNextSquare() {
      // Focus on the next GridSquare to the right
      const gridSquare = this.$refs.gridSquare;
      if (gridSquare.nextSibling.classList) {
        console.log(gridSquare.nextSibling);
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
  computed: {
    tileClasses() {
      return {
        tile: true,
        [this.state]: true,
      };
    },
  },
  mounted() {
    // Focus the first GridSquare in the first row
    const firstSquare = document.querySelector(".row:first-child .tile");
    if (firstSquare) {
      firstSquare.focus();
    }
  },
};
</script>

<style scoped>
.tile {
  display: flex;
  justify-content: center;
  align-items: center;
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

.correct {
  background-color: #538d4e;
}

.almost {
  background-color: #b49f3a;
}

.wrong {
  background-color: #676767;
}

.initial {
  background-color: transparent;
}
</style>
