<template>
  <header>
    <div class="box">
      <div class="left">
        <router-link to="/home" custom v-slot="{navigate}">
          <img
          src="https://www.tf2sc.cn/static/img/%E8%85%BE%E5%8F%91.png"
          alt=""
          @click="navigate"
        >
        </router-link>
        <p @click="show">
          <el-icon color="#a6aac2">
            <AddLocation />
          </el-icon>
          <span>{{city}}</span>
        </p>
      </div>
      <div class="right">
        <router-link
          to="/home"
          active-class="red"
        >首页</router-link>
        <router-link
          to="/search"
          active-class="red"
        >二手车</router-link>
        <router-link
          to="/newcar"
          active-class="red"
        >新车</router-link>
        <router-link
          to="/sellcar"
          active-class="red"
        >卖车</router-link>
        <router-link
          to="/"
          active-class="red"
        >腾发金融</router-link>
        <router-link
          to="/fuwu"
          active-class="red"
        >腾发服务</router-link>
        <router-link
          to="/"
          active-class="red"
        >咨询电话<span>11111111</span></router-link>
      </div>
    </div>
    <City
      v-show="bool"
      @getList="getlist"
      @cancel="cancel"
    ></City>
  </header>
</template>

<script setup>
import City from './BarNav/City.vue'
import { ref } from 'vue';
let bool = ref(false)
let city = ref('全国')
const show = () => {
  bool.value = true
}
const getlist = (list) => {
  console.log(list,123);
  city.value=list.name
  bool.value = false
}
const cancel = () => {
  bool.value = false
}
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  background-color: #ffffff;
  position: relative;
  z-index: 99;
  position: fixed;
  width: 100vw;
  top: 0px;
  .box {
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 15px;
    background-color: #ffffff;
  }
  div {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      width: 200px;
      height: 42px;
      p {
        display: flex;
        align-items: center;
        span {
          font-size: 14px;
          color: #333;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .right {
      width: 700px;
      height: 42px;
      a {
        text-decoration: none;
        color: #333333;
        box-sizing: border-box;
        padding: 12px 0;
      }
      .red {
        border-bottom: 3px solid #5685fe;
      }
    }
  }
}
</style>