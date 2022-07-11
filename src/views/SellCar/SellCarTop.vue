<template>
  <div class="sellfrom">
    <div class="from-left">
      <div class="title-text">
        <p>HI，在线评估</p>
        <span>提交信息，快速获取估价～</span>
      </div>
      <div class="from-conten">
        <div class="from-name">
          <input
            type="text"
            placeholder="姓名"
            v-model="name"
          >
          <input
            type="text"
            placeholder="手机号码"
            v-model.number="phone"
          >
        </div>
        <div class="from-model">
          <input
            type="text"
            placeholder="车型"
            v-model="models"
          >
          <input
            type="text"
            placeholder="公里数"
            v-model.number="num"
          >
        </div>
        <div class="from-time">
          <input
            type="text"
            placeholder="上牌时间"
            v-model="times"
          >
        </div>
        <div class="submit">
          <el-button
            :plain="true"
            @click="sumite"
          >提交信息</el-button>
          <!-- <button @click="sumite">提交信息</button> -->
        </div>
      </div>
    </div>
    <div class="from-right">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { http } from '@/api/index'
import { ElMessage } from 'element-plus'
import qs from 'qs'
// 用户姓名
let name = ref('')
// 用手机号码
let phone = ref('')
// 车型
let models = ref('')
// 公里数
let num = ref('')
// 上牌时间
let times = ref('')
const sumite = () => {
  // 13299212764
  let text = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  if (!text.test(phone.value)) {
    ElMessage('手机号码错误')
  } else if (name.value === '') {
    ElMessage('名字不能为空')
  } else {
    http.post('/api/tfcar/car/estimate', qs.stringify({
      name: name.value,
      phone: phone.value,
      model:models.value,
      mileage:num.value,
      dateOfRegistration:times.value,
      type: 0
    })).then(res => {
        if (res.status===200) {
            ElMessage(res.data.data)
            location.reload()
        }
    })
    

  }
}

</script>

<style lang="scss" scoped>
.sellfrom {
  width: 1200px;
  height: 490px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 20px;
  margin: 30px auto;
  .from-left {
    width: 540px;
    height: 490px;
    background-color: #4e6193;
    box-sizing: border-box;
    padding: 50px 30px;
    .title-text {
      color: #fff;
      font-size: 14px;
      p {
        font-size: 25px;
        font-weight: 600;
        display: inline-block;
        margin-right: 20px;
      }
      span {
        color: #dcdfe9;
        vertical-align: bottom;
      }
    }
    .from-conten {
      width: 470px;
      div {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-content: center;
      }
      input {
        width: 215px;
        height: 50px;
        background-color: #fff;
        outline: none;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 5px 8px;
        font-size: 14px;
        color: #525b78;
        border: none;
      }
      .from-time {
        input {
          width: 470px;
        }
      }
      .submit {
        button {
          width: 470px;
          height: 50px;
          border: none;
          background-color: #5581f3;
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          border-radius: 5px;
        }
      }
    }
  }
  .from-right {
    width: 660px;
    height: 490px;
    background-image: url('@/assets/sellcar.png');
    background-color: #5685fe;
  }
}
</style>