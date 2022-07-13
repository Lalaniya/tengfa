<template>
  <div v-if="list">
    <div class="box">
      <div class="detail-div">
        <div class="left">
          <div class="img-top">
            <img
              :src="image"
              alt=""
            >
          </div>
          <div class="img-bot">
            <img
              v-for="image in 4"
              :key="image"
              :src="photo[image]"
              @mouseenter="addimg(photo[image])"
              alt=""
            >
          </div>
        </div>
        <div class="right">
          <p class="carid">车架号：{{list[1].carId}}</p>
          <p class="carname">{{list[1].carName}}</p>
          <div class="params">
            <ul class="one">
              <li>
                <p class="tit">{{atime(list[1].dateOfRegistration)}}</p>
                <p>上牌时间</p>
              </li>
              <li class="shu"></li>
              <li>
                <p class="tit">{{list[1].mileage}}万公里</p>
                <p>公里数</p>
              </li>
              <li class="shu"></li>
              <li>
                <p class="tit">{{list[1].parameterVo.carColor}}</p>
                <p>车身颜色</p>
              </li>
              <li class="shu"></li>
              <li>
                <p class="tit">{{list[1].parameterVo.gearbox}}</p>
                <p>变速箱</p>
              </li>
              <li class="shu"></li>
              <li>
                <p class="tit">{{list[1].displacement}}</p>
                <p>排量</p>
              </li>
            </ul>
            <ul class="two">
              <li>
                <p class="tit">{{list[1].parameterVo.fuel}}</p>
                <p>燃油方式</p>
              </li>
              <li class="shu"></li>
              <li>
                <p class="tit">{{list[1].parameterVo.emissionStandard}}</p>
                <p>排放标准</p>
              </li>
              <li class="shu"></li>
              <li>
                <p class="tit">{{atime(list[1].parameterVo.deliveryTime)}}</p>
                <p>出厂日期</p>
              </li>
              <li class="shu"></li>
              <li>
                <p class="tit">{{list[1].parameterVo.carTransfer}}</p>
                <p>过户次数</p>
              </li>
              <li class="shu"></li>
              <li>
                <p></p>
                <p></p>
              </li>
            </ul>
          </div>
          <div class="price">
            <p class="ca">{{list[1].priceVo.caHallPrice}}万</p>
            <s>新车价{{list[1].priceVo.carNetPrice}}万</s>
            <p class="net">为你节约<span>{{(list[1].priceVo.carNetPrice - list[1].priceVo.caHallPrice).toFixed(2)}}</span>万</p>
            <div class="pos">
              <p class="ioc">
                <el-icon style="font-size: 20px;">
                  <Briefcase />
                </el-icon><span>灵活按揭</span>
              </p>
              <p>首付<span>30%</span></p>
              <p>月供<span>{{list[1].priceVo.monthlyRepayment}}元</span>({{list[1].priceVo.mortgageNum}})期</p>
            </div>
          </div>
          <div class="but">
            <el-button
              class="but1"
              type="primary"
              @click="goZiXun"
            >在线咨询</el-button>
            <el-button
              class="but2"
              type="primary"
              @click="goLianXi"
            >联系电话</el-button>
          </div>
        </div>
      </div>

    </div>
    <TitleText>
      <template #title-text>车辆描述</template>
    </TitleText>
    <div class="miaoshu">
      <p>暂无描述</p>
      <div class="bjb">
        <p class="title"><span>//</span><span>服务承诺</span><span>//</span></p>
        <div class="service-info">
          <div>
            <img
              src="https://www.tf2sc.cn/static/img/ketui.png"
              alt=""
            >
            <p>7天无理由</p>
          </div>
          <div>
            <img
              src="https://www.tf2sc.cn/static/img/kehuan.png"
              alt=""
            >
            <p>15天可换</p>
          </div>
          <div>
            <img
              src="https://www.tf2sc.cn/static/img/zhibao.png"
              alt=""
            >
            <p>终身质保</p>
          </div>
        </div>
      </div>
    </div>
    <TitleText>
      <template #title-text>检测报告</template>
    </TitleText>
    <div class="report">
      <div class="bg-img"></div>
      <div class="report-detail">
        <div class="report-item">
          <span>基本信息核查</span>
          <div class="report-item-ok">
            <img src="https://www.tf2sc.cn/static/img/tongguo.png">
            <span>已检测</span>
          </div>
        </div>
        <div class="report-item">
          <span>动力系统检测</span>
          <div class="report-item-ok">
            <img src="https://www.tf2sc.cn/static/img/tongguo.png">
            <span>已检测</span>
          </div>
        </div>
        <div class="report-item">
          <span>车身外观检测</span>
          <div class="report-item-ok">
            <img src="https://www.tf2sc.cn/static/img/tongguo.png">
            <span>已检测</span>
          </div>
        </div>
        <div class="report-item">
          <span>功能部件检测</span>
          <div class="report-item-ok">
            <img src="https://www.tf2sc.cn/static/img/tongguo.png">
            <span>已检测</span>
          </div>
        </div>
        <div class="report-item">
          <span>重大事故排查</span>
          <div class="report-item-ok">
            <img src="https://www.tf2sc.cn/static/img/tongguo.png">
            <span>已检测</span>
          </div>
        </div>
        <div class="report-mode"></div>
      </div>
    </div>
    <TitleText>
      <template #title-text>车辆图片</template>
    </TitleText>
    <ul class="imgss">
      <li
        v-for="item in photo"
        :key="item"
      ><img
          :src="item"
          alt=""
        ></li>
    </ul>
    <TitleText>
      <template #title-text>同类推荐</template>
    </TitleText>
    <div class="carlist">
      <template v-for="(item,x) in list_Car" :key="x">
        <CarList
           v-if="x<4"
          :item="item"
          class="list-car"
          @click="goDetail(item)"
        ></CarList>
      </template>
    </div>
  </div>
