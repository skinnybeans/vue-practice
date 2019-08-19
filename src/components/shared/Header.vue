<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-left">
        <ul class="nav navbar-nav">
          <router-link to="/" tag="li" active-class="active" exact><a>Stock Trader</a></router-link>
          <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
          <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
        </ul>
      </div>
      <div class=" navbar-right">
        <ul class="nav navbar-nav">
          <li><a href="#" @click="updatePrices">End Day</a></li>
          <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Save & Load<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save</a></li>
              <li><a href="#" @click="loadData">Load</a></li>
            </ul>
          </li>
        </ul>
        <p class="navbar-text">Funds: {{ funds.toFixed(2) }}</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.state.portfolio.funds
    }
  },
  methods: {
    updatePrices() {
      alert('A new day has dawned')
      this.$store.commit('stocks/updateStockPrices')
    },
    saveData() {
      // save stocks and portfolio
      const stocks = this.$store.state.stocks.stocks
      const portfolio = {
        ownedStocks: this.$store.state.portfolio.ownedStocks,
        funds: this.$store.state.portfolio.funds
      }

      this.$http.put('stocks.json', {stocks, portfolio})
        .then(
          response => {
            console.log(response)
          },
          error => {
            console.log(error)
          }
       )
      // https://vue-http-e1211.firebaseio.com/
    },
    loadData() {
      this.$http.get('stocks.json')
        .then(
          response => {
            return response.json()
          },
          error => {
            console.log(error)
          }
        )
        .then(
          data => {
            // save data back into the model
            this.$store.state.stocks.stocks = data.stocks

            this.$store.state.portfolio.funds = data.portfolio.funds
            this.$store.state.portfolio.ownedStocks = data.portfolio.ownedStocks
          }
        )
    }
  }
}
</script>