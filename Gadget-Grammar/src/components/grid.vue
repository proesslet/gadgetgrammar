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
    <Keyboard
      :usedLetters="new Set(word)"
      :letterStates="letterStates"
      @letterChosen="handleInputComplete"
    />
    <GameOver v-if="gameOver" :won="gameWon" />
    <div class="streak-container">
      <UserStreak />
    </div>
  </div>
</template>

<script>
import Keyboard from "./keyboard.vue";
import GridSquare from "./gridsquare.vue";
import GameOver from "./gamecomplete.vue";
import UserStreak from "./userstreak.vue";
import axios from "axios";
export default {
  name: "Grid",
  components: {
    GridSquare,
    GameOver,
    Keyboard,
    UserStreak,
  },
  data() {
    return {
      word: "",
      message: "",
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
  computed: {
    letterStates() {
      const letterStates = {};
      this.board.forEach((row) => {
        row.forEach((square) => {
          letterStates[square.letter] = square.state;
        });
      });
      return letterStates;
    },
  },
  methods: {
    showMessage(msg, time = 1000) {
      this.message = msg;
      if (time > 0) {
        setTimeout(() => {
          this.message = "";
        }, time);
      }
    },
    handleInputComplete(letters) {
      // Check if last row with letters is correct
      const row = this.board[this.currentRow];
      row.forEach((square, index) => {
        square.letter = letters[index];
      });

      const updatedBoard = this.board.slice(); // create a copy of the board

      updatedBoard[this.currentRow].forEach((square, index) => {
        if (this.word.includes(square.letter)) {
          if (square.letter == this.word.charAt(index)) {
            square.state = "correct";
          } else {
            square.state = "almost";
          }
        } else {
          square.state = "wrong";
        }
      });

      this.board = updatedBoard; // update the board with the new state

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
      this.currentRow++;
      if (this.currentRow > 5) {
        this.gameOver = true;
        this.showMessage(this.word.toUpperCase(), -1);
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
.streak-container {
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 3em;
}
</style>
