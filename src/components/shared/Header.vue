<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <router-link to="/" class="navbar-brand" active-class="active" exact href="">Stock Trader</router-link>
    <div class="container-fluid">
      <ul class="navbar-nav">
        <router-link to="/portfolio" tag="li" active-class="active" class="nav-item"><a class="nav-link">Portfolio</a></router-link>
        <router-link to="/stocks" tag="li" active-class="active" class="nav-item"><a class="nav-link">Stocks</a></router-link>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item"><a href="#" class="nav-link nav-item" @click="updatePrices">End Day</a></li>
        <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              role="button"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href="#">
                Save & Load<span class="caret"></span>
            </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#" @click="saveData">Save</a>
            <a class="dropdown-item" href="#" @click="loadData">Load</a>
          </div>
        </li>
      </ul>
      <span class="navbar-text">Funds: {{ funds.toFixed(2) }}</span>
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