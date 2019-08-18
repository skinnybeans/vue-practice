export const stocks = {
  namespaced: true,
  state: {
    stocks: [
      { id: 'apple', price: 2.50 },
      { id: 'google', price: 5.50 },
      { id: 'microsoft', price: 2.00 },
    ]
  },
  mutations: {
    updateStockPrices(state) {
      state.stocks = [
        { id: 'apple', price: (Math.random() * 15 + 5).toFixed(2) },
        { id: 'google', price: (Math.random() * 15 + 5).toFixed(2) },
        { id: 'microsoft', price: (Math.random() * 15 + 5).toFixed(2) },
      ]
    } 
  },
  actions: {

  },
  getters: {
    getStocks: state => {
      return state.stocks
    },
    getStockById: (state) => (id) => {
      return state.stocks.find( a => {
        return a.id === id
      })
    }
  }
}