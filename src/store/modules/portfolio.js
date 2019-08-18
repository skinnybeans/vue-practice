export const portfolio = {
  namespaced: true,
  state: {
    ownedStocks: [{ id: 'apple', quantity: 5}]
  },
  mutations: {
    buyStock(state, data) {
      state.ownedStocks.find( stock => {
        stock.id = data.id
      }).quantity += data.quantity
    }
  },
  actions: {
  },
  getters: {
    getOwnedStocks: state => {
      return state.ownedStocks
    },
    getOwnedStockById: (state) => (id) => {
      return state.ownedStocks.find(a => {
        return a.id === id
      })
    }
  }
}