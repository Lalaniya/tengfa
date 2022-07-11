<template>
  <div>
    <Select
      @getArr="getArr"
      @getModel="getModel"
      @getPrice="getPrice"
      @getBan="getBan"
    ></Select>
    <CarTop 
    @leftText="leftText"
    @rightText="rightText"
    ></CarTop>
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
import { isArray } from '@vue/shared';
let total = ref(1)
// 渲染数据
let list = ref([])
// 请求数据
const Conent = (x) => {
  http({
    url: `/api/tfcar/car/list?page=${x}&sort=`,
    method: 'GET'
  }).then(res => {
    list.value = res.data.data.content
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
watch(list, () => {
  nextTick(() => {
    document.documentElement.scrollTop = 0
  })
})
// 跳转详情
const goDetail = (item) => {
  router.push({
    path: 'detail',
    query: {
      ind: item.ind
    }
  })
}
// 车辆排序
const rightText = (text) => {
  http({
    url:'/api/tfcar/car/list?page=1&sort='+text,
    method: 'GET'
  }).then(res => {
    list.value = res.data.data.content
    total.value = res.data.data.totalElements
  })
}
// 车辆来源
// https://api.tf2sc.cn/api/tfcar/car/list?page=1&saleType=0
const leftText = (num) => {
  if (num === 'z') {
      Conent(1)
  } else {
    http({
      url: '/api/tfcar/car/list?page=1&saleType=' + num,
      method: 'GET'
    }).then(res => {
      list.value = res.data.data.content
      total.value = res.data.data.totalElements
    })
  }
}
// 品牌车系 价格选择
// /api/tfcar/car/list?page=1&currentPriceLt=10
const getModel = (lists) => {
  let text = ''
  if (lists == 1) {
    text = 'carModel='
  } else {
    text = Object.keys(lists)[0]
    text = text + '=' + lists[text]
  }
  http({
    url: '/api/tfcar/car/list?page=1&' + text,
    method: 'GET'
  }).then(res => {
    if (res.data.status === 200) {
      list.value = res.data.data.content
      total.value = res.data.data.totalElements
    }
  })
}
const getPrice = (lists) => {
  let text = '';
  console.log(lists);
  if (lists === 2) {
    text = ''
  } else {
    if (isArray(lists[Object.keys(lists)[0]])) {
      lists['currentPrices'].forEach(item => {
        text += '&currentPrices=' + item
      })
    } else {
      text = Object.keys(lists)[0]
      text = '&' + text + '=' + lists[text]
    }
  }
  console.log(text);
  http({
    url: '/api/tfcar/car/list?page=1' + text,
    method: 'GET'
  }).then(res => {
    if (res.data.status === 200) {
      list.value = res.data.data.content
      total.value = res.data.data.totalElements
    }
  })
}
// 品牌选择
const getBan = (lists) => {
  let text = 'carBrand=' + lists['carBrand']
  http({
    url: '/api/tfcar/car/list?page=1&sort=&' + text,
    method: 'GET'
  }).then(res => {
    if (res.data.status === 200) {
      list.value = res.data.data.content
      total.value = res.data.data.totalElements
    }
  })

}
// 获取用户选择内容
let obj = {}
const getArr = (lists) => {
  switch (lists) {
    case 0:
      lists = { displacements: 'z' }
      break;
    case 1:
      lists = { emissionStandardType: 'z' }
      break;
    case 2:
      lists = { mileages: 'z' }
      break;
    case 3:
      lists = { gearboxType: 'z' }
      break;
    case 4:
      lists = { driveType: 'z' }
      break;
    case 5:
      lists = { fuelType: 'z' }
      break;
    case 6:
      lists = { seat: 'z' }
      break;
  }
  obj = { ...obj, ...lists }
  var str = ''
  Object.keys(obj).forEach(item => {
    if (isArray(obj[item])) {
      obj[item].forEach(list => {
        str += '&' + item + "=" + list
      })
    } else {
      if (obj[item] !== 'z') {
        str += '&' + item + "=" + obj[item]
      } else {
        str += '&' + item + "="
      }
    }
  })
  // 发送请求
  http({
    url: '/api/tfcar/car/list?page=1&sort=' + str,
    method: 'GET'
  }).then(res => {
    if (res.data.status) {
      list.value = res.data.data.content
      total.value = res.data.data.totalElements
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
.list {
  margin-top: 20px;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  .list-car {
    margin-left: 23px;
    margin-bottom: 25px;
  }
}
</style>