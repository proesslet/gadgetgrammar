<template>
    <div>
    <h2>Game Over</h2>
        <p v-if="won == true">You Won!</p>
        <p v-else>You Lost</p>
        <button @click="refreshPage" type="button" class="btn btn-primary">Play again</button>
  </div>
</template>


<script>
import router from "../router"
export default {
    methods: {
    refreshPage() {
      // Use window.location.reload() to refresh the page
      router.push("/game") 
        },
  },
  name: "GameOver",
  props: {
    won: Boolean
},
mounted() {
    console.log(this.won)
}
};
</script>
<style>

</style>