<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/shared/Header.vue'

  export default {
    components: {
      AppHeader
    }
  }
</script>

<style>

</style>
