<template>
  <div class="car-title">
    <div class="left">
      <p :class="{blue:_left==='全部'}"
      @click="leftText('全部')"
      >全部</p>
      <p :class="{blue:_left==='腾发自营'}"
      @click="leftText('腾发自营')"
      >腾发自营</p>
      <p :class="{blue:_left==='车主直售'}"
      @click="leftText('车主直售')"
      >车主直售</p>
      <p :class="{blue:_left==='限时秒杀'}"
      @click="leftText('限时秒杀')"
      >限时秒杀</p>
      <p :class="{blue:_left==='严选车源'}"
      @click="leftText('严选车源')"
      >严选车源</p>
    </div>
    <div class="right">
      <p :class="{blues:_right==='默认排序'}"
      @click="rightText('默认排序')"
      >默认排序</p>
      <span></span>
      <p :class="{blues:_right==='最新发布'}"
      @click="rightText('最新发布')"
      >最新发布</p>
      <span></span>
      <p :class="{blues:_right==='价格最高'}"
      @click="rightText('价格最高')"
      >价格最高</p>
      <span></span>
      <p :class="{blues:_right==='价格最低'}"
      @click="rightText('价格最低')"
      >价格最低</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// 变色
let _left = ref('全部')
let _right = ref('默认排序')
// 点击获取数据
const leftText = (text) => {
    _left.value=text
}
const rightText = (text) => {
    _right.value=text
}
</script>

<style lang="scss" scoped>
.car-title{
    width: 1200px;
    height: 56px;
    align-items: center;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(163, 163, 163);
    .left{
        display: flex;
        font-size: 18px;
        color: #333;
        font-weight: 600;
        p{
            margin-right: 30px;
            line-height: 56px;
            height: 56px;
            cursor: pointer;
        }
    }
    .blue{
        color: #5685fe;
        border-bottom: 3px solid #5685fe;
    }
    .blues{
        color: #5685fe;
    }
    .right{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 309px;
        height: 42px;
        border: 1px solid #f0f0f0;
        font-size: 14px;
        color: #333333;
        p{
            width: 76px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
        }
        span{
            width: 1px;
            height: 20px;
            background-color: #f0f0f0;
        }
    }
}
</style>