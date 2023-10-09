<template>
  <div class="tile" @keydown="handleKeyDown" tabIndex = "0">
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
      // Check if the pressed key is a letter (A-Z)
      const keyCode = event.keyCode || event.which;
      if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
        // Update the letter property with the pressed letter
        this.letter = String.fromCharCode(keyCode).toUpperCase();
        this.$emit("inputComplete"); // Emit custom event to signal input completion
      } else if (keyCode === 8) {
        // If Backspace key is pressed, delete the letter
        this.letter = "";
        event.preventDefault(); // Prevent the default backspace behavior
      }
    },
    mounted() {
      // Automatically focus on this GridSquare when it's mounted
      this.$refs.gridSquare.focus();
    },
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
