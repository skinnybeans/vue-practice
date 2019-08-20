<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>Stock List</h1>
      </div>
    </div>
    <div class="row">
      <app-stock-item v-for="stock in stocks" :key="stock.id" :id="stock.id"></app-stock-item>
    </div>
  </div>  
</template>

<script>
import { mapGetters } from 'vuex'

import AppStockItem from './StockItem.vue'

export default {
  computed: {
    ...mapGetters('stocks',{
      stocks: 'getStocks'
    })
  },
  data() {
    return {
      // stocks: ['apple', 'google', 'microsoft']
    }
  },
  components: {
    AppStockItem
  }
}
</script>