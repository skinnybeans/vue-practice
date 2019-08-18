<template>
  <div class="col-md-4 col-xs-6">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h2 class="panel-title">{{ stockId }}</h2>
      </div>
      <div class="panel-body">
        <p>Sell Price: ${{ sellingPrice.toFixed(2) }}</p>
        <p>Owned: {{ ownedQuantity }}</p>
        <form class="form-horizontal" v-on:submit.prevent>
          <div class="form-group">
            <label for="quantity" class="col-xs-3 control-label">Quantity:</label>
            <div class="col-xs-3">
              <input class="form-control" type="number" id="quantity" v-model="sellQuantity">
            </div>
            <button class="btn btn-primary" @click="sellStock">Sell</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stockId'],
  computed: {
    ownedQuantity() {
      return this.$store.getters['portfolio/getOwnedStockById'](this.stockId).quantity
    },
    sellingPrice() {
      return this.$store.getters['stocks/getStockById'](this.stockId).price
    }
  },
  methods: {
    sellStock() {
      const sell = Math.min(parseInt(this.ownedQuantity), parseInt(this.sellQuantity))
      this.$store.dispatch('portfolio/sellStock', {id: this.stockId, quantity: sell, price: parseFloat(this.sellingPrice)})
      
      alert(`Sold ${this.stockId} stock`)
      this.sellQuantity = 0
    }
  },
  data() {
    return {
      sellQuantity: ''
    }
  }
}
</script>

<style scoped>
  .stock-header {
    padding: 5px;
  }
</style>