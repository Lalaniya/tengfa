<template>
  <div class="bj">
    <div class="conten">
      <div class="search-gd">腾发二手车</div>
      <div class="search">
        <input
          type="text"
          v-model="value"
          placeholder="搜索品牌、车型"
        >
        <el-button
          type="primary"
          class="btn"
          @click="goSearch"
        >搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router=useRouter()
let value = ref('')
const goSearch = () => {
  router.push({
    name:'search',
  })
  console.log(value.value);

}
</script>

<style lang="scss" scoped>
.bj {
  height: 300px;
  background-image: url('https://www.tf2sc.cn/static/img/%E8%93%9D%E8%89%B2%E8%83%8C%E6%99%AF.png');
  .conten {
    width: 1200px;
    box-sizing: border-box;
    padding-top: 80px;
    margin: 0 auto;
    .search-gd {
      margin-bottom: 20px;
      font-family: pmzd;
      line-height: 50px;
      font-size: 40px;
      /* color: #F5CC4F; */
      background-image: -webkit-linear-gradient(top, #f9edd5, #f5cb4f);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .search {
      width: 640px;
      height: 50px;
      border: 2px solid #f0f0f0;
      border-radius: 10px;
      overflow: hidden;
      font-size: 18px;
      input {
        width: 520px;
        border: none;
        outline: none;
        height: 50px;
        box-sizing: border-box;
        padding: 0px 15px;
      }
      .btn {
        font-size: 18px;
        width: 120px;
        border-radius: 0px;
        height: 50px;
      }
    }
  }
}
</style>