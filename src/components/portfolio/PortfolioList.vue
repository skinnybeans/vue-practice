<template>
  <div>
    <h1>Portfolio List</h1>
    <div class="row">
      <app-portfolio-item v-for="stock in stocks" :key="stock.id" :stockId="stock.id"></app-portfolio-item>
    </div>
  </div>  
</template>

<script>
import { mapGetters } from 'vuex'

import AppPortfolioItem from './PortfolioItem.vue'

export default {
  computed: {
    stocks() {
      return this.$store.getters['portfolio/getOwnedStocks']
    },
    // ...mapGetters('portfolio', {
    //   stocks: 'getOwnedStocks'
    // })
  },
  components: {
    AppPortfolioItem
  },
  created() {
  }
}
</script>