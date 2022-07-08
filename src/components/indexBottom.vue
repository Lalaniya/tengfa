<template>
  <footer>
    <div class="top">
      <div class="top-box">
        <div><img
            src="https://www.tf2sc.cn/static/img/tengfa.png"
            alt=""
          ></div>
        <span class="shu"></span>
        <p>真实车源</p>
        <div class="text">
          <p>二手车</p>
          <p>新闻咨询</p>
          <p>常见问题</p>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="middle-top">
        <div class="texts">
            <p>咨询电话：400-0606-777</p>
            <p>营业时间：周一至周日 早 8:00 - 晚 12:00</p>
        </div>
        <ul>
            <li><img src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734978.jpg" alt="">
            <br>
            关注腾发名车
            <br>
            微信公众号
            </li>
            <li><img src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734976.jpg" alt="">
            <br>
            扫码打开小程序
            <br>
            关注更多信息
            </li>
            <li><img src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734977.jpg" alt="">
            <br>
            下载app
            <br>
            关注更多信息
            </li>
        </ul>
      </div>
      <p>
        腾发二手车以二手车销售、新车销售、汽车分期、汽车保险、维修保养、汽车改装、汽车收购置换为主营业务，是集实体与线上为一体的综合性购车用车销售服务平台。
      </p>
      <p>
        门店地址：【国基路店】郑州市花园路与国基路交汇处西南角 【天伦路店】郑州市花园路与天伦路交汇处向东50米路南
      </p>
      <p>
        腾发二手车目前营业面积3万余平实体展厅，近5000平独立的售后服务中心，3000余台的常态库存涵盖各种国际品牌名车。全国二手车经营示范基地，百万车主信赖之选！
      </p>
    </div>
    <div class="bottom">
        <div>Copyright © 2014 - 2021 All Rights Reserved 版权所有
            <br>
            <span>豫ICP备14025595号</span>
        </div>
        <div class="imgs">
            <img src="https://www.tf2sc.cn/static/img/cert_01.jpg" alt="">
            <img src="https://www.tf2sc.cn/static/img/cert_02.jpg" alt="">
            <img src="https://www.tf2sc.cn/static/img/cert_03.jpg" alt="">
            <img src="https://www.tf2sc.cn/static/img/cert_04.jpg" alt="">
        </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
footer {
  height: 532px;
  background-color: #2a2c37;
  .top {
    height: 70px;
    background-color: #242632;
    .top-box {
      width: 1200px;
      height: 70px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      color: #dee3ec;
      font-weight: 500;
      font-size: 12px;
      .shu {
        height: 30px;
        width: 1px;
        background-color: #fff;
        margin: 0 20px;
      }
      .text {
        margin-left: 300px;
        display: flex;
        line-height: 70px;
        width: 200px;
        justify-content: space-between;
      }
    }
  }
  .middle {
    width: 1200px;
    margin: 0 auto;
    color: #d4d4d4;
    font-size: 14px;
    height: 350px;
    .middle-top{
        height: 260px;
        width: 1200px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding-top: 80px;
        ul{
            display: flex;
            height: 140px;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            width: 360px;
            img{
                width: 88px;
                height: 88px;
            }
        }
        .texts{
            box-sizing: border-box;
            padding-top: 50px;
            height: 140px;
            p{
                text-align: left;
                line-height: 25px;
            }
        }
    }
    p{
        text-align: center;
    }
  }
  .bottom{
    background-color: #242632;
    height: 130px;
    div{
        width: 500px;
        margin: 20px auto;
        text-align: center;
        color: #d4d4d4;
    }
    .imgs{
        margin: 0 auto;
        width: 800px;
        img{
            height: 36px;
            margin-right: 30px;
        }
    }
  }
}
</style>