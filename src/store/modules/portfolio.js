export const portfolio = {
  namespaced: true,
  state: {
    ownedStocks: [{ id: 'apple', quantity: 5}],
    funds: 10000
  },
  mutations: {
    buyStock(state, data) {
      data.quantity = Number(data.quantity)
      // do we already own the stock
      const stock = state.ownedStocks.find( item => {
        return item.id === data.id
      })

      if (stock) {
        stock.quantity += data.quantity
      } else {
        state.ownedStocks.push(data)
      }
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