</template>

<script setup>
import CarList from '@/components/CarList.vue'
import TitleText from '@/components/TitleText.vue'
import { http } from '@/api/index'
import { onBeforeMount, computed, ref ,watch, nextTick} from 'vue'
import { useStore } from 'vuex'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import router from '@/router'
// reqgetDetail
const store = useStore()
const route = useRoute()
onBeforeMount(() => {
  store.dispatch('reqgetDetail', route.query.ind)
});
const list = computed(() => {
  if (store.state.CarDetail.length===0) {
    return null
  }else {
    return store.state.CarDetail
  }
})
// 切换图片
let image = ref('https://img9.vilipix.com/picture/pages/regular/2021/03/24/18/11/88725167_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000')
const photo = computed(() => {
  if (list.value.length === 0) {
    return []
  } else {
    let imgs = list.value[1]?.photoVo?.detail.split(',')
    image.value = imgs[0]
    return imgs
  }
})

const addimg = (img) => {
  image.value = img
}
// 计算时间
const atime = (times) => {
  if (times===undefined) {
    return '无'
  } else {
    let x = times?.split("-")
    return x[0] + '年' + x[1] + '月'
  }
}
// 在线咨询跳转
const goZiXun = () => {
  console.log("在线咨询");
}
// 联系电话跳转
const goLianXi = () => {
  console.log(" 联系电话");
}
//  同类推荐 route.query.ind
let list_Car = ref([])
onBeforeMount(() => {
  http({ url: '/api/tfcar/car/similarRecommendation/' + route.query.ind, method: 'GET' }).then(res => {
    if (res.data.status === 200) {  
      list_Car.value = res.data.data
    }
  })
})
const goDetail = (list) => {
    router.push({
    name:'detail',
    query:{
      ind:list.ind
    }
  })
}
onBeforeRouteUpdate((to,from)=>{
    store.dispatch('reqgetDetail', route.query.ind)
    http({ url: '/api/tfcar/car/similarRecommendation/' + route.query.ind, method: 'GET' }).then(res => {
    if (res.data.status === 200) {  
      list_Car.value = res.data.data
      nextTick(() => {
        document.documentElement.scrollTop=0
      })
    }
  })
})
</script>
 
 <style lang="scss" scoped>
