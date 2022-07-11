<template>
  <div class="box-bar">
     <div>
        <p class="p1">腾发二手车</p>
        <span></span>
        <p class="p2">买亏可退、7天无理由退车、15天可换、终身质保</p>
     </div>
    <div class="bar">
        <router-link custom to="/fuwu/showone" v-slot="{navigate,isActive}">
                <p @click="navigate" :class="{bgc:isActive}">售后服务</p>
        </router-link>
        <router-link custom to="/fuwu/showtwo" v-slot="{navigate,isActive}">
                <p @click="navigate" :class="{bgc:isActive}">汽车改装</p>
        </router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// https://www.tf2sc.cn/static/img/learnTengfa_main.jpg
.box-bar {
    height: 670px;
    width: 100vw;
    background-image: url('https://www.tf2sc.cn/static/img/learnTengfa_main.jpg');
    background-size: 100%;
    color: #fff;
    text-align: center;
    position: relative;
    .p1{
        font-size: 44px;
        margin-bottom: 30px;
        padding-top: 150px;
    }
    span{
        height: 5px;
        background-color: #fff;
        width: 80px;
        display: inline-block;
        margin-bottom: 30px;
    }
    .p2{
        font-size: 28px;
    }
  .bar {
    width: 1200px;
    height: 60px;
    background-color: #f2f4fb;
    position: absolute;
    bottom: 0px;
    left: 50%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform: translateX(-50%);
    display: flex;
    color: #333333;
    font-size: 18px;
    font-weight: 500;
    line-height:60px;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    p{
        height: 60px;
        width: 140px;
    }
    .bgc{
        background-color: #fff;
        color: #5685fe;
    }
  }
}
</style>