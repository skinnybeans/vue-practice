export const portfolio = {
  namespaced: true,
  state: {
    ownedStocks: [{ id: 'apple', quantity: 5}],
    funds: 5000
  },
  mutations: {
    buyStock(state, data) {
      data.quantity = Number(data.quantity)

      const stock = state.ownedStocks.find( item => {
        return item.id === data.id
      })

      if (stock) {
        stock.quantity += data.quantity
      } else {
        state.ownedStocks.push(data)
      }
      
      state.funds -= data.quantity * data.price
    },
    sellStock(state, data) {
      data.stock.quantity -= data.quantity

      state.funds += (data.quantity * data.price)
    }
  },
  actions: {
    sellStock(context, data) {
      const stock = context.getters.getOwnedStockById(data.id);
      context.commit('sellStock', {stock: stock, quantity: data.quantity, price: data.price})
    }
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