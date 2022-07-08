<template>
  <div class="boxs">
    <div class="top">
      <h3>选择城市</h3>
    </div>
    <div class="middle">
      <ul class="middle-left">
        <li @click="onSide('#')">#</li>
        <li
          v-for="(item,key,i) in arr"
          :key="item"
          @click="onSide(i)"
        >{{key}}</li>
      </ul>
      <el-scrollbar>
        <ul class="middle-right">
          <li>
            <p ref="_dom">#</p>
            <div
              class="quan"
              @click="onCity('全国')"
            ><span :class="{red:'全国'==num}">全国</span></div>
          </li>
          <li
            v-for="(item,key) in arr"
            :key="item"
          >
            <p ref="_dom">{{key}}</p>
            <div>
              <span
                @click="onCity(list)"
                v-for="(list) in item"
                :key="list.cityId"
                :class="{red:list.name===num}"
              >{{list.name}}</span>
            </div>
          </li>
        </ul>
      </el-scrollbar>
    </div>
    <div class="botton">
      <el-button
        type="primary"
        class="but"
        @click="sure"
      >确定</el-button>
      <el-button
        class="but"
        @click="cancel"
      >取消</el-button>
    </div>
  </div>
</template>

<script setup>
import { getJson } from '@/api/index'
import { ref, onMounted} from 'vue'
const _dom=ref(null)
let arr = ref([])
let num = ref('')
let list = null
onMounted(() => {
  getJson({
    url: '/static/lib/citytest.json'
  }).then(res => {
    console.log(res.data);
    arr.value = res.data
  })
})
const onSide = (id) => {
  if (id === '#') {
    _dom.value[0].scrollIntoView()
  } else {
    _dom.value[id].scrollIntoView()
  }
}
const onCity = (lists) => {
  if (lists === '全国') {
    num.value = '全国'
  } else {
    num.value = lists.name
  }
  list = lists
}
const myemit = defineEmits(['getList','cancel'])
const sure = () => {
  myemit('getList',list)
}
const cancel = () => {
  myemit('cancel')
}
// export default {
//   data() {
//     return {
//       arr: [],
//       num: '',
//       list:''
//     }
//   },
//   mounted() {
//     getJson({
//       url: '/static/lib/citytest.json'
//     }).then(res => {
//       console.log(res.data);
//       this.arr = res.data
//     })
//   },
//   methods: {
//     // 楼层滚动
//     onSide(id) {
//       if (id === '#') {
//         this.$refs.dinP[0].scrollIntoView()
//       } else {
//         this.$refs.dinP[id].scrollIntoView()
//       }
//     },
//     onCity(list) {
//       if (list === '全国') {
//         console.log(1);
//         this.num = '全国'
//       } else {
//         this.num = list.name
//         console.log(list);
//       }
//       this.list=list
//     },
//     sure() {
//       this.$emit('getList', this.list)
//     },
//     cancel() {
//         this.$emit('cancel')
//     }
//   },
//   emits: ['getList','cancel'],
// }
</script>

<style lang="scss" scoped>
.boxs {
  width: 900px;
  height: 674px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(198, 198, 198);
  position: absolute;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  flex-wrap: wrap;
  .top {
    width: 900px;
    height: 74px;
    line-height: 74px;
    h3 {
      text-align: center;
    }
  }
  .middle {
    width: 900px;
    height: 524px;
    display: flex;
    .quan {
      color: #5685fe;
      padding: 7px 20px;
      background-color: #f5f7fe;
    }
    .middle-left {
      width: 39px;
      border-right: 1px solid #e2e4ee;
      text-align: center;
      font-size: 13px;
      padding-top: 10px;
      color: #333333;
      cursor: pointer;
    }
    .middle-right {
      width: 860px;
      background-color: #f7f9fc;
      li {
        padding-top: 14px;
        // padding-bottom: 20px;
        p {
          padding-left: 20px;
          color: #999999;
          line-height: 25px;
        }
        div {
          display: flex;
          flex-wrap: wrap;
          background-color: #ffffff;
          cursor: pointer;
          span {
            padding: 7px 20px;
            margin-left: 20px;
            color: #333333;
          }
        }
      }
    }
  }
  .red {
    background-color: #f5f7fe !important;
    color: #5d8afe !important;
  }
  .botton {
    width: 900px;
    height: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    .but {
      width: 72px;
      height: 40px;
      margin-left: 15px;
    }
  }
}
</style>