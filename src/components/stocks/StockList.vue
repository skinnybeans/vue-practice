<template>
  <div>
    <h1>Stock List</h1>
    <div class="row">
      <app-stock-item v-for="stock in stocks" :key="stock" :name="stock"></app-stock-item>
    </div>
  </div>  
</template>

<script>
import AppStockItem from './StockItem.vue'

export default {

  data() {
    return {
      stocks: ['apple', 'google', 'microsoft']
    }
  },
  components: {
    AppStockItem
  }
}
</script>