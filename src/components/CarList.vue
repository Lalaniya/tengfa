<template>
  <div class="boxs">
    <img
      :src="props.item.cover"
      alt=""
    >
    <div class="pit"
    :class="{bj0:props.item.saleType===0
    ,bj1:props.item.saleType===1
    ,bj2:props.item.saleType===2
    ,bj3:props.item.saleType===3
    }"
    >{{sale(props.item.saleType)}}</div>
    <h3>{{props.item.carName}}</h3>
    <p class="message">
        <span>{{times}}</span>
            <span>/</span>
        <span>{{props.item.mileage}}万公里</span>
    </p>
    <p class="price">{{props.item.currentPrice}}万</p>
  </div>
</template>

<script setup> 
import moment from 'moment'
import { ref, onMounted, computed } from 'vue'
moment.locale('zh-cn')
// 接收父元素传递的参数
const props = defineProps(['item'])
onMounted(() => {

})
// 小标
const sale = (type)=>{
  switch (type) {
    case 2:
      return '限时特惠'
    case 0:
      return '腾发自营'
    case 1:
      return '车主直售'
    case 3:
      return '严选车源'
  }
  
}
const times=computed(()=>{
    //拿到时间戳算出时间
  return  moment(props.item.dateOfRegistration).format('YYYY [年] MM [月]')
})
</script>

<style lang="scss" scoped>
.pit{
  top: 165px;
  left: -1px;
  position: absolute;
  width: 64px;
  height: 20px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  padding: 1px 3px;
  border-radius:5px;
}
.bj0{
  background: linear-gradient(90deg, #FF8856 0%, #FF4725 100%);
}
.bj1{
  background: linear-gradient(90deg, #5F98F6 0%, #2E68EB 100%);
}
.bj2{
  background: linear-gradient(90deg, #FF1766 0%, #FF2A23 100%);
}
.bj3{
  background: linear-gradient(90deg, #4DD4D4 0%, #0CBFCD 100%);
}
.boxs {
  width: 277px;
  height: 358px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  img{
    width: 280px;
    height: 187px;
  }
  p {
    box-sizing: border-box;
    padding-left: 10px;
    width: 270px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h3{
    width: 270px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    color: #333;
    line-height:50px;
    padding-left: 10px;
    font-size: 18px;
  }
  .message{
    span{
        padding: 5px 5px 5px 0px;
        color: #999;
        font-size: 16px;
    }
  }
  .price{
    color: #e73424;
    font-weight: 600;
    font-size: 23px;
    line-height: 50px;
    margin-top: 15px;
  }
}
.boxs:hover{
    box-shadow: 0 0 15px 5px #ebebf3;
    h3{
        color: #5685fe !important;
    }
    cursor: pointer;
}
</style>