<template>
  <div>
    <h1>Portfolio List</h1>
    <div class="row">
      <app-portfolio-item v-for="stock in stocks" :key="stock" :name="stock"></app-portfolio-item>
    </div>
  </div>  
</template>

<script>
import AppPortfolioItem from './PortfolioItem.vue'

export default {

  data() {
    return {
      stocks: ['apple', 'google', 'microsoft']
    }
  },
  components: {
    AppPortfolioItem
  }
}
</script>