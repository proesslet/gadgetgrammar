<template>
  <div><span v-text="userStreak"></span>🔥</div>
</template>

<script>
export default {
  name: "UserStreak",
  computed: {
    userStreak() {
      return this.$store.state.user.currentstreak;
    },
  },
};
</script>

<style scoped>
div {
  font-size: 2rem;
}
</style>
