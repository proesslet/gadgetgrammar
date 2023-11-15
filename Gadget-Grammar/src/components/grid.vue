<template>
  <div class="centered-message-container">
    <p v-if="message" class="centered-message">{{ message }}</p>
  </div>
  <div>
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
    <GameOver v-if="gameOver" :won="gameWon" />
  </div>
</template>

<script>
import GridSquare from "./gridsquare.vue";
import GameOver from "./gamecomplete.vue";
import axios from "axios";
export default {
  name: "Grid",
  components: {
    GridSquare,
    GameOver,
  },
  data() {
    return {
      word: "",
      message: '',
      gameOver: false,
      gameWon: false,
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
  showMessage(msg, time = 1000) {
  this.message = msg
  if (time > 0) {
    setTimeout(() => {
      this.message = ''
    }, time)
  }
    },
    handleInputComplete(letters) {
      // Check if last row with letters is correct
      const row = this.board[this.currentRow];
      row.forEach((square, index) => {
        square.letter = letters[index];
      });

      const correctPositions = {};

this.board[this.currentRow].forEach((square, index) => {
  const currentLetter = this.word.charAt(index);

  if (square.letter === currentLetter) {
    square.state = "correct";
    
    correctPositions[currentLetter] = index;
  } else if (this.word.includes(square.letter)) {
    if (
      correctPositions.hasOwnProperty(square.letter) &&
      correctPositions[square.letter] !== index &&
      !this.word.includes(square.letter, index + 1)
    ) {
      square.state = "wrong";
    } else {
      square.state = "almost";
    }
  } else {
    square.state = "wrong";
  }
});
      this.gameComplete();
      // Make the board print in a readable format
      console.log(
        this.board.map((row) => row.map((square) => square.letter).join(" "))
      );
      this.currentRow++;
      if (this.currentRow > 5) {
        this.gameOver = true;
        this.showMessage(this.word.toUpperCase(), -1)
      }
    },
    gameComplete() {
      let count = 0;
      this.board[this.currentRow].forEach((square, index) => {
        if (square.letter == this.word.charAt(index)) {
          count++;
        }
      });
      if (count == 5) {
        this.gameWon = true;
        this.gameOver = true;
      }
    },
    getWord() {
      axios({
        method: "get",
        url: "/newWord",
      }).then((response) => {
        this.word = response.data.word.toUpperCase();
        console.log(this.word);
      });
    },
  },
  mounted() {
    this.getWord();
    console.log(this.word);
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
.centered-message-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.centered-text {
  display: flex;
  justify-content: center;
  align-items: center;
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
