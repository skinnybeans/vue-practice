<template>
  <div class="container">
    <app-header></app-header>
    <component :is="'app-landing'"></component>
  </div>
</template>

<script>
import AppLanding from './components/Landing.vue'
import AppHeader from './components/shared/Header.vue'

  export default {
    components: {
      AppLanding,
      AppHeader
    }
  }
</script>

<style>

</style>
