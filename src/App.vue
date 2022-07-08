<template>
  <div>
    <BarNav></BarNav>
    <router-view></router-view>
    <IndexBottom></IndexBottom>
  </div>
</template>

<script setup>
import IndexBottom from '@/components/IndexBottom.vue'
import BarNav from '@/components/BarNav.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
body {
  position: relative;
  z-index: 1;
}
</style>