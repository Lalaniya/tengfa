<template>
  <div>
    <Banner></Banner>
    <ConvenientBrands class="posi"></ConvenientBrands>
    <TitleText>
      <template #title-text>二手车</template>
      <template #go><span @click="goList">查看更多</span></template>
    </TitleText>
    <div class="list">
      <CarList 
      v-for="(item,x) in Carlist" 
      :key="x" 
      :item="item"
      class="list-car"
      @click="goDetail(item)"
      ></CarList>
    </div>
    <TitleText>
      <template #title-text>新车</template>
      <template #go><span @click="goList">查看更多</span></template>
    </TitleText>
    <TitleText>
      <template #title-text>车展</template>
      <template #go><span @click="goList">查看更多</span></template>
    </TitleText>
    <CarShow></CarShow>
  </div>
</template>

<script setup>
import ConvenientBrands from './Home/ConvenientBrands.vue'
import Banner from './Home/Banner.vue'
import TitleText from '@/components/TitleText.vue'
import CarList from '@/components/CarList.vue'
import CarShow from './Home/CarShow.vue'
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { useStore } from 'vuex'
import router from '@/router'
const store = useStore()
// 访问vuex  请求车辆列表获取
onBeforeMount(() => {
  store.dispatch('reqgetListCar')
})
// 车辆列表获取
const Carlist = computed(() => {
  return store.state.Carlist.content
})
// 去车辆列表
const goList = () => {
  console.log(1);
}
// 去车辆详情
const goDetail = (id) => {
  router.push({
    name:'detail',
    query:{
      ind:id.ind
    }
  })
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
  .list{
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    .list-car{
      margin-right: 23px;
      margin-bottom: 25px;
    }
  }
}
</style>