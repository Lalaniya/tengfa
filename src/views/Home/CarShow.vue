<template>
  <div class="box">
    <template
      v-for="(item,i) in CarShow"
      :key="item.id"
    >
      <div
        class='carone'
        v-if="i<2"
        @click="add(item.id)"
      >
        <div class="imgs">
          <img
            :src="item.cover"
            alt=""
          >
        </div>
        <div>
          <p class="title">{{item.title}}</p>
          <p class="simple">{{item.simple}}</p>
          <p class="utime">{{item.utime.slice(0,10)}}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
const router = useRouter()
//发送请求获取信息
onBeforeMount(() => {
  store.dispatch('reqgetListCarShow')
})
const CarShow = computed(() => {
  return store.state.CarShow
})
const add = (id) => {
  router.push({
    name: 'appnew',
    params:{
      id
    }
  })
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  .carone {
    margin-right: 15px;
    background-color: #fff;
    width: 380px;
    height: 488px;
    border-radius: 15px;
    overflow: hidden;
    margin-right: 70px;
    margin-bottom: 30px;
    .imgs {
      width: 380px;
      height: 285px;
      overflow: hidden;
    }
    img {
      width: 385px;
      height: 290px;
    }
    .title {
      box-sizing: border-box;
      padding-left: 10px;
      font-size: 20px;
      font-weight: 600;
      line-height: 45px;
    }
    .simple {
      box-sizing: border-box;
      padding-left: 10px;
      font-size: 14px;
      color: #666666;
      margin-top: 30px;
      line-height: 35px;
      margin-bottom: 15px;
    }
    .utime {
      box-sizing: border-box;
      padding-left: 10px;
      color: #999999;
      font-size: 12px;
    }
  }
}
.carone:hover{
    box-shadow: 0 0 15px #bbbbbb;
    cursor: pointer;
    .title{
        color: #5b89fe;
    }
}
</style>