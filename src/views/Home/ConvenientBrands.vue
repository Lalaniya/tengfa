<template>
  <div class="box">
    <div class="title">
      <h3>我要买车</h3>
      <div>
        <ul>
          <li
            class="brands"
            v-for="item in brands"
            :key="item.sortValue"
            @click="goBrands(item.sortValue)"
          >
            <img
              :src="item.logo"
              alt=""
            >
            <span>{{item.label}}</span>
          </li>
        </ul>
      </div>
      <div class="price">
        <div
          v-for="item in price"
          :key="item.label"
          @click="goPrice(item.sortValue)"
        >{{item.label}}</div>
      </div>
      <div class="model">
        <div
          v-for="item in model"
          :key="item.label"
          @click="goModel(item.sortValue)"
        >{{item.label}}</div>
      </div>
    </div>
    <div class="title-car">
      <h3>我要卖车</h3>
      <div class="con">
        <div class="inp">
          <div>
            <input type="text" v-model="value" placeholder="请输入手机号">
            <el-button
              class="val"
              type="primary"
            >立即评估</el-button>
          </div>
          <div class="aa">
            <div>全国代购</div>
            <span></span>
            <div>到店估值</div>
          </div>
        </div>
        <div class="bgc">
          <img
            src="https://www.tf2sc.cn/static/img/%E6%88%91%E8%A6%81%E5%8D%96%E8%BD%A6.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {http} from '@/api/index'
export default {
  name: 'ConvenientBrands',
  data() {
    return {
      brands: [],
      price: [],
      model: [],
      value: ''
    }
  },
  mounted() {
    http({
      url: '/api/tfcar/car/convenient',
    }).then(res => {
      this.brands = res.data.data.convenientBrands
      this.model = res.data.data.convenientModels
      this.price = res.data.data.convenientPrices
    })
  },
  methods: {
    goBrands(id) {
      console.log(id);
    },
    goPrice(id) {
      console.log(id);
    },
    goModel(id) {
      console.log(id);
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 1200px;
  height: 300px;
  margin: 0 auto;
  padding-top: 50px;
  box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 40%);
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  h3 {
    padding-left: 15px;
    border-left: 8px solid #5685fe;
    font-size: 24px;
    color: #333333;
  }
  div {
    width: 553px;
  }
  .title {
    div {
      margin-left: 40px;
      margin-top: 30px;
      ul {
        width: 495px;
        display: flex;
        justify-content: space-between;
        li {
          cursor: pointer;
          width: 69px;
          font-size: 14px;
          color: #333333;
          display: flex;
          align-items: center;
          justify-content: space-between;
          img {
            width: 30px;
          }
        }
      }
    }
  }
  .price {
    width: 495px;
    display: flex;
    div {
      cursor: pointer;
      margin: 0;
      padding: 8px 10px;
      margin-right: 15px;
      margin-top: 15px;
      background-color: #f5f7fe;
      text-align: center;
      border-radius: 15px;
    }
  }
  .model {
    width: 495px;
    display: flex;
    div {
      cursor: pointer;
      margin: 0;
      padding: 8px 10px;
      margin-top: 15px;
      margin-right: 15px;
      background-color: #f5f7fe;
      text-align: center;
      border-radius: 15px;
    }
  }
  .con {
    display: flex;
    height: 176px;
    box-sizing: border-box;
    padding-top: 20px;
    justify-content: space-between;
    .bgc {
      width: 179px;
      overflow: hidden;
    }
    .inp{
      width: 380px;
    }
    .inp >div{
      width: 320px;
      height: 40px;
      border: 1px solid rgba(210, 210, 210, 0.722);
      border-radius: 10px;
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      margin-top: 15px;
      box-shadow: 0 0 5px rgba(221, 221, 221, 0.536);
      input{
        width: 220px;
        border: none;
        background-color: rgba(255, 255, 255, 0.267);
        height: 40px;
        outline: none;
        box-sizing: border-box;
        padding: 5px 10px;
      }
      .val{
        height: 40px;
        width: 100px;
        border-radius: 0;
      }
    
    }
    .inp .aa{
        line-height: 56px;
        width: 330px;
        height: 56px;
        margin-top: 60px;
        box-sizing: 0 0 5px rgb(202, 202, 202);
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
          width: 164px;
          text-align: center;
        }
        span{
          height: 40px;
          width: 2px;
          background-color: #d8e3ff;
        }
    }
  }
}
</style>