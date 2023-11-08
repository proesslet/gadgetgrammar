<template>
  <div id="board">
    <div class="row" v-for="(row, rowIndex) in board" :key="rowIndex">
      <GridSquare
        v-for="(square, squareIndex) in row"
        :key="squareIndex"
        :correct="square.letter"
        :state="square.state"
        @inputComplete="handleInputComplete"
      ></GridSquare>
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
      word: "MOUSE",
      currentRow: 0,
      board: Array.from({ length: 6 }, () =>
        Array.from({ length: 5 }, () => ({
          letter: "",
          state: "initial",
        }))
      ),
    };
  },
  methods: {
    handleInputComplete(letters) {
      // Check if last row with letters is correct
      const row = this.board[this.currentRow];

      row.forEach((square, index) => {
        square.letter = letters[index];
      });

      // Make the board print in a readable format
      console.log(
        this.board.map((row) => row.map((square) => square.letter).join(" "))
      );

      this.currentRow++;
    },
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
