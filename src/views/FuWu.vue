<template>
  <div>
    <BanTitle></BanTitle>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import BanTitle from './FuWu/BanTitle.vue'
const store = useStore()
onBeforeMount(() => {
  store.dispatch("reqgetFuWu")
})
</script>

<style>
.fw {
  width: 1200px;
  margin: 30px auto;
}
</style>