.box {
  margin-bottom: 20px;
  padding-top: 30px;
  background-color: #fff;
  height: 562px;
  border-bottom: 1px solid #ebebf6;
  box-shadow: 0 3px 10px #e9e9eb;
  .detail-div {
    width: 1200px;
    height: 502px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left,
    .right {
      width: 600px;
      height: 100%;
    }
    .left {
      .img-top {
        height: 400px;
        overflow: hidden;
        img {
          width: 600px;
          cursor: pointer;
        }
      }
      .img-bot {
        margin-top: 30px;
        img {
          width: 118px;
          height: 80px;
          margin-right: 20px;
          cursor: pointer;
        }
      }
    }
    .right {
      padding-top: 20px;
      box-sizing: border-box;
      padding-left: 20px;
      color: #333333;
      .carid {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 15px;
      }
      .carname {
        font-size: 25px;
        font-weight: 600;
      }
      .params {
        width: 580px;
        height: 140px;
        background-color: #f9f9f9;
        margin-top: 15px;
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
          color: #999999;
          font-size: 14px;
          li {
            width: 120px;
            box-sizing: border-box;
            padding-left: 20px;
            .tit {
              font-size: 16px;
              color: #000000;
            }
          }
          .shu {
            width: 1px;
            height: 55px;
            padding: 0px;
            background-color: #f0f0f0;
          }
        }
      }
      .price {
        margin-left: 20px;
        display: flex;
        align-content: center;
        height: 50px;
        margin-top: 20px;

        position: relative;
        .ca {
          font-weight: 600;
          font-size: 25px;
          color: #e73424;
        }
        s {
          color: #666666;
          font-size: 14px;
          line-height: 35px;
          margin: 0px 10px;
        }
        .net {
          line-height: 35px;
          font-size: 14px;
          font-weight: 600;
          color: #080808;
          span {
            color: #f8a64f;
          }
        }
        .pos {
          width: 550px;
          height: 40px;
          background-color: #ffeee2;
          position: absolute;
          left: 0;
          top: 50px;
          display: flex;
          align-content: center;
          line-height: 40px;
          P {
            margin-left: 15px;
            font-size: 14px;
            span {
              color: #f79970;
            }
          }
          .ioc {
            display: flex;
            align-items: center;
          }
        }
        .pos::after {
          content: '';
          position: absolute;
          top: -18px;
          border: 10px solid rgba(0, 0, 0, 0);
          border-bottom: 13px solid #ffeee2;
          left: 10px;
        }
      }
    }
  }
  .but {
    margin-top: 140px;
    margin-left: 20px;
    .but1 {
      width: 140px;
      height: 48px;
      color: #fff;
      font-weight: 600;
      font-size: 20px;
      background-color: #3298fc;
    }
    .but2 {
      width: 278px;
      height: 48px;
      color: #fff;
      font-weight: 600;
      font-size: 20px;
      background-color: #2567ff;
    }
  }
}
.miaoshu {
  font-size: 16px;
  color: #333333;
  width: 1200px;
  margin: 0 auto;
  .bjb {
    width: 1000px;
    height: 208px;
    border-radius: 15px;
    margin: 20px auto;
    background-image: url('https://www.tf2sc.cn/static/img/chengnuo.png');
    .title {
      width: 250px;
      color: #f3d7a9;
      font-size: 36px;
      margin: 0px auto;
      padding-top: 15px;
      display: flex;
      justify-content: space-between;
    }
    .service-info {
      width: 800px;
      height: 105px;
      padding-top: 15px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        text-align: center;
        width: 250px;
        color: #f3d7a9;
        font-size: 16px;
        line-height: 30px;
        margin-top: 15px;
      }
    }
  }
}
.report {
  width: 1000px;
  margin: 20px auto;
  .bg-img {
    width: 1000px;
    height: 220px;
    background-image: url('https://www.tf2sc.cn/static/img/baogao.png');
    background-size: 1000px 220px;
  }
  .report-detail {
    margin: 30px 140px 0 140px;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    position: relative;
    justify-content: space-between;
  }
  .report-item {
    display: flex;
    width: 352px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }
}
.imgss {
  display: flex;
  flex-wrap: wrap;
  width: 1210px;
  margin: 0 auto;
  li {
    width: 590px;
    height: 394px;
    overflow: hidden;
    margin-left: 15px;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
}
.carlist {
  width: 1200px;
  margin: 30px auto;
  display: flex;
  .list-car{
    margin-left: 20px;
  }
}
</style>