<template>
  <div>
    <Banner></Banner>
    <ConvenientBrands class="posi"></ConvenientBrands>
    <TitleText>
      <template #title-text>二手车</template>
      <template #go><span @click="goList">查看更多</span></template>
    </TitleText>
  </div>
</template>

<script setup>
import ConvenientBrands from './Home/ConvenientBrands.vue'
import Banner from './Home/Banner.vue'
import TitleText from '@/components/TitleText.vue'
import { onBeforeMount, onMounted } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
// 访问vuex 拿到车辆详情
onBeforeMount(() => {
  store.dispatch('reqgetListCar')
})
onMounted(() => {

})
const goList = () => {
  console.log(1);
}
</script>

<style lang="scss" scoped>
div {
  .posi {
    position: relative;
    top: -50px;
    z-index: 10;
    background-color: #fff;
  }
}
</style>