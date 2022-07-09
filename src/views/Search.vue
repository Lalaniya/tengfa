<template>
  <div>
    <Select></Select>
    <CarTop></CarTop>
    <div class="list">
      <CarList
        v-for="(item,x) in list"
        :key="x"
        :item="item"
        class="list-car"
        @click="goDetail(item)"
      ></CarList>
    </div>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next, jumper"
        :total="total"
        :page-size="20"
        :pager-count="7"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import Select from './Search/Select.vue'
import CarList from '@/components/CarList.vue'
import CarTop from './Search/CarTop.vue'
// import CarList from '@/components/CarList.vue'
import { http } from '@/api/index'
import { nextTick, onBeforeMount, ref, watch } from 'vue';
import router from '@/router';
let total = ref(1)
// 渲染数据
let list = ref([])
// 请求数据
const Conent = (x) => {
  http({
    url: `/api/tfcar/car/list?page=${x}&sort=`,
    method: 'GET'
  }).then(res => {
    list.value=res.data.data.content
    total.value = res.data.data.totalElements
  })
}
onBeforeMount(() => {
  Conent(total.value)

})
// let currentPage = ref(1)
const handleCurrentChange = (val) => {
  Conent(val)
}
watch(list,()=>{
  nextTick(()=>{
    document.documentElement.scrollTop=0
  })
})
// 跳转详情
const goDetail = (item) => {
  router.push({
    path: 'detail',
    query:{
      ind:item.ind
    }
  })
}
</script>

<style lang="scss" scoped>
.page {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.list{
  margin-top: 20px;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  .list-car{
    margin-left: 23px;
    margin-bottom: 25px;
 }
}
</style>