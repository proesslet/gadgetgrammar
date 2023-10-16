<template> 
    <h1>{{ msg }}</h1>
    <button type="button" class="button button1">Play</button>
    <button type="button" class="button button2">Log in</button>
    <button type="button" class="button button3">How to play</button>
</template>

<script>

export default {
    name: "Home",
    
    data() {
      return {
        msg: "Welcome to Gadget Grammar!",
    };
},
  methods: {},
};
</script>

<style>
    .button {
      border: solid;
      color: black;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      cursor: pointer;
    }

    .button1 {
      top: 60%;
    };
    
    

</style>

