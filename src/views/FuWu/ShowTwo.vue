<template>
  <div class="sh" v-if="store.state.getFuWu">
    <img :src="store.state.getFuWu.gaizhuang" alt="">
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>

<style lang="scss" scoped>
.sh{
    width: 30px auto;
    text-align: center;
    img {
        width: 1000px;
    } 
}
</style>