<template>
  <div class="col-md-4 col-xs-6">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h2 class="panel-title">{{ name }}</h2>
      </div>
      <div class="panel-body">
        <p>Price: $$</p>
        <p>Owned: xx</p>
        <form class="form-horizontal" v-on:submit.prevent>
          <div class="form-group">
            <label for="quantity" class="col-xs-3 control-label">Quantity:</label>
            <div class="col-xs-3">
              <input class="form-control" type="text" id="quantity">
            </div>
            <button class="btn btn-primary" @click="sellStock">Sell</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  methods: {
    sellStock() {
      console.log('sold something')
    }
  }
}
</script>

<style scoped>
  .stock-header {
    padding: 5px;
  }
</style>