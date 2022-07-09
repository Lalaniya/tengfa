<template>
  <div class="box">
    <img
      :src="props.item.cover"
      alt=""
    >
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
const times=computed(()=>{
    //拿到时间戳算出时间
  return  moment(props.item.dateOfRegistration).format('YYYY [年] MM [月]')
})
</script>

<style lang="scss" scoped>
.box {
  width: 277px;
  height: 358px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  img{
    width: 280px;
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
.box:hover{
    box-shadow: 0 0 15px 5px #ebebf3;
    h3{
        color: #5685fe !important;
    }
    cursor: pointer;
}
</style>