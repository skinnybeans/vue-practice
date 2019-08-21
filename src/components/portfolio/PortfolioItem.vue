<template>
  <div class="col-md-6 col-lg-4 mb-3">
    <div class="card border border-primary rounded">
      <div class="card-header  border-primary bg-primary text-white py-1">
        <h4 class="card-title mb-0">{{ stockId }}</h4>
      </div>
      <div class="card-body">
        <p class="card-text">Sell Price: ${{ sellingPrice.toFixed(2) }}</p>
        <p class="card-text">Owned: {{ ownedQuantity }}</p>
        <form v-on:submit.prevent>
          <div class="form-group row justify-content-between mx-0">
            <label for="quantity" class="col-6 col-form-label pl-0">Quantity:</label>
            <div class="col-6">
              <input class="form-control" type="number" id="quantity" v-model.number="sellQuantity">
            </div>
          </div>
          <button
            class="btn btn-primary"
            @click="sellStock"
            :disabled="sellQuantity <= 0 || sellQuantity > ownedQuantity || !Number.isInteger(sellQuantity)">
              Sell
          </button>
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