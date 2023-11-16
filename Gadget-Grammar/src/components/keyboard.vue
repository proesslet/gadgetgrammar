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
    letterStates: Object,
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

.keyboard-row {
  display: flex;
  justify-content: center;
}

#keyboard .keyboard-row button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 10px;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px; /* This assumes your button height is 60px */
  background-color: transparent;
  color: white;
  border: 1px solid white;
  margin: 2px;
}

#keyboard .keyboard-row button.correct {
  background-color: #538d4e;
}

#keyboard .keyboard-row button.almost {
  background-color: #b49f3a;
}

#keyboard .keyboard-row button.wrong {
  background-color: #676767;
}
</style>
