<template>
  <div id="keyboard">
    <div v-for="row in keyboardLayout" :key="row" class="keyboard-row">
      <button
        v-for="letter in row"
        :key="letter"
        :class="{
          'used-key': usedLetters.has(letter),
          correct: letterStates[letter] === 'correct',
          almost: letterStates[letter] === 'almost',
          wrong: letterStates[letter] === 'wrong',
        }"
        @click="keyPress(letter)"
      >
        {{ letter }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keyboard",
  props: {
    usedLetters: Set,
    letterStates: Object, // This is the new prop for letter states
  },
  data() {
    return {
      keyboardLayout: [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"],
      ],
    };
  },
  methods: {
    keyPress(letter) {
      // Emit an event when a key is pressed
      this.$emit("letterChosen", letter);
    },
  },
};
</script>

<style>
#keyboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

#keyboard .keyboard-row button {
  font-size: 2rem;
  padding: 10px;
  width: 60px;
  height: 60px;
  text-align: center;
  background-color: transparent; /* Make the button background transparent */
  color: white; /* Make the button text white */
  border: 1px solid white; /* Add a white border around the button */
  margin: 2px; /* Add some margin around the button */
}

/* Additional styles for the letter states */
.correct {
  background-color: #538d4e; /* This should match the correct color in gridsquare.vue */
}

.almost {
  background-color: #b49f3a; /* This should match the almost color in gridsquare.vue */
}

.wrong {
  background-color: #676767; /* This should match the wrong color in gridsquare.vue */
}
</style>
