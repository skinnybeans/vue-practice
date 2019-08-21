<template>
  <div class="col-md-6 col-lg-4 mb-3">
    <div class="card border border-success rounded">
      <div class="card-header border-success bg-success text-white py-1">
        <h4 class="card-title mb-0">{{ id }}</h4>
      </div>
      <div class="card-body">
        <p class="card-text">Price: ${{stock.price.toFixed(2)}}</p>
        <div>
          <form v-on:submit.prevent>
            <div class="form-group row justify-content-between mx-0">
              <label for="quantity" class="col-6 col-form-label pl-0">Quantity:</label>
              <div class="col-6">
                <input class="form-control" type="number" id="quantity" v-model.number="quantity">
              </div>
            </div>
            <button
              class="btn btn-primary"
              @click="buyStock"
              :disabled="quantity <= 0 || !Number.isInteger(quantity) ">
                Buy
              </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['id'],
  computed: {
    stock () {
      return this.$store.getters['stocks/getStockById'](this.id)
    }
  },
  methods: {
    buyStock() {
      this.$store.commit('portfolio/buyStock', {id: this.id, quantity: this.quantity, price: this.stock.price})
      alert(`Bought ${this.id} stock`)
      this.quantity = 0
    }
  },
  data() {
    return {
      quantity: 0
    }
  }
}
</script>

<style scoped>
  .stock-header {
    padding: 5px;
  }
</style>