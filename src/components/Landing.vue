<template>
  <div class="container">
    <div class="row">
      <div class="col-xs card border-0">
        <h1 class="card-title">Trade or view your portfolio</h1>
        <div class="card-body">
          <p class="card-text">You may save & load your data</p>
          <p class="card-text">Click end day to start a new day</p>
        </div>
        <h3 class="card-subtitle">Your funds: ${{funds}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.state.portfolio.funds
    }
  }
}
</script>

<style scoped>

</style>