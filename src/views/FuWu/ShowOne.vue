<template>
  <div class="sh" v-if="store.state.getFuWu">
    <img :src="store.state.getFuWu.shouhou" alt="">
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>

<style>
.sh{
    width: 1200px;
    margin: 30px auto;
}
</style>