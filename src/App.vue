<template>
  <div class="container">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.25s;
    animation: slide-in 0.25s;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 0.25s;
    animation: slide-out 0.25s;
  }

  .fade-leave-to {
    opacity: 0;
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
</style>
