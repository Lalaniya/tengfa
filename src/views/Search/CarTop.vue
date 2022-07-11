<template>
  <div class="car-title">
    <div class="left">
      <p :class="{blue:_left==='全部'}"
      @click="leftText('全部','search')"
      >全部</p>
      <p :class="{blue:_left==='腾发自营'}"
      @click="leftText('腾发自营',0)"
      >腾发自营</p>
      <p :class="{blue:_left==='车主直售'}"
      @click="leftText('车主直售',1)"
      >车主直售</p>
      <p :class="{blue:_left==='限时秒杀'}"
      @click="leftText('限时秒杀',2)"
      >限时秒杀</p>
      <p :class="{blue:_left==='严选车源'}"
      @click="leftText('严选车源',3)"
      >严选车源</p>
    </div>
    <div class="right">
      <p :class="{blues:_right==='默认排序'}"
      @click="rightText('默认排序','')"
      >默认排序</p>
      <span></span>
      <p :class="{blues:_right==='最新发布'}"
      @click="rightText('最新发布','uTime%2Cdesc')"
      >最新发布</p>
      <span></span>
      <p :class="{blues:_right==='价格最高'}"
      @click="rightText('价格最高','currentPrice%2Cdesc')"
      >价格最高</p>
      <span></span>
      <p :class="{blues:_right==='价格最低'}"
      @click="rightText('价格最低','currentPrice%2Casc')"
      >价格最低</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router'
// 变色
let _left = ref('全部')
let _right = ref('默认排序')
const router = useRouter()
// 点击获取数据
const emit = defineEmits(['rightText','leftText'])
const leftText = (text,i) => {
    _left.value=text
    if (i==='search') {
        emit('leftText','z')
    }else {
        emit('leftText',i)
    }
}
const rightText = (text,val) => {
    _right.value=text
    emit('rightText',val)
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