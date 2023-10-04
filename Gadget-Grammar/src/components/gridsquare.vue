<template>
  <input type="text" v-model="letter" placeholder="" />
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
