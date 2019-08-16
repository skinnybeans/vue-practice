import AppPortfolioList from './components/portfolio/PortfolioList.vue'
import AppStocksList from './components/stocks/StockList.vue'
import AppLanding from './components/Landing.vue'

export const routes = [
  { path: '/portfolio', component: AppPortfolioList },
  { path: '/stocks', component: AppStocksList },
  { path: '/', component: AppLanding }
]