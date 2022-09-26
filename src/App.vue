<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import tabBar from './components/tab-bar/tab-bar.vue';

  // route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象
  const route = useRoute();

</script>

<style scoped>
  
</style>
