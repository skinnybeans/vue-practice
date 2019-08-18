<template>
  <div class="col-md-4 col-xs-6">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h2 class="panel-title">{{ id }}</h2>
      </div>
      <div class="panel-body">
        <p>Price: ${{stock.price}}</p>
        <form class="form-horizontal" v-on:submit.prevent>
          <div class="form-group">
            <label for="quantity" class="col-xs-3 control-label">Quantity:</label>
            <div class="col-xs-3">
              <input class="form-control" type="text" id="quantity" v-model="quantity">
            </div>
            <button class="btn btn-primary" @click="buyStock">Buy</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'



export default {
  props: ['id'],
  computed: {
    // ...mapGetters('stocks',{
    //   stockfunc: 'getStockById'
    // }),
    stock () {
      //return this.stockfunc(this.id)
      return this.$store.getters['stocks/getStockById'](this.id)
    }
  },
  methods: {
    buyStock() {
      this.$store.commit('portfolio/buyStock', {id: this.id, quantity: this.quantity})
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