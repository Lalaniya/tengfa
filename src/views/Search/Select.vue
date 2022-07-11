<template>
  <ul class="box-select">
    <li>
      <span>品牌：</span>
      <div>
        <span
          :class="{blues:str==='不限'}"
          @click="brands('不限')"
        >不限</span>
        <span
          v-for="item in CarModel?.convenientBrands"
          :key="item.queryRules"
          :class="{blues:str===item.label}"
          @click="brands(item)"
        >{{item.label}}</span>
      </div>
    </li>
    <li>
      <span>车系：</span>
      <div></div>
    </li>
    <li>
      <span>车型：</span>
      <div>
        <span
          :class="{blues:str1==='不限'}"
          @click="model('不限')"
        >不限</span>
        <span
          v-for="item in CarModel?.convenientModels"
          :key="item.queryRules"
          :class="{blues:str1===item.label}"
          @click="model(item)"
        >{{item.label}}</span>
      </div>
    </li>
    <li>
      <span>价格：</span>
      <div>
        <span
          :class="{blues:str2==='不限'}"
          @click="price('不限')"
        >不限</span>
        <span
          v-for="item in CarModel?.convenientPrices"
          :key="item.queryRules"
          :class="{blues:str2===item.label}"
          @click="price(item)"
        >{{item.label}}</span>
      </div>
      <div class="put">
        <input
          type="text"
          placeholder="输入金额"
          v-model.number="min"
        >
        <span>——</span>
        <input
          type="text"
          placeholder="输入金额"
          v-model.number="max"
        >
        <span class="ss">万</span>
        <button @click="qd">确定</button>
      </div>
    </li>
    <li>
      <span>更多：</span>
      <ul class="drive">
        <li
          v-for="(item,key,i) in Drive_Type"
          :key="key"
          @mouseenter="_show(i)"
          @mouseleave="_hide(i)"
        >
          <div class="title">
            <span ref="str_dom">{{item[0].attrZh}}</span>
            <el-icon>
              <ArrowUp class="none" />
              <ArrowDown class="block" />
            </el-icon>
          </div>
          <div
            class="ding"
            ref="_dom"
          >
            <p
              class="blue"
              @click="addSearch('',i)"
            >不限</p>
            <p
              v-for="list in item"
              :key="list.queryRules"
              @click="addSearch(list,i)"
            >{{list.label}}</p>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import { http } from '@/api/index'
// 接收父元素的自定义事件
const emit = defineEmits(['getArr','getModel','getPrice','getBan'])
const store = useStore()
onBeforeMount(() => {
  store.dispatch('reqgetCarSelect')
})
//选择
const CarModel = computed(() => {
  if (store.state.CarSelect.length === 3) {
    return store.state.CarSelect[2]
  }
})
// 详情车辆信息
const Drive_Type = computed(() => {
  if (store.state.CarSelect.length === 3) {
    return store.state.CarSelect[1]
  }
})
// 箭头上下控制
const _dom = ref(null)
let bool = ref(true)
let str_dom = ref(null)
// 选择框显示隐藏
const _show = (i) => {
  bool.value = false
  _dom.value[i].style.display = 'block'
}
const _hide = (i) => {
  bool.value = true
  _dom.value[i].style.display = 'none'
}
const addSearch = (list, i) => {
  if (list) {
    str_dom.value[i].innerHTML = list.label
    _dom.value[i].style.display = 'none'
    // 获取车辆选择信息
    let text = JSON.parse(list.queryRules)
    emit('getArr', text)
  } else {
    str_dom.value[i].innerHTML = '不限'
    emit('getArr', i)
  }
}
let str = ref('不限')
let str1 = ref('不限')
let str2 = ref('不限')
// 品牌选择
const brands = (item) => {
  if (item === '不限') {
    str.value = item
    emit('getModel',0)
  } else {
    str.value = item.label
    let text = JSON.parse(item.queryRules)
    emit('getBan',text)
  }
  
}
const model = (item) => {
  if (item === '不限') {
    str1.value = item
    emit('getModel',1)
  } else {
    str1.value = item.label
    let text = JSON.parse(item.queryRules)
    emit('getModel',text)
  }
}
// 车辆价格区间
let min = ref ()
let max =ref ()
const qd = () => {
  if (min.value>max.value) {
    location.reload()
  } else {
   let text ={currentPrices:[min.value,max.value]}
   emit('getPrice',text)
  }
}
const price = (item) => {
  if (item === '不限') {
    str2.value = item
    emit('getPrice',2)
  } else {
    str2.value = item.label
    let text = JSON.parse(item.queryRules)
    emit('getPrice',text)
  }
  
}
</script>

<style lang="scss" scoped>
.box-select {
  width: 1200px;
  box-sizing: border-box;
  padding: 30px 20px;
  margin: 0 auto;
  li {
    height: 60px;
    font-size: 14px;
    color: #333333;
    line-height: 40px;
    display: flex;
    div {
      span {
        margin-left: 15px;
        padding: 5px 8px;
      }
    }
    .drive {
      display: flex;
      li {
        width: 120px;
        height: 40px;
        border: 1px solid rgb(189, 189, 189);
        background-color: #fff;
        margin-left: 15px;
        position: relative;
        z-index: 10;
        cursor: pointer;
        border-radius: 8px;
        .ding {
          text-align: center;
          width: 120px;
          border: 1px solid #000;
          border-top: 1px solid #fff;
          left: -1px;
          top: 40px;
          background-color: #fff;
          position: absolute;
          display: none;
          border: 1px solid #5685fe;
          p:hover {
            background-color: #5685fe;
            color: #fff;
          }
        }
        .title {
          width: 120px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            margin-left: 0;
            margin-right: 20px;
            height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .blue {
          background-color: #5685fe;
          color: #fff;
        }
      }
      .none {
        display: none;
      }
      li:hover {
        border: 1px solid #5685fe;
        .block {
          display: none;
        }
        .none {
          display: block;
        }
      }
    }
  }
  .blues {
    background-color: #5685fe;
  }
  .put {
    display: flex;
    align-content: center;
    margin-left: 20px;
    height: 40px;
    border-radius: 10px;
    overflow: hidden;
    span {
      margin: 0;
      height: 40px;
      line-height: 30px;
    }
    input {
      width: 90px;
      height: 40px;
      border: 1px solid #f0f0f0;
      border-radius: 10px;
      box-sizing: border-box;
      text-align: center;
      outline: none;
    }
    button {
      width: 68px;
      height: 40px;
      border: none;
      background-color: #f5f7fe;
    }
    .ss {
      margin: 0px 5px;
    }
  }
  .put:hover {
    box-shadow: 0 0 10px rgb(205, 205, 205);
    button {
      background-color: #5685fe;
      color: #fff;
    }
  }
}
</style>