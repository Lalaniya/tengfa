<template>
  <ul class="box-select">
    <li>
      <span>品牌：</span>
      <div v-for="item in CarModel.convenientBrands" :key="item.queryRules">{{item.label}}</div>
    </li>
    <li>
      <span>车系：</span>
      <div></div>
    </li>
    <li>
      <span>车型：</span>
      <div>
        <span>不限</span>
        <span v-for="item in CarModel.convenientModels" :key="item.queryRules">{{item.label}}</span>
      </div>
    </li>
    <li>
      <span>价格：</span>
      <div></div>
    </li>
    <li>
      <span>更多：</span>
      <div></div>
    </li>
  </ul>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
onBeforeMount(() => {
  store.dispatch('reqgetCarSelect')
})
const CarModel = computed(() => {
    // console.log(store.state.CarSelect[2].convenientModels,1111);
  const _model=store.state.CarSelect[2]
  console.log(_model,11112);
  return _model
})
</script>

<style lang="scss" scoped>
.box-select {
  width: 1200px;
  height: 320px;
  box-sizing: border-box;
  margin: 0 auto;
    li {
      height: 60px;
      font-size: 14px;
      color: #333333;
      line-height: 40px;
      display: flex;
    }
}
</style>