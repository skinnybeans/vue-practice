<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-6">
        <ul class="nav nav-pills">
          <router-link to="/" tag="li" active-class="active" exact><a>Stock Trader</a></router-link>
          <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
          <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
        </ul>
      </div>
      <div class="col-xs-6">
        <ul class="nav nav-pills">
          <li><a>End Day</a></li>
          <li><a>Save & Load</a></li>
          <li><a>Funds:</a></li>
        </ul>
      </div>
      <div class="col-xs-12">
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>